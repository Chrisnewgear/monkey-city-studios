import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Animated WebGL background for the hero — a slow-drifting particle field
 * in the existing brand blues over the navy gradient.
 *
 * Performance / hygiene:
 *  - Pixel ratio capped at 2.
 *  - Respects prefers-reduced-motion (renders a single static frame, no loop).
 *  - Pauses when scrolled out of view (IntersectionObserver) or tab hidden.
 *  - Full teardown on unmount (geometry / material / renderer disposed).
 *  - Colors are read from CSS custom properties so the palette stays in sync.
 *  - The canvas has pointer-events: none (set in Hero.astro) so it never
 *    intercepts clicks.
 */
export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Bail entirely if WebGL isn't available — the CSS gradient/orbs remain.
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
    } catch {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    // ---- Read brand colors from the existing CSS variables ----
    const css = getComputedStyle(document.documentElement);
    const readColor = (name: string, fallback: string) =>
      new THREE.Color((css.getPropertyValue(name).trim() || fallback));
    const pulse = readColor("--pulse", "#1ab0ff");
    const azure = readColor("--azure", "#1592d4");

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(70, 1, 0.1, 100);
    camera.position.z = 30;

    // ---- Particle field: count scaled to viewport area, capped for perf ----
    const parent = canvas.parentElement as HTMLElement;
    const area = parent.clientWidth * parent.clientHeight;
    const COUNT = Math.min(900, Math.max(220, Math.round(area / 2200)));

    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const SPREAD_X = 70;
    const SPREAD_Y = 44;
    const SPREAD_Z = 40;

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD_X;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;

      // Blend between the two brand blues for gentle variation.
      const c = pulse.clone().lerp(azure, Math.random());
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      speeds[i] = 0.6 + Math.random() * 1.2; // per-particle drift rate
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.22,
      sizeAttenuation: true,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ---- Sizing ----
    function resize() {
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    resize();

    function render() {
      renderer.render(scene, camera);
    }

    // ---- Animation loop (rAF-timestamp driven, frame-rate independent) ----
    let rafId = 0;
    let running = false;
    let elapsed = 0; // accumulated seconds while running
    let lastTs = 0;

    function frame(ts: number) {
      if (!lastTs) lastTs = ts;
      const dt = Math.min((ts - lastTs) / 1000, 0.05); // clamp tab-switch spikes
      lastTs = ts;
      elapsed += dt;

      const pos = geometry.attributes.position as THREE.BufferAttribute;
      const arr = pos.array as Float32Array;

      // Gentle vertical drift; wrap particles that rise off the top.
      for (let i = 0; i < COUNT; i++) {
        let y = arr[i * 3 + 1] + speeds[i] * dt * 0.6;
        if (y > SPREAD_Y / 2) y = -SPREAD_Y / 2;
        arr[i * 3 + 1] = y;
      }
      pos.needsUpdate = true;

      // Slow, lazy rotation of the whole field for parallax depth.
      points.rotation.y = Math.sin(elapsed * 0.04) * 0.25;
      points.rotation.x = Math.cos(elapsed * 0.03) * 0.12;

      render();
      rafId = requestAnimationFrame(frame);
    }

    function start() {
      if (running || reduceMotion.matches) return;
      running = true;
      lastTs = 0; // resume cleanly without a time jump
      rafId = requestAnimationFrame(frame);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    // ---- Reduced motion: one static frame, no loop ----
    if (reduceMotion.matches) {
      render();
    }

    // ---- Pause when off-screen ----
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    // ---- Pause when tab hidden ----
    const onVisibility = () => {
      if (document.hidden) stop();
      else if (!reduceMotion.matches) start();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // ---- Resize handling ----
    const ro = new ResizeObserver(() => {
      resize();
      if (!running) render();
    });
    ro.observe(parent);

    // ---- React to reduced-motion changes ----
    const onReduceChange = (e: MediaQueryListEvent) => {
      if (e.matches) {
        stop();
        render();
      } else {
        start();
      }
    };
    reduceMotion.addEventListener("change", onReduceChange);

    // ---- Teardown ----
    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      reduceMotion.removeEventListener("change", onReduceChange);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-webgl" aria-hidden="true" />;
}

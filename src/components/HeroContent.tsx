import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { hero, detectLang, LANG_EVENT, DEFAULT_LANG, type Lang } from "../i18n/translations";

/**
 * Hero copy + CTAs with staggered framer-motion entrance.
 * Astro server-renders this island's markup, so the headline ships in the
 * initial HTML (good for LCP/SEO); framer-motion only animates it in on hydrate.
 * Class names match the styles defined in Hero.astro (<style is:global>).
 *
 * Unlike the static sections (translated by the DOM-swap script in
 * LanguageToggle.astro), this island re-renders its own text, so it reads the
 * language itself: it server-renders in English, then on mount picks up the
 * visitor's language and stays in sync via the global `mcs:langchange` event.
 */

// Tracks the active language for React. Starts at the SSR default so server and
// first client render match (no hydration mismatch), then syncs on mount.
function useLang(): Lang {
  const [lang, setLang] = useState<Lang>(DEFAULT_LANG);
  useEffect(() => {
    setLang(detectLang());
    const onChange = (e: Event) => setLang((e as CustomEvent<Lang>).detail);
    window.addEventListener(LANG_EVENT, onChange);
    return () => window.removeEventListener(LANG_EVENT, onChange);
  }, []);
  return lang;
}

export default function HeroContent() {
  const reduce = useReducedMotion();
  const lang = useLang();
  const t = hero[lang];
  const stats = t.stats;

  // When reduced motion is requested, render everything in place instantly.
  const container: Variants = {
    hidden: {},
    show: {
      transition: reduce
        ? {}
        : { staggerChildren: 0.1, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const hover = reduce ? {} : { y: -2 };
  const tap = reduce ? {} : { scale: 0.97 };

  return (
    <motion.div
      className="hero-content"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.span className="hero-badge" variants={item}>
        <span className="hero-badge-dot" />
        {t.badge}
      </motion.span>

      <motion.h1 variants={item}>
        {t.headingPre}<br />
        <span className="hero-accent">
          {t.headingAccent}
          {/* Hand-drawn accent stroke — draws itself in just after the
              headline settles, then stays. Static (fully drawn) under
              reduced motion. */}
          <motion.svg
            className="hero-accent-underline"
            viewBox="0 0 312 14"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M3 9.5C54 4 121 3 169 4.5C217 6 268 8.5 309 5"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.8, delay: 0.85, ease: [0.65, 0, 0.35, 1] }
              }
            />
          </motion.svg>
        </span>
      </motion.h1>

      <motion.p className="hero-subtitle" variants={item}>
        {t.subtitle}
      </motion.p>

      <motion.div className="hero-cta" variants={item}>
        <motion.a
          href="/contact"
          className="btn btn--primary btn--lg"
          whileHover={hover}
          whileTap={tap}
        >
          {t.ctaPrimary}
          <svg
            className="btn-arrow"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
        <motion.a
          href="#tech-stack"
          className="btn btn--ghost-light btn--lg"
          whileHover={hover}
          whileTap={tap}
        >
          {t.ctaSecondary}
        </motion.a>
      </motion.div>

      <motion.dl className="hero-stats" variants={item}>
        {stats.map((stat) => (
          <div className="hero-stat" key={stat.label}>
            <dt>{stat.value}</dt>
            <dd>{stat.label}</dd>
          </div>
        ))}
      </motion.dl>
    </motion.div>
  );
}

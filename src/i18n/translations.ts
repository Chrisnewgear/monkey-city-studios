/*
  Client-side i18n for the marketing site.

  Strategy: English is the source language and lives directly in the markup.
  Static elements opt in with `data-i18n="key"`; on load a small script reads
  the visitor's language and, for Spanish, swaps each element's text for the
  matching entry in `es` below. English needs no entries — it's whatever the
  HTML already says (captured as a baseline so we can switch back).

  The React Hero island re-renders its own text, so it can't rely on the DOM
  swap — it reads the full bilingual `hero` map via the exported helpers.
*/

export type Lang = "en" | "es";

export const LANGS: Lang[] = ["en", "es"];
export const DEFAULT_LANG: Lang = "en";
export const STORAGE_KEY = "mcs-lang";
/** Fired on <window> whenever the language changes; detail is the new Lang. */
export const LANG_EVENT = "mcs:langchange";

/** Resolve the active language: saved choice → browser language → English. */
export function detectLang(): Lang {
  if (typeof window === "undefined") return DEFAULT_LANG;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
  } catch {
    /* localStorage can throw in private mode — fall through to navigator */
  }
  const nav = (
    navigator.languages?.[0] ||
    navigator.language ||
    ""
  ).toLowerCase();
  return nav.startsWith("es") ? "es" : "en";
}

/** Spanish overrides for every static `data-i18n` key. */
export const es: Record<string, string> = {
  // Header
  "nav.services": "Servicios",
  "nav.technology": "Tecnología",
  "nav.clients": "Clientes",
  "nav.contact": "Contacto",
  "cta.startProject": "Inicia un proyecto",

  // Services section
  "services.kicker": "Lo que hacemos",
  "services.title": "Capacidad de producto de extremo a extremo, bajo un mismo techo.",
  "services.lead":
    "Desde el primer boceto en la pizarra hasta una plataforma con usuarios reales — cubrimos todo el ciclo para que nunca tengas que cambiar de proveedor.",
  "services.learnMore": "Saber más",
  "services.ctaTitle": "¿Tienes algo más en mente?",
  "services.ctaDesc":
    "Cuéntanos qué estás construyendo — formaremos el equipo ideal a tu alrededor.",
  "services.ctaLink": "Inicia una conversación",
  "services.web-development.title": "Desarrollo Web",
  "services.web-development.desc":
    "Aplicaciones web responsivas, rápidas y accesibles, construidas sobre frameworks modernos y diseñadas para escalar con tu negocio.",
  "services.mobile-apps.title": "Apps Móviles",
  "services.mobile-apps.desc":
    "Experiencias de calidad nativa para iOS y Android desde una sola base de código mantenible.",
  "services.ui-ux-design.title": "Diseño UI / UX",
  "services.ui-ux-design.desc":
    "Interfaces que se sienten obvias — flujos basados en investigación, visuales pulidos y sistemas de diseño construidos para durar.",
  "services.digital-marketing.title": "Marketing Digital",
  "services.digital-marketing.desc":
    "Llega a la audiencia correcta con campañas medibles y una estrategia de crecimiento centrada en la conversión.",
  "services.consulting.title": "Consultoría",
  "services.consulting.desc":
    "Asesoría experta en arquitectura, elección de tecnologías y la hoja de ruta para lanzar con confianza.",
  "services.data-analytics.title": "Datos y Analítica",
  "services.data-analytics.desc":
    "Convierte datos en bruto en decisiones con dashboards, pipelines e insights sobre los que todo tu equipo puede actuar.",

  // Tech stack section
  "tech.kicker": "Nuestro stack",
  "tech.title": "Herramientas probadas en batalla, elegidas para el trabajo.",
  "tech.lead":
    "Trabajamos en todo el panorama de la ingeniería moderna — eligiendo la tecnología adecuada para el rendimiento, la escala y el mantenimiento a largo plazo.",
  "tech.certTitle": "Certificaciones y Alianzas",
  "tech.stat1": "Tecnologías Dominadas",
  "tech.stat2": "Proyectos Entregados",
  "tech.stat3": "Años de Experiencia",
  "tech.stat4": "Soporte Disponible",

  // Testimonials section
  "testi.kicker": "Historias de clientes",
  "testi.title": "La confianza de equipos que lanzan.",
  "testi.lead":
    "Medimos el éxito por lo que nuestros socios construyen después de la entrega.",
  "testi.q1":
    "Monkey City Studios transformó nuestra presencia online. El equipo entendió nuestra visión al instante y entregó más de lo que imaginábamos.",
  "testi.q2":
    "Profesionales, comunicativos y entregaron a tiempo. Se sintieron como una extensión de nuestro propio equipo, no como un proveedor externo.",
  "testi.q3":
    "Una ejecución y un soporte excepcionales durante todo el proyecto. Ya hemos comenzado nuestro siguiente desarrollo con ellos.",

  // Final CTA band
  "cta2.title": "¿Listo para construir algo que perdure?",
  "cta2.desc":
    "Cuéntanos sobre tu proyecto. Te responderemos en un día hábil con un plan claro y sin compromiso sobre los próximos pasos.",
  "cta2.start": "Inicia tu proyecto",
  "cta2.email": "Escríbenos directamente",

  // Footer
  "footer.description":
    "Transformamos ideas ambiciosas en soluciones de software potentes. Tu aliado en innovación digital.",
  "footer.quickLinks": "Enlaces rápidos",
  "footer.home": "Inicio",
  "footer.services": "Servicios",
  "footer.techStack": "Tecnologías",
  "footer.contact": "Contacto",
  "footer.connect": "Conecta con nosotros",
  "footer.rights": "Todos los derechos reservados.",
  "footer.designed": "Diseñado y desarrollado internamente.",

  // Contact page
  "contact.kicker": "Ponte en contacto",
  "contact.h1a": "Hablemos sobre",
  "contact.h1b": "lo que estás construyendo.",
  "contact.lead":
    "Comparte algunos detalles y te responderemos en un día hábil con próximos pasos claros — sin compromiso y sin presión de ventas.",
  "contact.email": "Correo",
  "contact.phone": "Teléfono",
  "contact.name": "Nombre",
  "contact.emailLabel": "Correo electrónico",
  "contact.details": "Detalles del proyecto",
  "contact.namePh": "Tu nombre",
  "contact.emailPh": "tu@empresa.com",
  "contact.detailsPh": "¿Qué quieres construir y para cuándo?",
  "contact.send": "Enviar mensaje",

  // Service detail pages — shared chrome
  "svc.crumbHome": "Inicio",
  "svc.crumbServices": "Servicios",
  "svc.allServices": "Todos los servicios",
  "svc.overviewKicker": "Resumen",
  "svc.whatYouGet": "Lo que obtienes",
  "svc.includedKicker": "Qué incluye",
  "svc.includedTitle": "Todo lo que cubre este servicio.",
  "svc.howKicker": "Cómo trabajamos",
  "svc.howTitle": "Un camino claro de la idea al lanzamiento.",
  "svc.keepKicker": "Sigue explorando",
  "svc.keepTitle": "Otras formas en que podemos ayudarte.",
  "svc.proc.0.t": "Descubrir",
  "svc.proc.0.d":
    "Profundizamos en tus objetivos, usuarios y restricciones para definir cómo se ve realmente el éxito.",
  "svc.proc.1.t": "Diseñar",
  "svc.proc.1.d":
    "Damos forma a la solución — flujos, arquitectura y un plan que apruebas antes de construir.",
  "svc.proc.2.t": "Construir",
  "svc.proc.2.d":
    "Entregamos en iteraciones cortas, con software funcional que puedes ver y dirigir cada semana.",
  "svc.proc.3.t": "Lanzar y dar soporte",
  "svc.proc.3.d":
    "Lanzamos, medimos y seguimos a tu lado para que todo siga mejorando tras la puesta en marcha.",

  // Service detail pages — web-development
  "svc.web-development.lead":
    "Aplicaciones web que cargan rápido, escalan con limpieza y se sienten sencillas de usar.",
  "svc.web-development.ov.0":
    "Diseñamos y construimos aplicaciones web de producción desde cero — el sitio de marketing, el producto autenticado y la API que lo respalda. El resultado es una base de código que tu equipo puede poseer y ampliar, no una caja negra.",
  "svc.web-development.ov.1":
    "Cada desarrollo apunta al rendimiento del mundo real: primer renderizado rápido, interacción fluida y accesibilidad integrada desde el inicio, no añadida al final.",
  "svc.web-development.cap.0.t": "Front-end moderno",
  "svc.web-development.cap.0.d":
    "Interfaces basadas en componentes en React, Next.js o Astro — tipadas de extremo a extremo y optimizadas para los Core Web Vitals.",
  "svc.web-development.cap.1.t": "Back-end y APIs robustos",
  "svc.web-development.cap.1.d":
    "Servicios confiables, modelos de datos limpios y APIs bien documentadas que resisten la carga.",
  "svc.web-development.cap.2.t": "Ingeniería de rendimiento",
  "svc.web-development.cap.2.d":
    "Optimización de imágenes, fuentes y bundles, renderizado en el edge y estrategia de caché para cargas de menos de un segundo.",
  "svc.web-development.cap.3.t": "Accesibilidad y SEO",
  "svc.web-development.cap.3.d":
    "Marcado semántico, soporte de teclado y una estructura lista para buscadores para que todos puedan acceder a tu producto.",
  "svc.web-development.del.0": "Aplicación lista para producción",
  "svc.web-development.del.1": "Pipeline de CI/CD y entornos",
  "svc.web-development.del.2": "Librería de componentes y documentación",
  "svc.web-development.del.3": "Transferencia de conocimiento y entrega",

  // Service detail pages — mobile-apps
  "svc.mobile-apps.lead":
    "Una sola base de código. Apps de calidad nativa en iOS y Android.",
  "svc.mobile-apps.ov.0":
    "Lanzamos productos móviles que se sienten naturales en cada plataforma mientras comparten una sola base de código mantenible — para que avances más rápido y gastes menos manteniendo dos apps sincronizadas.",
  "svc.mobile-apps.ov.1":
    "Desde el primer prototipo hasta la publicación en App Store y Play Store, gestionamos todo el ciclo, incluidas las partes que los equipos olvidan: comportamiento offline, notificaciones push y revisión de las tiendas.",
  "svc.mobile-apps.cap.0.t": "Builds multiplataforma",
  "svc.mobile-apps.cap.0.d":
    "Flutter y Dart te dan iOS y Android desde una sola base de código sin sacrificar la sensación nativa.",
  "svc.mobile-apps.cap.1.t": "Rendimiento nativo",
  "svc.mobile-apps.cap.1.d":
    "Interacciones fluidas a 60fps, módulos nativos donde importan y una experiencia de inicio que se siente instantánea.",
  "svc.mobile-apps.cap.2.t": "Offline primero",
  "svc.mobile-apps.cap.2.d":
    "Datos locales primero y sincronización elegante para que la app siga funcionando cuando la red no lo hace.",
  "svc.mobile-apps.cap.3.t": "Publicación en tiendas",
  "svc.mobile-apps.cap.3.d":
    "Gestionamos los builds, la firma y el envío a través de la revisión de App Store y Google Play.",
  "svc.mobile-apps.cap.4.t": "Totalmente nativo cuando lo necesitas",
  "svc.mobile-apps.cap.4.d":
    "Cuando un proyecto requiere verdadero código nativo, lo construimos con Swift en iOS y Kotlin en Android para la integración más profunda con cada plataforma.",
  "svc.mobile-apps.del.0": "Apps publicadas en iOS y Android",
  "svc.mobile-apps.del.1": "Canal de actualizaciones over-the-air",
  "svc.mobile-apps.del.2": "Instrumentación de errores y analítica",
  "svc.mobile-apps.del.3": "Recursos para tiendas y checklist de lanzamiento",

  // Service detail pages — ui-ux-design
  "svc.ui-ux-design.lead":
    "Diseño que convierte lo correcto en lo evidente.",
  "svc.ui-ux-design.ov.0":
    "Convertimos ideas difusas en productos claros y usables. Eso significa entender a tus usuarios, mapear los flujos que importan y diseñar interfaces en las que la gente no tiene que pensar.",
  "svc.ui-ux-design.ov.1":
    "Entregamos más que pantallas — te dejamos un sistema de diseño sobre el que tu equipo puede construir sin nosotros en la sala.",
  "svc.ui-ux-design.cap.0.t": "Investigación de producto y UX",
  "svc.ui-ux-design.cap.0.d":
    "Entrevistas con usuarios, flujos y mapas de experiencia para basar las decisiones en evidencia, no en opiniones.",
  "svc.ui-ux-design.cap.1.t": "Wireframes y prototipos",
  "svc.ui-ux-design.cap.1.d":
    "Prototipos interactivos que prueban la experiencia antes de escribir una línea de código de producción.",
  "svc.ui-ux-design.cap.2.t": "Diseño visual",
  "svc.ui-ux-design.cap.2.d":
    "Interfaces pulidas y alineadas con la marca, con sistemas deliberados de tipografía, color y espaciado.",
  "svc.ui-ux-design.cap.3.t": "Sistemas de diseño",
  "svc.ui-ux-design.cap.3.d":
    "Componentes y tokens reutilizables que mantienen cada pantalla consistente a medida que creces.",
  "svc.ui-ux-design.del.0": "Hallazgos de investigación y flujos de usuario",
  "svc.ui-ux-design.del.1": "Prototipo interactivo en Figma",
  "svc.ui-ux-design.del.2": "Pantallas de UI de alta fidelidad",
  "svc.ui-ux-design.del.3": "Sistema de diseño documentado",

  // Service detail pages — digital-marketing
  "svc.digital-marketing.lead":
    "Crecimiento que puedes medir — no métricas de vanidad.",
  "svc.digital-marketing.ov.0":
    "Te ayudamos a llegar a las personas correctas y a convertir la atención en acción. Cada campaña se construye en torno a un objetivo claro y se instrumenta para que veas exactamente qué está funcionando.",
  "svc.digital-marketing.ov.1":
    "Nada de disparar al azar. Partimos de tu embudo, encontramos los canales de mayor impacto y redoblamos la apuesta en lo que convierte.",
  "svc.digital-marketing.cap.0.t": "Estrategia de crecimiento",
  "svc.digital-marketing.cap.0.d":
    "Selección de canales, posicionamiento y una hoja de ruta ligada a los ingresos, no a las impresiones.",
  "svc.digital-marketing.cap.1.t": "Búsqueda y contenido (SEO)",
  "svc.digital-marketing.cap.1.d":
    "SEO técnico y contenido que genera tráfico orgánico duradero y acumulativo.",
  "svc.digital-marketing.cap.2.t": "Campañas pagadas",
  "svc.digital-marketing.cap.2.d":
    "Adquisición segmentada en búsqueda y redes sociales con una gestión disciplinada del presupuesto.",
  "svc.digital-marketing.cap.3.t": "Analítica y atribución",
  "svc.digital-marketing.cap.3.d":
    "Seguimiento limpio y dashboards para que sepas qué inversión realmente marca la diferencia.",
  "svc.digital-marketing.del.0": "Estrategia de crecimiento y plan de canales",
  "svc.digital-marketing.del.1": "Configuración de campañas y creatividades",
  "svc.digital-marketing.del.2": "Seguimiento de conversiones y dashboard",
  "svc.digital-marketing.del.3": "Informes de rendimiento mensuales",

  // Service detail pages — consulting
  "svc.consulting.lead":
    "Un equipo senior de tu lado cuando las decisiones son difíciles.",
  "svc.consulting.ov.0":
    "A veces no necesitas un desarrollo — necesitas claridad. Ayudamos a los equipos a tomar decisiones seguras sobre arquitectura, herramientas y dirección, y a reducir el riesgo del trabajo antes de empezar.",
  "svc.consulting.ov.1":
    "Contrátanos para una revisión puntual o intégranos con tu equipo para elevar el nivel de cómo lanzas.",
  "svc.consulting.cap.0.t": "Revisión de arquitectura",
  "svc.consulting.cap.0.d":
    "Una evaluación honesta de tu sistema con recomendaciones priorizadas y accionables.",
  "svc.consulting.cap.1.t": "Estrategia técnica y hoja de ruta",
  "svc.consulting.cap.1.d":
    "Elección de tecnologías y un plan de secuenciación alineado con tus objetivos de negocio.",
  "svc.consulting.cap.2.t": "Ampliación de equipo",
  "svc.consulting.cap.2.d":
    "Ingenieros senior que se integran a tu equipo y elevan la entrega desde dentro.",
  "svc.consulting.cap.3.t": "Auditorías de código y seguridad",
  "svc.consulting.cap.3.d":
    "Revisiones profundas que revelan riesgos, deuda técnica y las correcciones que más importan.",
  "svc.consulting.del.0": "Informe de hallazgos y recomendaciones",
  "svc.consulting.del.1": "Hoja de ruta de acciones priorizadas",
  "svc.consulting.del.2": "Registros de decisiones de arquitectura",
  "svc.consulting.del.3": "Sesiones de asesoría de seguimiento",

  // Service detail pages — data-analytics
  "svc.data-analytics.lead":
    "De datos dispersos a decisiones sobre las que todo el equipo puede actuar.",
  "svc.data-analytics.ov.0":
    "La mayoría de los equipos se ahogan en datos que no pueden usar. Construimos los pipelines, los almacenes y los dashboards que convierten ese material en bruto en respuestas claras y confiables.",
  "svc.data-analytics.ov.1":
    "Cuando estés listo para ir más allá, aplicamos machine learning para pronosticar, segmentar y revelar lo que de otro modo pasarías por alto.",
  "svc.data-analytics.cap.0.t": "Pipelines de datos",
  "svc.data-analytics.cap.0.d":
    "Ingesta y transformación confiables que mantienen tus datos frescos y consistentes.",
  "svc.data-analytics.cap.1.t": "Dashboards y BI",
  "svc.data-analytics.cap.1.d":
    "Dashboards de autoservicio que dan a cada equipo los números que necesitan de un vistazo.",
  "svc.data-analytics.cap.2.t": "Almacenamiento de datos",
  "svc.data-analytics.cap.2.d":
    "Una única fuente de verdad bien modelada sobre la que todas tus herramientas y equipos pueden construir.",
  "svc.data-analytics.cap.3.t": "ML y predicción",
  "svc.data-analytics.cap.3.d":
    "Pronósticos, segmentación y modelos predictivos que convierten el conocimiento en anticipación.",
  "svc.data-analytics.del.0": "Pipeline de datos y almacén",
  "svc.data-analytics.del.1": "Dashboards de BI en vivo",
  "svc.data-analytics.del.2": "Documentación del modelo de datos",
  "svc.data-analytics.del.3": "Modelos de ML donde aportan valor",
};

/** Full bilingual strings for the React Hero island. */
export interface HeroStrings {
  badge: string;
  headingPre: string;
  headingAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
}

export const hero: Record<Lang, HeroStrings> = {
  en: {
    badge: "Digital product studio · Available for new work",
    headingPre: "We build software that",
    headingAccent: "ships and scales.",
    subtitle:
      "Monkey City Studios partners with founders and growing teams to design, build, and launch web and mobile products — from first concept to a platform serving real users.",
    ctaPrimary: "Start your project",
    ctaSecondary: "View our stack",
    stats: [
      { value: "100+", label: "Projects shipped" },
      { value: "98%", label: "Client satisfaction" },
      { value: "5+", label: "Years building" },
    ],
  },
  es: {
    badge: "Estudio de producto digital · Disponible para nuevos proyectos",
    headingPre: "Creamos software que",
    headingAccent: "escala contigo.",
    subtitle:
      "Monkey City Studios colabora con fundadores y equipos en crecimiento para diseñar, desarrollar y lanzar productos web y móviles — desde el primer concepto hasta una plataforma con usuarios reales.",
    ctaPrimary: "Inicia tu proyecto",
    ctaSecondary: "Ver nuestro stack",
    stats: [
      { value: "100+", label: "Proyectos lanzados" },
      { value: "98%", label: "Satisfacción del cliente" },
      { value: "5+", label: "Años construyendo" },
    ],
  },
};

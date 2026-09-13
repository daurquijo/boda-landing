/* ==========================================================================
   Plantilla de configuración LOCAL (para correr/probar en tu máquina).
   1) Copia este archivo como "config.js" (mismo folder).
   2) Rellena tus datos de Supabase.
   3) config.js NO se sube a git (.gitignore) — en producción NO hace
      falta: GitHub Actions lo genera en cada deploy a partir de los
      Secrets del repo (SUPABASE_URL, SUPABASE_ANON_KEY). Ver
      .github/workflows/deploy.yml y el README.
      La anon key es pública por diseño (viaja al navegador de todos
      modos); la seguridad la da RLS, no ocultar este archivo — usar
      Secrets es solo para no tener el valor en el historial de git.
   ========================================================================== */
window.SUPABASE_CONFIG = {
  DEMO_MODE: true,               // pon false cuando llenes las llaves de abajo
  SUPABASE_URL: "",              // https://XXXXXXXX.supabase.co
  SUPABASE_ANON_KEY: "",         // anon public key
};

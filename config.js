/* ==========================================================================
   Config por defecto — placeholder seguro, SÍ se sube a git.
   En producción, el workflow de GitHub Actions (.github/workflows/deploy.yml)
   sobrescribe este archivo con los Secrets del repo (SUPABASE_URL,
   SUPABASE_ANON_KEY) justo antes de publicar — el valor real nunca llega a
   un commit. GitHub Pages NO sirve archivos listados en .gitignore aunque
   el workflow los suba en el artifact, por eso este archivo debe quedar
   trackeado (ver README.md).

   Para probar localmente con Supabase real: edita las dos líneas de abajo
   con tus propias llaves (Supabase → Settings → API), prueba, y evita
   commitear ese cambio (o revalidalo con `git checkout config.js`).
   ========================================================================== */
window.SUPABASE_CONFIG = {
  DEMO_MODE: true,               
  SUPABASE_URL: "",              // https://XXXXXXXX.supabase.co
  SUPABASE_ANON_KEY: "",         // anon public key
};

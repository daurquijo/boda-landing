/* ==========================================================================
   Copia de referencia / reset de "config.js" (que SÍ se sube a git, con
   este mismo contenido "seguro" por defecto — ver el comentario en
   config.js para el porqué). Si algún día ensucias config.js con llaves
   reales sin querer, restáuralo copiando este archivo encima:
     cp config.example.js config.js

   En producción NO hace falta editar ninguno de los dos: GitHub Actions
   sobrescribe config.js en cada deploy a partir de los Secrets del repo
   (SUPABASE_URL, SUPABASE_ANON_KEY) — ver .github/workflows/deploy.yml
   y el README. Para probar localmente con Supabase real, edita
   config.js directamente (evita commitear ese cambio).
   ========================================================================== */
window.SUPABASE_CONFIG = {
  DEMO_MODE: true,               // pon false cuando llenes las llaves de abajo
  SUPABASE_URL: "",              // https://XXXXXXXX.supabase.co
  SUPABASE_ANON_KEY: "",         // anon public key
};

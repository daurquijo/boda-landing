# Boda Esteban & Tatiana

Landing page de la boda con confirmación de asistencia (RSVP). Es un solo
archivo estático (`index.html`), sin build tools.

## Correr el proyecto

```bash
open index.html
```

o con un servidor local (recomendado):

```bash
python3 -m http.server 8000
# abre http://localhost:8000
```

## Configurar Supabase (guardar las confirmaciones)

1. Crea un proyecto gratis en [supabase.com](https://supabase.com).
2. En **SQL Editor**, corre el contenido de `supabase.sql` (no está en el
   repo — se queda solo local, en `.gitignore` — pídele el contenido a
   quien lo tenga, o reconstrúyelo con la tabla `confirmaciones`, su RLS
   de solo-insert, y la función RPC `get_confirmacion`).
3. En **Project Settings → API**, copia el **Project URL** y la **anon public key**.
4. Copia la plantilla de configuración y pega tus llaves:
   ```bash
   cp config.example.js config.js
   ```
   Edita `config.js`:
   ```js
   window.SUPABASE_CONFIG = {
     DEMO_MODE: false,
     SUPABASE_URL: "https://tuproyecto.supabase.co",
     SUPABASE_ANON_KEY: "tu-anon-key",
   };
   ```

`config.js` está en `.gitignore` y nunca se sube al repo — cada quien pone
sus propias llaves localmente. `config.example.js` sí se versiona, como
plantilla.

La anon key es pública por diseño (viaja al navegador); la seguridad la da
Row Level Security (RLS) en `supabase.sql`: desde la web solo se puede
**insertar** confirmaciones, nunca leer la lista completa.

### Plan gratis de Supabase

El proyecto se **pausa automáticamente tras 7 días sin actividad** en la
base de datos (los datos no se pierden, solo hay que reactivarlo desde el
dashboard). Mientras dure el periodo de invitaciones, conviene entrar de
vez en cuando para mantenerlo activo.

## Publicar en GitHub Pages con dominio propio

Dominio: `estebanytatianaboda.info` · repo: `daurquijo/boda-landing`.

1. **Antes de subir nada**: abre `index.html` localmente con `config.js`
   ya configurado (`DEMO_MODE: false`) y haz una confirmación de prueba.
   Verifica que la fila aparezca en Table Editor de Supabase.
2. Confirma que el repo tenga `.nojekyll` en la raíz (ya está) y haz
   commit + push de todo (`index.html`, `.nojekyll`, `CNAME`,
   `config.example.js`, este README). `config.js` y `supabase.sql` no se
   suben — quedan en `.gitignore`.
3. En GitHub: **Settings → Pages → Source**: "Deploy from a branch",
   rama `main`, carpeta `/ (root)` → Save. En ~1 minuto tendrás
   `https://daurquijo.github.io/boda-landing/` — pruébala ahí primero.
   (Si el repo es privado y estás en plan gratis, Pages requiere plan de
   pago; en ese caso hazlo público.)
4. En **Settings → Pages → Custom domain**, escribe
   `estebanytatianaboda.info` y Save. Esto ya está preparado: el archivo
   `CNAME` en la raíz del repo tiene ese valor — no lo borres en pushes
   futuros o el dominio se resetea.
5. En el panel de DNS de tu proveedor de dominio, crea estos registros
   (borra cualquier A/AAAA/ALIAS viejo del apex que tengas antes):

   | Tipo  | Host/Nombre | Valor                     |
   |-------|-------------|---------------------------|
   | A     | @           | 185.199.108.153           |
   | A     | @           | 185.199.109.153           |
   | A     | @           | 185.199.110.153           |
   | A     | @           | 185.199.111.153           |
   | CNAME | www         | daurquijo.github.io       |

6. Cuando el DNS propague (minutos a un par de horas), vuelve a
   **Settings → Pages** y activa **Enforce HTTPS** (el certificado lo
   emite GitHub automáticamente).

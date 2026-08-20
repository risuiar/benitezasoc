// Evita que Astro detecte la terminal de Codex como un proceso de fondo y que
// su formato JSON oculte la URL del servidor durante el arranque.
process.env.ASTRO_DEV_BACKGROUND = '0'
delete process.env.LOG_FORMAT

import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const astroPackage = require.resolve('astro/package.json')
const astroPath = resolve(dirname(astroPackage), 'bin/astro.mjs')

console.log('Iniciando el servidor local. La primera vez puede demorar mientras Vite optimiza dependencias...')
console.log('Abrí http://localhost:4321 cuando aparezca el mensaje de servidor listo.\n')

const child = spawn(process.execPath, [astroPath, 'dev', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
  cwd: resolve(__dirname, '..')
})

child.on('exit', (code) => process.exit(code ?? 0))

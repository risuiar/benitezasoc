process.env.ASTRO_DEV_BACKGROUND = '0'

import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const astroPath = resolve(__dirname, '../node_modules/astro/astro.js')

const child = spawn(process.execPath, [astroPath, 'dev', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
  cwd: resolve(__dirname, '..')
})

child.on('exit', (code) => process.exit(code ?? 0))

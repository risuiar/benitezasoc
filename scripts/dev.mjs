process.env.ASTRO_DEV_BACKGROUND = '0'

import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const astroPackage = require.resolve('astro/package.json')
const astroPath = resolve(dirname(astroPackage), 'bin/astro.mjs')

const child = spawn(process.execPath, [astroPath, 'dev', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
  cwd: resolve(__dirname, '..')
})

child.on('exit', (code) => process.exit(code ?? 0))

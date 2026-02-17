/**
 * Fixes two Docus v5.x bugs with hyphenated locale codes (e.g. pt-BR):
 *
 * 1. Collection name mismatch: Vue pages build collection names using the raw
 *    locale code ("docs_pt-BR"), but content.config.ts uses underscores
 *    ("docs_pt_BR") since Nuxt Content requires valid JS identifiers.
 *
 * 2. Path case mismatch: Nuxt Content lowercases all stored paths ("/pt-br/...")
 *    but @nuxtjs/i18n routes use the original case ("/pt-BR/..."), so
 *    .path(route.path) queries never match.
 *
 * 3. Nuxt UI locale lookup: app.vue looks up nuxtUiLocales[locale.value]
 *    using "pt-BR" but the export key is "pt_br" (lowercase + underscore).
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const docusApp = resolve(__dirname, '..', 'node_modules', 'docus', 'app')

/**
 * Each patch: [file, search, replace]
 * Applied in order per file. All replacements are literal string matches.
 */
const patches = [
  // --- app.vue ---
  ['app.vue', 'nuxtUiLocales[locale.value as keyof typeof nuxtUiLocales]', "nuxtUiLocales[locale.value.replace(/-/g, '_').toLowerCase() as keyof typeof nuxtUiLocales]"],
  ['app.vue', '`docs_${locale.value}`', "`docs_${locale.value.replace(/-/g, '_')}`"],
  ['app.vue', 'item.path === `/${locale.value}`', 'item.path === `/${locale.value.toLowerCase()}`'],

  // --- error.vue ---
  ['error.vue', '`docs_${locale.value}`', "`docs_${locale.value.replace(/-/g, '_')}`"],
  ['error.vue', 'item.path === `/${locale.value}`', 'item.path === `/${locale.value.toLowerCase()}`'],

  // --- pages/[[lang]]/[...slug].vue ---
  ['pages/[[lang]]/[...slug].vue', '`docs_${locale.value}`', "`docs_${locale.value.replace(/-/g, '_')}`"],
  ['pages/[[lang]]/[...slug].vue', '.path(route.path).first()', '.path(route.path.toLowerCase()).first()'],
  ['pages/[[lang]]/[...slug].vue', 'route.path, {', 'route.path.toLowerCase(), {'],

  // --- templates/landing.vue ---
  ['templates/landing.vue', '`landing_${locale.value}`', "`landing_${locale.value.replace(/-/g, '_')}`"],
  ['templates/landing.vue', '.path(route.path).first())', '.path(route.path.toLowerCase()).first())'],
]

// Group patches by file
const byFile = new Map()
for (const [file, from, to] of patches) {
  if (!byFile.has(file)) byFile.set(file, [])
  byFile.get(file).push([from, to])
}

let totalPatched = 0
for (const [file, replacements] of byFile) {
  const filePath = resolve(docusApp, file)
  try {
    let src = readFileSync(filePath, 'utf-8')
    let filePatched = 0
    for (const [from, to] of replacements) {
      if (src.includes(from)) {
        src = src.replace(from, to)
        filePatched++
      } else if (src.includes(to)) {
        // already patched
      } else {
        console.warn(`  pattern not found in ${file}: ${from.slice(0, 50)}...`)
      }
    }
    if (filePatched > 0) {
      writeFileSync(filePath, src, 'utf-8')
      console.log(`  patched: ${file} (${filePatched} replacements)`)
      totalPatched++
    } else {
      console.log(`  already patched: ${file}`)
    }
  } catch (e) {
    console.error(`  error: ${file} — ${e.message}`)
  }
}
console.log(`[fix-docus-i18n] ${totalPatched} file(s) patched`)

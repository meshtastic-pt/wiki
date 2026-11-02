import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'wiki.json'), 'utf8'));
const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/;
const allowedLocales = new Set(['pt', 'en', 'es']);
const allowedImages = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif']);
const problems = [];
const pagePaths = new Set();
let pageCount = 0;

if (manifest.version !== 1 || !manifest.locales?.pt) problems.push('wiki.json precisa de version: 1 e locales.pt.');

for (const [locale, config] of Object.entries(manifest.locales ?? {})) {
    if (!allowedLocales.has(locale) || !config.title || !Array.isArray(config.sections)) {
        problems.push(`Configuração inválida do idioma ${locale}.`);
        continue;
    }
    for (const section of config.sections) {
        if (!section.title || !Array.isArray(section.pages) || !section.pages.length) {
            problems.push(`Secção inválida em ${locale}.`);
            continue;
        }
        for (const slug of section.pages) {
            if (typeof slug !== 'string' || !slugPattern.test(slug)) {
                problems.push(`Slug inválido: ${slug}`);
                continue;
            }
            const relative = `docs/${locale}/${slug}.md`;
            if (pagePaths.has(relative)) problems.push(`Página duplicada: ${relative}`);
            pagePaths.add(relative);
            pageCount += 1;
            if (!fs.existsSync(path.join(root, relative))) problems.push(`Página em falta: ${relative}`);
        }
    }
}
if (pageCount > 500) problems.push('Máximo de 500 páginas.');

function resolveLink(source, relative) {
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(source), decodeURIComponent(relative)));
    if (target.startsWith('../') || path.posix.isAbsolute(target)) throw new Error('Caminho fora do repositório');
    return target;
}

for (const source of pagePaths) {
    const fullPath = path.join(root, source);
    if (!fs.existsSync(fullPath)) continue;
    if (fs.lstatSync(fullPath).isSymbolicLink()) problems.push(`Link simbólico: ${source}`);
    const markdown = fs.readFileSync(fullPath, 'utf8');
    if (Buffer.byteLength(markdown) > 512_000) problems.push(`Página demasiado grande: ${source}`);
    const frontMatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!frontMatter || !/^title:\s*\S.+$/m.test(frontMatter[1]) || !/^description:\s*\S.+$/m.test(frontMatter[1]) || !frontMatter[2].trim()) {
        problems.push(`Front matter ou conteúdo em falta: ${source}`);
        continue;
    }
    for (const match of markdown.matchAll(/!?\[[^\]]*\]\(([^)]+)\)/g)) {
        const isImage = match[0].startsWith('!');
        const url = match[1].trim().split(/\s+"/)[0];
        if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(url) && !isImage) continue;
        try {
            const target = resolveLink(source, url.split('#')[0]);
            if (isImage) {
                if (!target.startsWith('assets/') || !allowedImages.has(path.extname(target).toLowerCase()) || !fs.existsSync(path.join(root, target))) problems.push(`Imagem inválida em ${source}: ${url}`);
            } else if (!target.endsWith('.md') || !pagePaths.has(target)) {
                problems.push(`Ligação inválida em ${source}: ${url}`);
            }
        } catch {
            problems.push(`Caminho inválido em ${source}: ${url}`);
        }
    }
}

if (problems.length) {
    for (const problem of problems) console.error(`✗ ${problem}`);
    process.exitCode = 1;
} else {
    console.log(`✓ ${pageCount} página(s) e respetivas ligações validadas.`);
}

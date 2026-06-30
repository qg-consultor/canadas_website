const fs = require('fs');
const path = 'style.css';
let css = fs.readFileSync(path, 'utf8');

// Clases a eliminar con sus bloques CSS exactos
// Cada entrada es un regex que captura el bloque completo (selector + {})
const toRemove = [
    // .btn-light y variantes
    /\/\*[^*]*\*\/\s*\.btn-light\s*\{[^}]*\}/g,
    /\.btn-light\s*\{[^}]*\}/g,
    /\.btn-light-outline\s*\{[^}]*\}/g,
    /\.btn-light[^{]*\{[^}]*\}/g,

    // .card-image-placeholder
    /\.card-image-placeholder\s*\{[^}]*\}/g,

    // .bg-white
    /\.bg-white\s*\{[^}]*\}/g,

    // .proyecto-content-row, .proyecto-highlight, .proyecto-image-col, .proyecto-title
    /\/\*[^\n]*proyecto[\s\S]{0,100}?\*\/\s*(?=\.proyecto-content-row|\.proyecto-highlight|\.proyecto-image-col|\.proyecto-title)/g,
    /\.proyecto-content-row\s*\{[^}]*\}/g,
    /\.proyecto-highlight\s*\{[^}]*\}/g,
    /\.proyecto-image-col\s*\{[^}]*\}/g,
    /\.proyecto-title\s*\{[^}]*\}/g,

    // .text-gold
    /\.text-gold\s*\{[^}]*\}/g,

    // .tooltip-left
    /\.tooltip-left\s*\{[^}]*\}/g,

    // .fw-light
    /\.fw-light\s*\{[^}]*\}/g,

    // .highlight-text
    /\.highlight-text\s*\{[^}]*\}/g,

    // .hotspot-marker, .hotspot-tooltip, .hotspots-container (NOT .hotspot alone - it's used)
    /\.hotspot-marker\s*\{[^}]*\}/g,
    /\.hotspot-tooltip\s*\{[^}]*\}/g,
    /\.hotspots-container\s*\{[^}]*\}/g,

    // .map-container (NOT .map-wrapper - that's used!)
    /\.map-container\s*\{[^}]*\}/g,

    // .floorplan-wrapper (NOT .fp-card, .fp-lightbox - those ARE used!)
    /\.floorplan-wrapper\s*\{[^}]*\}/g,

    // .lote-magico
    /\.lote-magico\s*\{[^}]*\}/g,

    // .proyecto-quote-row and its children
    /\/\* --- Quote Row[\s\S]{0,60}?\*\/\s*/g,
    /\.proyecto-quote-row\s*\{[^}]*\}/g,
];

let originalLength = css.length;
toRemove.forEach(regex => {
    css = css.replace(regex, '');
});

// Clean up multiple consecutive blank lines
css = css.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(path, css, 'utf8');
console.log(`Done. Removed ${originalLength - css.length} bytes of unused CSS.`);

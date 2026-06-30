const fs = require('fs');
const path = 'index.html';
let content = fs.readFileSync(path, 'utf8');

// Replace colors
content = content.replace(/#354E3C/gi, '#00458b');
content = content.replace(/#0082BA/gi, '#00458b');
content = content.replace(/#1C3775/gi, '#00458b');
content = content.replace(/#96B563/gi, '#d6b100');

// Replace logo margin (line 62-64 approx)
content = content.replace('margin-top: 10px;', 'margin-top: 50px;');

// Replace Hero Video URL
content = content.replace('4a36c7c09d4050583c25e31ca894a935', '01de8327c007c73f659a3082d01f9454');
content = content.replace('4a36c7c09d4050583c25e31ca894a935', '01de8327c007c73f659a3082d01f9454');

// Uppercase to Title Case replacements
content = content.replace(/>CAÑADAS</g, '>Cañadas<');
content = content.replace(/ENTORNO QUE <br><span style="color: #[0-9a-fA-F]+;">RECOMPENSA TU ESFUERZO<\/span>/gi, 'Entorno que <br><span style="color: #00458b;">recompensa tu esfuerzo</span>');
content = content.replace(/>DISTRIBUCIÓN ARQUITECTÓNICA</gi, '>Distribución Arquitectónica<');
content = content.replace(/>PLANTA BAJA</gi, '>Planta Baja<');
content = content.replace(/>PLANTA ALTA</gi, '>Planta Alta<');
content = content.replace(/>CONSTRUYAMOS</gi, '>Construyamos<');
content = content.replace(/>TU FUTURO</gi, '>Tu futuro<');
content = content.replace(/>LO QUE NECESITAS</gi, '>Lo que necesitas<');
content = content.replace(/>A MINUTOS DE</gi, '>A minutos de<');
content = content.replace(/>PROYECTO</gi, '>Proyecto<');
content = content.replace(/>AMENIDADES</gi, '>Amenidades<');
content = content.replace(/>UBICACIÓN</gi, '>Ubicación<');
content = content.replace(/>CONTACTO</gi, '>Contacto<');
content = content.replace(/>HOME</gi, '>Home<');

fs.writeFileSync(path, content, 'utf8');
console.log('Done');

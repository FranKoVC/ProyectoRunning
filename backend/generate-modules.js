const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Ruta a la carpeta de entidades
const entitiesPath = path.join(__dirname, 'src/entities');

// Obtener la lista de archivos de entidades
const entityFiles = fs.readdirSync(entitiesPath).filter(file => file.endsWith('.ts'));

// Generar módulos, servicios y controladores para cada entidad
entityFiles.forEach(file => {
  const entityName = file.replace('.entity.ts', '').replace('.ts', '');
  const moduleName = entityName.toLowerCase();

  console.log(`Generando módulo, servicio y controlador para ${entityName}...`);

  // Generar módulo
  execSync(`nest generate module ${moduleName}`, { stdio: 'inherit' });

  // Generar servicio
  execSync(`nest generate service ${moduleName}`, { stdio: 'inherit' });

  // Generar controlador
  execSync(`nest generate controller ${moduleName}`, { stdio: 'inherit' });

  console.log(`Módulo, servicio y controlador generados para ${entityName}.`);
});

console.log('Proceso completado.');
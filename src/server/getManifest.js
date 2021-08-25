import fs from 'fs';

const getManifest = () => {
  try {
    return JSON.parse(fs.readFileSync(`${__dirname}/public/manifest.json`));
  } catch (error) {
    console.log('NO se pudo leer el archivo', error.message);
  }
};

module.exports = getManifest;

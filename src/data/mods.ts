// src/data/mods.ts

export interface Mod {
  id: string;          // Para la URL (ej: /mod/optimus-prime-gta)
  name: string;        // Nombre del Mod
  imageButton: string; // Imagen del botón cuadrado (230x50)
  downloadLink: string; // Link directo a Mediafire/Mega/Drive
  instructions: string; // Texto largo con los pasos
  gallery?: string[];  // Fotos opcionales del mod ingame
}

export const modsData: Mod[] = [
  {
    id: 'pes-2018-patch-v4',
    name: 'PES 2018 Fiter Patch v4',
    imageButton: 'btn-mod-pes.png', // Asegúrate de tener esta imagen
    downloadLink: 'https://mediafire.com/tu-link-del-parche',
    instructions: `1. Descargar el archivo RAR.
2. Descomprimir en la carpeta "download" del juego.
3. Usar el DpFileList Generator para activar el CPK.
4. ¡Disfrutar!`,
    gallery: ['pes-mod-1.jpg', 'pes-mod-2.jpg']
  },
  
];
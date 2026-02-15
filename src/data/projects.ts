// src/data/projects.ts

export interface Project {
  id: string;          // Esto será parte de la URL (ej: /project/pes2018)
  title: string;
  shortDescription: string; // Para una vista previa si la necesitas
  imageButton: string;      // La imagen chica del botón (230x50)
  imageFondos: string;      // La imagen grande del detalle
  logo: string;            // Logo del proyecto (opcional)
  gallery?: string[];       // Array de fotos extra (opcional)
  links?: {
    windows?: string;
    android?: string;
    web?: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 'YEnElDescuento',
    title: 'Y En El Descuento',
    shortDescription: 'Y En El Descuento es el juego oficial del Discord de z4. Mata a los integrantes de z4 para conseguir sus pc y armar la pc suprema. Un juego RPG hecho con RPG Maker MV.',
    imageButton: 'yeneldescuentoboton.png',
    imageFondos: 'fondoDescuento.png',
    logo: 'logoYEnElDescuento.png',
    gallery: ['ciudades.png', 'jefesyenel.png'],
    links: {
      windows: 'https://www.mediafire.com/file/zc2nla9cxm1ogyg/fiter.rar/file',
      android: 'https://www.mediafire.com/file/q5zluwfv6a7z7w2/fiter.rar/file',
    }
  }
  
  
];
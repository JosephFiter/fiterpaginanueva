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
  },
  {
    id: 'YEnElEntretiempo',
    title: 'Y En El Entretiempo',
    shortDescription: 'Descubre los misterios detrás de tu baneo en el servidor de Discord de z4 en "Y En El Entretiempo", la emocionante precuela de "Y En El Descuento".',
    imageButton: 'abcdefgh.png',
    imageFondos: 'fondoentre.png',
    logo: 'logoentretiempo.png',
    gallery: ['ciudades1.png', 'ciudades2jefesyenel.png'],
    links: {
      windows: 'https://www.mediafire.com/file/al35k7fj0f8f4xy/y+en+entretiempo.rar/file',
      android: 'https://www.mediafire.com/file/wslyuf6ypij9f92/y+en+entretiempo+-+copia.rar/file',
    }
  },
  {
    id: 'donotenter',
    title: 'Do Not Enter',
    shortDescription: 'Un shooter en primera persona donde te enfrentaras a zombies, cocos y muñecos de madera en una isla embrujada.',
    imageButton: 'donotboton.png',
    imageFondos: 'donotfondo2.png',
    logo: 'donotenterlogo.png',
    gallery: ['donot.png', 'donotfondo.png'],
    links: {
      windows: 'https://www.mediafire.com/file/xb6ml0xoutp5n0h/donotenter.rar/file',
    }
  }

  
  
];
import terapeuta1 from '../../static/images/psychology/1.png';
import terapeuta2 from '../../static/images/psychology/2.png';
import terapeuta3 from '../../static/images/psychology/3.png';
import terapeuta4 from '../../static/images/psychology/4.png';
import terapeuta5 from '../../static/images/psychology/5.png';

export function getScreenWidth() {
  if (typeof window !== `undefined`) {
    return window.innerWidth;
  }
}

export function isPortrait() {
  if (typeof window !== `undefined`) {
    if (window.innerHeight > window.innerWidth) {
      return true;
    }
    return false;
  }
}

export function isWideScreen() {
  if (typeof window !== `undefined`) {
    const Width = window.innerWidth;
    const mediaQueryL = 1024;

    return windowWidth >= mediaQueryL;
  }
}

export function timeoutThrottlerHandler(timeouts, name, delay, handler) {
  if (!timeouts[name]) {
    timeouts[name] = setTimeout(() => {
      timeouts[name] = null;
      handler();
    }, delay);
  }
}

export const setPsychologist = category => {
  const psychologistsArr = [
    {
      number: 1,
      name: 'luis',
      spectiality: 'Depresion, Ansiedad',
      text: 'Soy Psicólogo Sanitario con Máster en Psicología Clínica y de la Salud. Amplia experiencia en terapia para el bienestar mental, emocional, familiar y ...',
      img: terapeuta5
    },
    {
      number: 2,
      name: 'Pedro',
      spectiality: 'Depresion, Ansiedad',
      text: 'Los primeros pasos son muy duros para para llamar, coger el teléfono, escribir, concertar un cita, explicar que me pasa -si hay veces que ni yo sé com...',
      img: terapeuta4
    },
    {
      number: 3,
      spectiality: 'Depresion',
      name: 'Raquel',
      text: 'Además de Psicóloga clínica, soy Licenciada en Administración de Empresas y Coach Ontológico. Haber obtenido 2 licenciaturas y diferentes posgrados me...',
      img: terapeuta3
    },
    {
      number: 4,
      spectiality: 'Terapia de pareja, Ansiedad',
      name: 'Melisa',
      text: 'Licenciada en Psicología con orientación Sistémica, aportes de la línea Existencial y de la Psicología Positiva. "El objetivo siempre está centrado en...',
      img: terapeuta2
    },
    {
      number: 5,
      spectiality: 'Depresion',
      name: 'Sara',
      text: 'Desde mis comienzos en el mundo de la psicología, he sentido un gran entusiasmo por el análisis del comportamiento humano y la intervención psicológic...',
      img: terapeuta1
    }
  ];

  const psychologists = psychologistsArr.filter(psychologist => psychologist.spectiality.includes(category))
  return psychologists;
};

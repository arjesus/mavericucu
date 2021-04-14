/* eslint-disable prettier/prettier */
import terapeuta1 from '../../static/images/psychology/1.png';
import terapeuta2 from '../../static/images/psychology/2.png';
import terapeuta3 from '../../static/images/psychology/3.png';
import terapeuta4 from '../../static/images/psychology/4.png';
import terapeuta5 from '../../static/images/psychology/5.png';
import ansiedad from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/ansiedad.svg';
import depresion from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/depresion.svg';
import fobias from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/fobias.svg';
import sexualidad from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/sexualidad.svg';
import terapiaPareja from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/terapìa-pareja.svg';
import coaching from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/coaching.svg';
import autoestima from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/autoestima.svg';
import coachingDeportivo from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/specialties/coaching-deportivo.svg';
import logo from '/home/ismael/Documents/Coding/Ev/mavericucu/src/images/svg/Logo.svg';

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

export const getImg = category => {
  const img = {
    'Depresion': depresion,
    'quienes somos': logo,
    'Fobias': fobias,
    'Ansiedad': ansiedad,
    'Autoestima': autoestima,
    'Terapia de pareja': terapiaPareja,
    'Coaching': coaching,
    'Coaching deportivo': coachingDeportivo,
    'Terapia sexual': sexualidad
  }
  return img[category];
}

export const setPsychologist = category => {
  const psychologistsArr = [
    {
      number: 1,
      name: 'Luis',
      spectiality: 'Depresion, Ansiedad',
      text:
        'Soy Psicólogo Sanitario con Máster en Psicología Clínica y de la Salud. Amplia experiencia en terapia para el bienestar mental, emocional, familiar y ...',
      img: terapeuta5
    },
    {
      number: 2,
      name: 'Pedro',
      spectiality: 'Depresion, Ansiedad',
      text:
        'Los primeros pasos son muy duros para para llamar, coger el teléfono, escribir, concertar un cita, explicar que me pasa -si hay veces que ni yo sé com...',
      img: terapeuta4
    },
    {
      number: 3,
      spectiality: 'Depresion',
      name: 'Raquel',
      text:
        'Además de Psicóloga clínica, soy Licenciada en Administración de Empresas y Coach Ontológico. Haber obtenido 2 licenciaturas y diferentes posgrados me...',
      img: terapeuta3
    },
    {
      number: 4,
      spectiality: 'Terapia de pareja, Ansiedad',
      name: 'Melisa',
      text:
        'Licenciada en Psicología con orientación Sistémica, aportes de la línea Existencial y de la Psicología Positiva. "El objetivo siempre está centrado en...',
      img: terapeuta2
    },
    {
      number: 5,
      spectiality: 'Depresion',
      name: 'Sara',
      text:
        'Desde mis comienzos en el mundo de la psicología, he sentido un gran entusiasmo por el análisis del comportamiento humano y la intervención psicológic...',
      img: terapeuta1
    }
  ];

  const psychologists = psychologistsArr.filter(psychologist =>
    psychologist.spectiality.includes(category)
  );
  return psychologists;
};

export const setTitlePsycoCards = category => {
  const psyTitleArr = [
    {
      spectiality: 'Autoestima',
      title: 'Algunos de nuestros psicólogos online especializados en subir el autoestima',
      subTitle: 'Artículos de interés sobre mejorar el autoestima y cómo tener buen autoestima',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con como combatir la depresion, como salir de una depresión, síntomas de la dépression',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir la depresion, como salir de una depresión, síntomas de la dépression'
    },
    {
      spectiality: 'Ansiedad',
      title:
        'Algunos de nuestros psicólogos online especializados en el tratamiento de la ansiedad',
      subTitle:
        'Artículos de interés sobre cómo superar la ansiedad y tratamiento para la ansiedad',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con cómo sobrellevar la ansiedad , ayuda para tratar la ansiedad, como puedo tratar la ansiedad, ejercicios para superar la ansiedad y mucho más.',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con cómo superar la ansiedad'
    },
    {
      spectiality: 'Depresion',
      title: 'Algunos de nuestros psicólogos online especializados en superar la depresión',
      subTitle: 'Artículos de interés sobre la depresión y cómo superar la depresión ',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con como combatir la depresion, como salir de una depresión, síntomas de la dépression.',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir la depresion, como salir de una depresión, síntomas de la dépression'
    },
    {
      spectiality: 'Terapia de pareja',
      title: 'Algunos de nuestros psicólogos online especializados en terapia para pareja',
      subTitle: 'Artículos de interés sobre la terapia de pareja y crisis de pareja',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con como combatir la depresion, como salir de una depresión, síntomas de la dépression',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir la depresion, como salir de una depresión, síntomas de la dépression'
    },
    {
      spectiality: 'Terapia sexual',
      title: 'Algunos de nuestros psicólogos online especializados en terapia sexual',
      subTitle:
        'Artículos de interés sobre sexualidad y terapia sexual, desarrollados por nuestros sexologos y sexologas online',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con la sexologia, ayuda sexual y terapia sexual online',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con la terapia sexual online desarrollados por nuestros sexologos y sexologas online'
    },
    {
      spectiality: 'Fobias',
      title:
        'Algunos de nuestros psicólogos online especializados en tratamiento psicológico para las fobias',
      subTitle: 'Artículos de interés sobre las fobias, miedos y  su superación',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con superar una fobia, el tratamiento para fobias.',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir las fobias y como superarlas.'
    },
    {
      spectiality: 'Coaching',
      title:
        'Algunos de nuestros coach online especializados en  coaching personal y coaching profesional',
      subTitle:
        'Artículos de interés sobre coaching online, coaching profesional y coaching personal',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con el coaching online, coaching profesional y coaching personal',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con el coaching online, coaching profesional y coaching personal'
    },
    {
      spectiality: 'Coaching deportivo',
      title: 'Algunos de nuestros psicólogos y coaches especializados en coaching deportivo',
      subTitle: 'Artículos de interés sobre el coaching deportivo y cómo mejorar en el deporte',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con coaching deportivo y cómo mejorar en el deporte',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con el coaching deportivo y cómo mejorar en el deporte'
    }
  ];

  const psychologistsTexts = psyTitleArr.filter(psychologist =>
    psychologist.spectiality.includes(category)
  );

  return psychologistsTexts;
};

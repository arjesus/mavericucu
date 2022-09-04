/* eslint-disable prettier/prettier */
import terapeuta1 from '../../static/images/psychology/1.png';
import terapeuta2 from '../../static/images/psychology/2.png';
import terapeuta3 from '../../static/images/psychology/3.png';
import terapeuta4 from '../../static/images/psychology/4.png';
import terapeuta5 from '../../static/images/psychology/5.png';
import ansiedad from '/src/images/specialties/ansiedad.svg';
import depresion from '/src/images/specialties/depresion.svg';
import fobias from '/src/images/specialties/fobias.svg';
import sexualidad from '/src/images/specialties/sexualidad.svg';
import terapiaPareja from '/src/images/specialties/terapìa-pareja.svg';
import coaching from '/src/images/specialties/coaching.svg';
import autoestima from '/src/images/specialties/autoestima.svg';
import coachingDeportivo from '/src/images/specialties/coaching-deportivo.svg';
import logo from '/static/images/logosinfondo.svg';
import trabajo from '/content/posts/2021-04-21--teletrabajo/telegrabajo.jpg';
import relajacion from '/content/posts/2021-04-22--tecnica-relajacion/relajacion.jpg';
import aislamiento from '/content/posts/2021-04-21--fin-aislamiento-ansiedad/fin-aislamiento-ansiedad.jpg';
import fundadoras from '../../static/images/fundadoras.jpg';
import redFlag from '/content/posts/2022-08-04--red-flag/Header.jpg';

export function removeAccents(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + '...';
}

export function handleFilterData(query, data) {
  if (!query) {
    return data;
  } else {
    return data.filter(d =>
      removeAccents(d.excerpt)
        .toLowerCase()
        .includes(removeAccents(query).toLowerCase())
    );
  }
}

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

    return 'windowWidth' >= mediaQueryL;
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
    Depresion: depresion,
    'quienes somos': fundadoras,
    Fobias: fobias,
    Ansiedad: ansiedad,
    Autoestima: autoestima,
    'Terapia de pareja': terapiaPareja,
    Coaching: coaching,
    'Coaching deportivo': coachingDeportivo,
    'Terapia sexual': sexualidad
  };
  return img[category];
};

export const getPost = category => {
  const img = {
    Teletrabajo: trabajo,
    Relajacion: relajacion,
    'Fin aislamiento': aislamiento,
    'Red Flag': redFlag,
    'Terapia de pareja': redFlag
  };
  return img[category];
};

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
        'La web Eva Minerva me ha facilitado llegar a pacientes y motivos de consulta más adaptados a mi formación y experiencia...',
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
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con como combatir la ansiedad, como superar la ansiedad, síntomas de la ansiedad',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir la ansiedad, como superar la ansiedad, síntomas de la ansiedad'
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
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con como combatir la depresión, como salir de una depresión, síntomas de la depresión.',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir la depresión, como salir de una depresión, síntomas de la depresión'
    },
    {
      spectiality: 'Terapia de pareja',
      title: 'Algunos de nuestros psicólogos online especializados en terapia para pareja',
      subTitle: 'Artículos de interés sobre la terapia de pareja y crisis de pareja',
      text:
        'A continuación incluimos una selección de artículos dedicados a temas relacionados con como combatir los problemas de pareja y como superarlos',
      subTex:
        'En nuestro blog podras encontrar mas artículos dedicados a temas relacionados con como combatir los problemas de pareja y como superarlos'
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

const blogPages = [
  // {
  //   title: 'Como superar la ansiedad',
  //   img: '../../images/jpg/ansiedad-01.png',
  //   category: 'Ansiedad',
  //   url: '/ansiedad',
  //   test:
  //     'Para controlar la ansiedad y así poder sobrellevarla tenemos que entender que la ansiedad es un mecanismo defensivo cuyo objetivo es alertarnos ante situaciones amenazantes...'
  // },
  // {
  //   title: 'Como superar una depresión',
  //   img: '../../images/jpg/mujerjovendeprimida-01.jpg',
  //   category: 'Depresion',
  //   url: '/depresion, Ansiedad',
  //   test:
  //     'Antes de comentar algunos aspectos claves sobre cómo salir de una depresión es necesario entender los síntomas de la depresión...'
  // },
  // {
  //   title: 'Ayuda psicologica para parejas',
  //   img: '../../images/jpg/terapia-pareja.png',
  //   category: 'Terapia de pareja',
  //   test:
  //     'La vida en pareja no es algo estable, toda pareja pasa por etapas y situaciones complicadas...'
  // },
  // {
  //   title: 'Como subir el autoestima',
  //   img: '../../images/jpg/autoestima.png',
  //   category: 'Autoestima',
  //   test:
  //     'Estar agusto con nosotros mismos es la base para poder sentirnos bien. El autoestima es el conjunto de percepciones, evaluaciones y pensamientos, dirigidos hacia uno mismo, ya sea hacia nuestra forma de ser...'
  // },
  {
    title: '3 técnicas para relajarse en casa',
    img: trabajo,
    url: '/tecnica-relajacion/',
    category: 'Autoestima, Depresion, Ansiedad',
    test:
      'La nueva normalidad nos ha traído muchos cambios repentinos en muy poco tiempo. Entre ellos, el de buscarnos formas alternativas a nuestra rutina exterior pero dentro de casa. Como la situación general puede...'
  },
  {
    title: 'Teletrabajo e impacto psicológico. Las 7 Pautas para mejorar',
    img: relajacion,
    url: '/teletrabajo/',
    category: 'Autoestima, Depresion, Ansiedad',
    test:
      'En los últimos meses nuestro lugar de trabajo ha cambiado, millones de trabajadores se han visto obligados a trabajar desde el hogar de manera repentina, pero ¿estábamos preparados para este cambio radical?...'
  },
  {
    title: 'Fin del aislamiento y ansiedad. Cómo afrontarlo',
    img: aislamiento,
    url: '/fin-aislamiento-ansiedad/',
    category: 'Autoestima, Depresion, Ansiedad',
    test:
      'Para la mayoría de las personas, es la primera vez en nuestras vidas que hemos tenido que aislarnos completamente de la vida exterior, y no sólo una vez sino que, a estas alturas, posiblemente hasta dos y t...'
  },
  {
    title: 'Red flags en las relaciones sexuales de pareja',
    img: redFlag,
    url: '/red-flag/',
    category: 'Terapia de pareja, Terapia sexual',
    test:
      'El sexo es una parte más de nuestras necesidades básicas como seres humanos. Es un acto de comunicación, donde lo más importante es escuchar. Una buena pareja sexual será aquella que pregunte y se preocupe por el bienestar del otrx. '
  }
];

export const getArticles = category => {
  const posts = blogPages.filter(post => post.category.includes(category));
  return posts;
};

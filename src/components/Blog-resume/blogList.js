const blogPages = [
  {
    title: 'Como superar la ansiedad',
    img: '../../images/jpg/ansiedad-01.png',
    category: 'Ansiedad, Autoestima, Depresion',
    url: '/ansiedad',
    test:
      'Para controlar la ansiedad y así poder sobrellevarla tenemos que entender que la ansiedad es un mecanismo defensivo cuyo objetivo es alertarnos ante situaciones amenazantes...'
  },
  {
    title: 'Como superar una depresión',
    img: '../../images/jpg/mujerjovendeprimida-01.jpg',
    category: 'Depresion, Autoestima',
    url: '/depresion, Ansiedad',
    test:
      'Antes de comentar algunos aspectos claves sobre cómo salir de una depresión es necesario entender los síntomas de la depresión...'
  },
  {
    title: 'Ayuda psicologica para parejas',
    img: '../../images/jpg/terapia-pareja.png',
    category: 'Terapia de pareja, Autoestima',
    test:
      'La vida en pareja no es algo estable, toda pareja pasa por etapas y situaciones complicadas...'
  },
  {
    title: 'Como subir el autoestima',
    img: '../../images/jpg/autoestima.png',
    category: 'Autoestima, Ansiedad, Depresion',
    test:
      'Estar agusto con nosotros mismos es la base para poder sentirnos bien. El autoestima es el conjunto de percepciones, evaluaciones y pensamientos, dirigidos hacia uno mismo, ya sea hacia nuestra forma de ser...'
  }
];

export const getPost = category => {
  const posts = blogPages.filter(post => post.category.includes(category));
  return posts;
};

import React from 'react';
import theme from '../../theme/theme.yaml';
import HoverRating from '../starts-rating/starts-rating.component';

import logo from '../../../static/images/lirio.png';

const arrOfData = [
  {
    number: 4,
    percentage: '85%',
    style: 'width: 85%',
    title: '¡¡Estoy encantada!!',
    text:
      'Estoy encantada. La experiencia con EvaMinerva ha sido muy gratificante. Para mí era muy importante poder tener la comodidad de hacerlo desde casa, por eso la terapia online con la psicóloga que me asignaron me ha venido tan bien.',
    author: 'name autor'
  },
  {
    number: 3,
    percentage: '7%',
    style: 'width: 85%',
    title: 'Todo perfecto por ahora',
    text:
      'No estaba segura al principio por si no era fácil de usar y no sabía comunicarme para que me entendieran, pero igual decidí probar. Después de 3 sesiones tengo que decir que es tan sencillo como navegar por cualquier red y poder encontrar una buena terapeuta de calidad. Diría que más fácil que hacerlo en persona.',
    author: 'name autor'
  },
  {
    number: 2,
    percentage: '3%',
    style: 'width: 3%',
    title: 'Elena es espectacular',
    text:
      'He de reconocer que me preocupaba que no encajara con la psicóloga, o no me sintiera cómoda... pero es que justamente han acertado con la terapeuta que me sugirieron. Elena me entiende y su forma de trabajar es justo la que encaja conmigo. Lo recomiendo completamente!',
    author: 'name autor'
  },
  {
    number: 1,
    percentage: '4%',
    style: 'width: 4%',
    title: 'Me siento muy respetado',
    text:
      'Yo diría que desde el primer momento que me llamaron ya supe que aquí se cuida mucho a la persona que consulta. Me sentí siempre muy respetado y saben lo que hacen. Tanto que yo diría que después de varias sesiones me encuentro muy bien, y las herramientas que he aprendido me van a servir siempre.',
    author: 'name autor'
  }
];

class Evaluations extends React.Component {
  state = {
    counter: 0,
    contentToRender: {
      number: 2,
      percentage: '4%',
      style: 'width: 4%',
      title: 'Header de la review',
      text:
        'Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.',
      author: 'name autor'
    },
    secondContentToRender: {
      number: 1,
      percentage: '1%',
      style: 'width: 1%',
      title: 'Header de la review',
      text:
        'Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.',
      author: 'name autor'
    },
    intervalId: 0
  };

  componentDidMount() {
    this.intervalReviewText();
  }

  getTextStyle(percentage) {
    return { width: percentage };
  }

  changeReview() {
    let { counter, contentToRender, secondContentToRender } = this.state;

    if (counter >= arrOfData.length - 2) {
      counter = 0;
      this.setState({
        counter
      });
    }

    let newReviewToRender = contentToRender;
    newReviewToRender.title = arrOfData[counter].title;
    newReviewToRender.text = arrOfData[counter].text;
    newReviewToRender.author = arrOfData[counter].author;

    let secondReviewToRender = secondContentToRender;
    secondReviewToRender.title = arrOfData[counter + 1].title;
    secondReviewToRender.text = arrOfData[counter + 1].text;
    secondReviewToRender.author = arrOfData[counter + 1].author;
    counter += 1;
    this.setState({
      counter,
      contentToRender: newReviewToRender,
      secondContentToRender: secondReviewToRender
    });
  }

  intervalReviewText() {
    const intervalId = setInterval(() => {
      this.changeReview();
    }, 10000);
    this.setState({
      intervalId
    });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    clearInterval(intervalId);
  }

  render() {
    const { contentToRender, secondContentToRender } = this.state;
    return (
      <React.Fragment>
        <div className="reviews-container">
          <h2>Tu bienestar emocional como el punto de partida de nuestros psicólogos online</h2>
          <HoverRating />
          <div className="boxes-container">
            <div className="reviews-container-bars">
              <h3>Reviews</h3>
              {arrOfData.map((item, index) => {
                return (
                  <div key={index.toString()}>
                    <span>
                      {item.number}
                      <i className="fas fa-star"></i>
                    </span>
                    <div className="progress-line">
                      <div className="progress">
                        <div
                          className="progress-done"
                          style={this.getTextStyle(item.percentage)}
                        ></div>
                      </div>
                      <span className="percent">{item.percentage}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="review-container-comments">
              <div className="text">
                {/* <img src={logo} /> */}
                <h3>{contentToRender.title}</h3>
              </div>
              <p>{contentToRender.text}</p>
              {/* <p>
                <i>{contentToRender.author}</i>
              </p> */}
            </div>
            <div className="review-container-comments">
              <div className="text">
                {/* <img src={logo} /> */}
                <h3>{secondContentToRender.title}</h3>
              </div>
              <p>{secondContentToRender.text}</p>
              {/* <p>
                <i>{secondContentToRender.author}</i>
              </p> */}
            </div>
          </div>
        </div>
        {/* --- STYLES --- */}
        <style jsx>{`
          .reviews-container {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0fr 1fr;
            height: auto;
            min-height: 65vh;
            width: 100%;
            max-width: 100vw;
            grid-gap: 4rem;
            justify-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 50px 5%;

            .boxes-container {
              display: grid;
              grid-template-columns: 0.6fr 1fr 1fr;
              grid-gap: 2rem;
            }

            h2 {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 2em;
              text-align: center;
            }

            h3 {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 24px;
              font-weight: 600;
            }

            p {
              color: ${theme.color.principals.darkerPurpleText};
              font-size: 18px;
            }

            .progress-line {
              display: flex;
              align-items: center;
            }
          }

          @media (max-width: 600px) {
            .reviews-container-bars {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: fit-content;
            }
            .reviews-container {
              grid-template-columns: 1fr;
              grid-template-rows: 0.1fr 1fr;
              height: 100%;
              grid-gap: 30px;
              padding: 20px;
              .boxes-container {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 0.5fr 1fr;
                grid-gap: 2rem;
                text-align: justify;
              }
              .review-container-comments {
                width: 300px;
                height: 500px;
                display: flex;
                justify-content: space-around;
                text-align: initial;
                p {
                  text-align: initial;
                }
              }
            }
          }

          .reviews-container-bars {
            background-color: #ffffff;
            box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
              0 6px 14px 0 #6a3bc4;
            padding: 25px;
            border-radius: 1rem;
            margin: 0 auto;

            h3 {
              margin-bottom: 10px;
            }
          }

          .review:hover {
            border: 1px solid #ddd;
            box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 0.7);
          }

          .progress {
            background-color: rgba(100, 100, 100, 0.2);
            border-radius: 5px;
            position: relative;
            margin: 0 10px;
            height: 10px;
            width: 200px;
          }

          .progress-done {
            background: linear-gradient(to left, #d2bbe5ff, #6a3bc4);
            box-shadow: 0 3px 3px -5px #d2bbe5ff, #6a3bc4;
            border-radius: 5px;
            height: 10px;
            width: 0;
            transition: width 1s ease 0.3s;
          }

          .percent {
            color: #333;
          }
          .review-container-comments {
            border-radius: 2px;
            background-color: #ffffff;
            -webkit-box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02),
              0 1px 33px 0 rgba(0, 0, 0, 0.05), 0 6px 14px 0 #6a3bc4;
            box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05),
              0 6px 14px 0 #6a3bc4;
            padding: 25px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: c;
            flex-direction: column;
            justify-content: space-between;
            border-radius: 1rem;

            .text {
              display: flex;
              align-items: center;
              img {
                width: 70px;
                border-radius: 50%;
                margin-right: 25px;
              }
            }
          }
        `}</style>
      </React.Fragment>
    );
  }
}

export default Evaluations;

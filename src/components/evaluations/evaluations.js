import React from "react";

import logo from '../../../static/images/lirio.png'

const arrOfData = [
  {
    number: 5,
    percentage: "85%",
    style: "width: 85%",
    title: "Header de la review",
    text: "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
    author: "name autor"
  },
  {
    number: 4,
    percentage: "7%",
    style: "width: 85%",
    title: "Header de la review",
    text: "Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.",
    author: "name autor"
  },
  {
    number: 3,
    percentage: "3%",
    style: "width: 3%",
    title: "Header de la review",
    text: "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
    author: "name autor"
  },
  {
    number: 2,
    percentage: "4%",
    style: "width: 4%",
    title: "Header de la review",
    text: "Nuestros especialistas guías te contactaran para de forma segura y privada para encontrar el psicólogo que más se adapte a tus necesidades.",
    author: "name autor"
  },
  {
    number: 1,
    percentage: "1%",
    style: "width: 1%",
    title: "Header de la review",
    text: "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
    author: "name autor"
  }
];

class Evaluations extends React.Component {
  state = {
    counter: 0,
    contentToRender: {
      title: "Header de la review",
      text: "Mediante nuestro formulario web o llamada telefónica, nos pondremos en contacto contigo en la hora y momento que blabla.",
      author: "name autor"
    }
  };

  componentDidMount() {
    this.intervalReviewText();
  }

  getTextStyle(percentage) {
    return { width: percentage };
  }

  changeReview() {
    let { counter, contentToRender } = this.state;

    if (counter >= arrOfData.length - 1) {
      counter = 0;
      this.setState({
        counter
      });
    }

    let newReviewToRender = contentToRender;
    newReviewToRender.title = arrOfData[counter].title;
    newReviewToRender.text = arrOfData[counter].text;
    newReviewToRender.author = arrOfData[counter].author;
    counter += 1;
    this.setState({
      counter,
      contentToRender: newReviewToRender,
    });
  }

  intervalReviewText() {
    setInterval(() => {
      this.changeReview();
    }, 3000);
  }

  render() {
    const { contentToRender } = this.state;
    return (
      <React.Fragment>
        <div className="reviews-container">
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
                      <div className="progress-done" style={this.getTextStyle(item.percentage)}></div>
                    </div>
                    <span className="percent">{item.percentage}</span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="review-container-comments">
            <div className="text"><img src={logo} /><h3>{contentToRender.title}</h3></div>
            <p>{contentToRender.text}</p>
            <p><i>{contentToRender.author}</i></p>
          </div>
        </div>
        {/* --- STYLES --- */}
        <style jsx>{`
          .reviews-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background-color: #73a580;
            height: 100px;
            min-height: 48vh;
            width: 100%;
            justify-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            padding: 50px 10%;

            h3 {
              color: #73a580;
              font-size: 24px;
            }

            p {
              color: #73a580;
              font-size: 18px;
            }

            .progress-line {
              display: flex;
              align-items: center;
            }
          }

          .reviews-container-bars {
            border-radius: 2px;
            background-color: #ffffff;
            box-shadow: 0 3px 26px -1px rgba(0, 0, 0, 0.02), 0 1px 33px 0 rgba(0, 0, 0, 0.05), 0 6px 14px 0 rgb(255, 255, 255);
            padding: 25px;

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
            background: linear-gradient(to left, #c5c392, #73a580);
            box-shadow: 0 3px 3px -5px #c5c392, #73a580;
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
            -webkit-box-shadow: 0 3px 26px -1px rgba(0,0,0,.02), 0 1px 33px 0 rgba(0,0,0,.05), 0 6px 14px 0 rgb(255,255,255);
            box-shadow: 0 3px 26px -1px rgba(0,0,0,.02), 0 1px 33px 0 rgba(0,0,0,.05), 0 6px 14px 0 rgb(255,255,255);
            padding: 25px;
            width: 500px;
            height: 100%;
            display: flex;
            flex-direction: c;
            flex-direction: column;
            justify-content: space-between;

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

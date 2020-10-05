import React from "react";
import "./portfolio.styles.scss";

import Card from "../../component/card/Card.component";
import crwn from "../../assets/img/crwn-clothing.png";
import foodsearch from "../../assets/img/foodsearch.png";
import portfolio from "../../assets/img/portfolio.png";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          name: "crwn-clothing",
          webUrl: "https://crwn-nowlive.herokuapp.com/",
          imgUrl: crwn,
        },
        {
          id: 1,
          name: "foodsearch",
          webUrl: "http://foodsearchjs.netlify.app/",
          imgUrl: foodsearch,
        },
        {
          id: 2,
          name: "portfolio",
          webUrl: "http://pareshnandaniya.000webhostapp.com/index.html",
          imgUrl: portfolio,
        },
      ],
    };
  }

  render() {
    return (
      <section id="portfolio">
        <div className="portfolio">
          <h2 className="text-center title text-uppercase">My Work</h2>
          <h5 className="text-center">Check out some of my projects</h5>

          <div className="container-fluid d-flex justify-content-around">
            <div className="card-group">
              <Card
                imgUrl={this.state.projects[0].imgUrl}
                webUrl={this.state.projects[0].webUrl}
                name={this.state.projects[0].name}
              />
              <Card
                imgUrl={this.state.projects[1].imgUrl}
                webUrl={this.state.projects[1].webUrl}
                name={this.state.projects[1].name}
              />
              <Card
                imgUrl={this.state.projects[2].imgUrl}
                webUrl={this.state.projects[2].webUrl}
                name={this.state.projects[2].name}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

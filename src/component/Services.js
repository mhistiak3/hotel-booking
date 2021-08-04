import React, { Component } from "react";
import { FaGift, FaCocktail, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaGift />,
        title: "Bangla Cuisine",
        info: "A list of top Bangla foods, drinks & deserts someone must try while visiting us.",
      },
      {
        icon: <FaCocktail />,
        title: "Indian Cuisine",
        info: "The most popular Indian dishes are vegetables, Dosa, Butter chicken/Butter paneer.",
      },
      {
        icon: <FaShuttleVan />,
        title: "Continental Cuisine",
        info: "We invite you to try our restaurant for health, and satisfying experience.",
      },
      {
        icon: <FaBeer />,
        title: "Drinks & Dessert",
        info: "You'll find a wide variety of dessert drinks here, like holiday drink recipes, tropical drinks.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Restaurant Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className='service'>
              <span>{item.icon}</span>
              <h5>{item.title}</h5>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

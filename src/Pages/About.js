import React from "react";
import Banner from "../component/Banner";
import Hero from "../component/Hero";

const About = () => {
  return (
    <>
      <Hero hero="aboutPage">
        <Banner
          title="About Us"
          subtitle="Learn More About us and Our Services"
        />
      </Hero>
    </>
  );
};

export default About;

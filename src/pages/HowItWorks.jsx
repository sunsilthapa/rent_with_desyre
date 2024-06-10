import React from "react";
import step1 from "../assets/images/h1.png";
import step2 from "../assets/images/h2.png";
import step3 from "../assets/images/h3.png";
import heroImage from "../assets/images/hero_image.png";
import HeroImageCard from "../components/HeroImageCard";
import StyleCard from "../components/HowItWorkCard";
import Navbar from "../components/layout/NavBar";
import Footer from "../components/layout/Footer";

const HowItWorkPage = () => {
  return (
    <>
      <Navbar />
      <HeroImageCard heroImage={heroImage} />
      <StyleCard
        imageSrc={step1}
        buttonContent="1"
        title="You submit pictures"
        description="You get a notification only when we accept your outfit."
      />
      <StyleCard
        imageSrc={step2}
        buttonContent="1"
        title="We display"
        description="We shoot the outfit and make it live online, at our stores or both. You get order updates."
        reverse
              />
      <StyleCard
        imageSrc={step3}
        buttonContent="1"
        title="We fulfill, you earn"
        description="We dry clean and send it to customers. You earn upto 40% revenue share when the order is served."
      />

    <Footer/>
    </>
  );
};

export default HowItWorkPage;

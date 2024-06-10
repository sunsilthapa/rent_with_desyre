import React, { useRef } from "react";
import calenderImage from "../assets/images/calender.png";
import clothImage from "../assets/images/cloth.png";
import hangerImage from "../assets/images/hanger.png";
import heroImage from "../assets/images/hero_image.png";
import returnImage from "../assets/images/return.png";
import CustomerReviewCard from "../components/user/CustomerReviewCard";
import ProductCard from "../components/FeatureProductCard";
import Navbar from "../components/layout/NavBar";
import ImageCard from "../components/WhyChooseCard";
import Footer from "../components/layout/Footer";
import HeroImageCard from "../components/HeroImageCard";

const HomePage = () => {
  const scrollContainerRef = useRef(null);
  const reviewScrollContainerRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />

      {/* Hero image start */}
     <HeroImageCard heroImage={heroImage}/>
      {/* Hero image end */}

      {/* Why you choose start */}
      <section className="py-8">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-md mb-6 text-center">Why Choose Us</h2>
          <div className="w-full h-auto flex flex-wrap mx-2">
            <div className="md:w-1/4 px-2 mb-8 mt-2">
              <ImageCard
                imageSrc={hangerImage}
                description="Browse our designer collection and select your favorite outfits and accessories."
              />
            </div>
            <div className="md:w-1/4 px-2 mb-8 mt-2">
              <ImageCard
                imageSrc={calenderImage}
                description="Reserve your outfit for 3, 5, 7, or 10 days. We'll tailor it to your size and ensure it's freshly cleaned before delivery."
              />
            </div>
            <div className="md:w-1/4 px-2 mb-8 mt-2">
              <ImageCard
                imageSrc={clothImage}
                description="Show off your chosen look and bask in the compliments it brings."
              />
            </div>
            <div className="md:w-1/4 px-4 mb-8 mt-2">
              <ImageCard
                imageSrc={returnImage}
                description="Simply pack up the outfit, and we'll collect it the day after your event or on your chosen return date."
              />
            </div>
          </div>
        </div>
      </section>
      {/* Why you choose end */}

      {/* Featured products start */}
      <section className="py-8">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-md mb-6 text-center">
            Featured Products
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(scrollContainerRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-20"
            >
              &#9664;
            </button>
            <div
              className="w-full h-auto overflow-x-auto hide-scrollbar flex space-x-4 px-2"
              ref={scrollContainerRef}
            >
              <ProductCard
                bgColor="bg-white"
                category="Dresses"
                title="Tops"
                price="Rs.366.00"
                imageSrc="https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"
              />
              <ProductCard
                bgColor="bg-white"
                category="Men"
                title="Jeans"
                price="Rs.405.00"
                imageSrc="https://th.bing.com/th/id/R.d3becdf372885062d43be71559e0580c?rik=JMvmP4gLrV3p3w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326949yy7yw.png&ehk=am%2bm1UhA8vOfEzELOSJ1WxWR10tnymcN6CCb01G3Kkk%3d&risl=&pid=ImgRaw&r=0"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://th.bing.com/th/id/R.a1c6be9761ebb9a8a395f9acd39d8322?rik=WN1yyx2OsjHY3g&pid=ImgRaw&r=0"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://purepng.com/public/uploads/medium/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326986o1jpv.png"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://purepng.com/public/uploads/medium/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326986o1jpv.png"
              />
              <ProductCard
                bgColor="bg-white"
                category="Party"
                title="Shirt"
                price="Rs.680.50"
                imageSrc="https://purepng.com/public/uploads/medium/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326986o1jpv.png"
              />
              {/* Add more ProductCard components as needed */}
            </div>
            <button
              onClick={() => scrollRight(scrollContainerRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-20"
            >
              &#9654;
            </button>
          </div>
        </div>
      </section>
      {/* Featured products end */}

      {/* Curated products starts */}
      <section className="py-8">
        <div className=" mx-auto px-4">
          <h2 className="text-3xl font-md mb-6 text-center">Curated Products</h2>
          <div className="w-full h-auto flex flex-wrap items-center justify-center">
            <ProductCard
              bgColor="bg-white"
              category="Dresses"
              title="Tops"
              price="Rs.366.00"
              imageSrc="https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326975ia8xr.png"
            />
            <ProductCard
              bgColor="bg-white"
              category="Men"
              title="Jeans"
              price="Rs.405.00"
              imageSrc="https://th.bing.com/th/id/R.d3becdf372885062d43be71559e0580c?rik=JMvmP4gLrV3p3w&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326949yy7yw.png&ehk=am%2bm1UhA8vOfEzELOSJ1WxWR10tnymcN6CCb01G3Kkk%3d&risl=&pid=ImgRaw&r=0"
            />
            <ProductCard
              bgColor="bg-white"
              category="Party"
              title="Shirt"
              price="Rs.680.50"
              imageSrc="https://th.bing.com/th/id/R.a1c6be9761ebb9a8a395f9acd39d8322?rik=WN1yyx2OsjHY3g&pid=ImgRaw&r=0"
            />
            <ProductCard
              bgColor="bg-white"
              category="Party"
              title="Shirt"
              price="Rs.680.50"
              imageSrc="https://purepng.com/public/uploads/medium/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326986o1jpv.png"
            />
          </div>
        </div>
      </section>
      {/* Curated products ends */}

      {/* Customer reviews start */}
      <section className="py-8">
        <div className="mx-auto px-4">
          <h2 className="text-3xl font-md mb-6 text-center">
            Customer Reviews
          </h2>
          <div className="relative">
            <button
              onClick={() => scrollLeft(reviewScrollContainerRef)}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-20"
            >
              &#9664;
            </button>
            <div
              className="w-full h-auto overflow-x-auto hide-scrollbar flex space-x-4 px-2"
              ref={reviewScrollContainerRef}
            >
              <CustomerReviewCard
                imageSrc="https://randomuser.me/api/portraits/women/44.jpg"
                review="I absolutely loved the dress! It was perfect for the wedding I attended."
                customerName="Emily R."
              />
              <CustomerReviewCard
                imageSrc="https://randomuser.me/api/portraits/men/44.jpg"
                review="Great service and the outfit was just what I needed for the party."
                customerName="John D."
              />
              <CustomerReviewCard
                imageSrc="https://randomuser.me/api/portraits/women/68.jpg"
                review="The fit was perfect and the quality exceeded my expectations."
                customerName="Sophia P."
              />
              <CustomerReviewCard
                imageSrc="https://randomuser.me/api/portraits/men/68.jpg"
                review="Highly recommend! Will definitely rent again for future events."
                customerName="Michael S."
              />
              {/* Add more CustomerReviewCard components as needed */}
            </div>
            <button
              onClick={() => scrollRight(reviewScrollContainerRef)}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full z-20"
            ></button>
          </div>
        </div>
      </section>
      {/* Customer reviews end */}


      {/* Footer starts */}
      <Footer/>
      {/* Footer ends */}


    </>
  );
};

export default HomePage;

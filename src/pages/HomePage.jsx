import React from 'react'
import Navbar from '../components/layout/NavBar'
import heroImage from "../assets/images/hero_image.png";
import ImageCard from '../components/WhyChooseCard';

const HomePage = () => {

  return (
    <>
    <Navbar/>

    {/* hero image start */}
    <header className=' w-full h-auto relative'>
      <div className='absolute right-1/3 top-1/3 z-10 text-2xl text-center  text-white'>
        <p>New Arrivals</p>
        <p className='font-medium text-6xl'>Women Styles</p>
        <p>Up to <span className='text-orange'>70%</span> off site wide</p>
        <button className='mt-2 px-9  py-1  bg-white text-black rounded-3xl'>Rent Now</button>
      </div>
    <img class="w-full h-[70vh] hidden md:block  z-0" src={heroImage} alt=""/>
    <img class="w-full md:hidden z-0" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3ZpzGOuYCyWEwgEYKXNkdw.png" alt=""/>
    </header>
    {/* hero image start */}


    {/* Why you choose start*/}
    <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-md mb-6 text-center">Why Choose Us</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <ImageCard
                imageSrc={heroImage}
                description="High quality materials"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <ImageCard
                imageSrc={heroImage}
                description="Affordable prices"
              />
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <ImageCard
                imageSrc={heroImage}
                description="Trendy designs"
              />
            </div>
          </div>
        </div>
      </section>
    {/* Why you choose ends */}


    </>

  )
}

export default HomePage
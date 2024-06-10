import React from 'react'

const HeroImageCard = ({heroImage}) => {
  return (
    <>
    <header className="w-full h-auto relative">
        <div className="absolute right-1/3 top-1/3 z-10 text-2xl text-center text-white">
          <p>New Arrivals</p>
          <p className="font-medium text-6xl">Women Styles</p>
          <p>
            Up to <span className="text-orange">70%</span> off site wide
          </p>
          <button className="mt-2 px-9 py-1 bg-white text-black rounded-3xl">
            Rent Now
          </button>
        </div>
        <img
          className="w-full h-[70vh] hidden md:block z-0"
          src={heroImage}
          alt=""
        />
        <img
          className="w-full md:hidden z-0"
          src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3ZpzGOuYCyWEwgEYKXNkdw.png"
          alt=""
        />
      </header>
    </>
  )
}

export default HeroImageCard
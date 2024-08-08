import React from "react";
import Image from "next/image";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => (
  <div className="relative p-5 mt-20 sm:ml-12 lg:mt-52 flex items-center justify-between">
    <div className="max-w-lg">
      <h1 className="text-red-600 font-bold text-6xl lg:text-7xl mb-4 leading-tight">
        Fitness Club
      </h1>
      <h2 className="font-bold text-4xl lg:text-5xl mb-6 mt-8 leading-tight">
        Sweat, Smile <br />
        And Repeat
      </h2>
      <p className="text-xl font-alegreya leading-9">
        Check out the most effective exercises personalized to you
      </p>
      <a
        href="#exercises"
        className="mt-12 inline-block w-48 text-center bg-red-600 p-4 text-xl text-white rounded shadow-lg transition-transform transform hover:scale-105"
      >
        Explore Exercises
      </a>
      <h1 className="absolute top-0 left-0 text-red-600 opacity-10 text-[120px] -z-10 hidden lg:block">
        Exercise
      </h1>
    </div>
    <div className="relative flex-shrink-0">
      <Image
        src={HeroBannerImage}
        alt="hero-banner"
        layout="intrinsic"
        width={600}
        height={400}
        className="object-cover"
      />
    </div>
  </div>
);

export default HeroBanner;

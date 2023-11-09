import { Link } from 'react-router-dom';

import TypewriterComponent from 'typewriter-effect';

import { ArrowRight } from 'lucide-react';
import hero from '../assets/hero.png';

const LandingHero = () => {
  return (
    <div className="text-center font-bold py-20 space-y-4">
      <div className="text-3xl md:text-5xl lg:text-6xl mb-4">
        <h1>Access Real Time Data for </h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-600 mb-4">
          <TypewriterComponent
            options={{
              strings: [
                'Ecommerce Builds',
                'Price Analysis',
                'Data Analysis',
                'Developer Practice',
                'Products Reviews',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p className="text-sm md:text-base font-light text-gray-500 mb-4">
          Access data from your favourite ecommerce stores easily
        </p>
      </div>
      <div className="w-full flex items-center justify-center mb-8">
        <Link
          to="/docs"
          className="flex items-center gap-4 py-4 px-20 text-center shadow-xl bg-blue-600 text-white text-sm font-semibold rounded-full hover:bg-blue-500 hover:shadow-2xl transition"
        >
          Get Scraping For Free <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center h-48 w-full md:h-[30rem] py-6">
        <img alt="hero" src={hero} className="object-contain h-full w-full" />
        <p className="text-[0.8rem] md:text-base font-light text-gray-500 mt-2">
          Consume the response in your favourite JSON format
        </p>
      </div>
    </div>
  );
};

export default LandingHero;

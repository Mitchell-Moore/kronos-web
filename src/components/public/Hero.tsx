import * as React from 'react';

export interface HeroProps {}

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <div className="mx-auto text-center max-w-container px-4 pt-12 lg:px-8">
      <div className="relative z-20 mx-auto pb-16 pt-16 lg:w-[60rem]">
        <div className="mt-32 text-8xl font-extrabold text-black animate-slideDown">
          Schedule <br />
          like a God!
        </div>
        <p className="mt-10 text-xl text-semibold text-slate-600 px-4 lg:w-[40rem] mx-auto text-center w-full">
          Take control of your schedule like the Gods do. Are your disciples
          interrupting your Godly time? Our modern, state of the art, scheduling
          service will show your available time to your disciples!
        </p>
        <div className="flex flex-row justify-center mt-10">
          <a
            className="flex justify-center rounded-lg text-base font-semibold py-2.5 px-4 border border-slate-900 text-slate-900 hover:bg-slate-200 ml-8"
            href="#"
          >
            <span>Learn More</span>
          </a>
          <a
            className="flex justify-center rounded-lg text-base font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 ml-8"
            href="#"
          >
            <span>Get Started &nbsp;</span>
            <span aria-hidden="true" className="text-white sm:inline">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

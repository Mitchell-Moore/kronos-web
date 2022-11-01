import React from 'react';

interface PublicHeaderProps {}

const PublicHeader: React.FC = (props: PublicHeaderProps) => {
  // const links = ['']
  return (
    <header className="flex items-center justify-between py-7 mx-auto bg-white px-5 w-full absolute top-0 left-0">
      <a>
        <div className="font-bold text-2xl text-black">Kronos</div>
      </a>
      {/* <ul className="hidden lg:flex flex-row justify-between space-x-14">
      <li
        className="group"
        :className="{ 'text-slate-500': activeLink !== link }"
        v-for="link in links"
        :key="link"
        @click="() => (activeLink = link)"
      >
        <a
          to="#"
          className="font-medium group-hover:text-slate-900 transition-all duration-300"
          >{{ link }}</a
        >
      </li>
    </ul> */}
      <div>
        <a
          href="#"
          className="text-slate-500 hover:text-slate-900 font-semibold"
        >
          Login
        </a>
        <a
          className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
          href="#"
        >
          <span>Get Started &nbsp;</span>
          <span aria-hidden="true" className="text-white sm:inline">
            →
          </span>
        </a>
      </div>
    </header>
  );
};

export default PublicHeader;

import * as React from 'react';

export interface TestimonialsProps {}

const Testimonials: React.FC = (props: TestimonialsProps) => {
  return (
    <div className="px-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 text-slate-700">
      <div className="w-full h-72 xl:h-64 rounded-2xl bg-slate-100 shadow p-8">
        <div className="flex flex-row">
          <img
            src="../../../images/Theo.jpeg"
            alt="User Profile Picture"
            className="rounded-full object-center h-16 w-16"
          />
          <div className="flex flex-col my-auto ml-4">
            <span className="text-lg font-semibold text-slate-900">Theo</span>
            <span className="text-sm">@t3dotgg</span>
          </div>
        </div>
        <p className="pt-4 text-base">
          Hey what's up nerds. Today I'm announcing a partnership with Kronos
          for
          <a className="text-blue-500" href="#">
            Ping.gg
          </a>
          . Kronos is pretty neat you should check it out.
          <a className="text-blue-500" href="#">
            kronos.com/theo
          </a>
        </p>
      </div>
      <div className="w-full h-72 xl:h-64 rounded-2xl bg-slate-100 shadow p-8">
        <div className="flex flex-row">
          <img
            src="../../../images/Dan.jpeg"
            alt="User Profile Picture"
            className="rounded-full object-center h-16 w-16"
          />
          <div className="flex flex-col my-auto ml-4">
            <span className="text-lg font-semibold text-slate-900">дэн</span>
            <span className="text-sm">@dan_abramov</span>
          </div>
        </div>
        <p className="pt-4 text-base">
          Kronos is pretty cool. If you want to chat about react book a time
          with me at
          <a className="text-blue-500" href="#">
            kronos.com/dan
          </a>
        </p>
      </div>
      <div className="w-full h-72 xl:h-64 rounded-2xl bg-slate-100 shadow p-8">
        <div className="flex flex-row">
          <img
            src="../../../images/Prime.jpeg"
            alt="User Profile Picture"
            className="rounded-full object-center h-16 w-16"
          />
          <div className="flex flex-col my-auto ml-4">
            <span className="text-lg font-semibold text-slate-900">
              ThePrimeagen
            </span>
            <span className="text-sm">@ThePrimeagen</span>
          </div>
        </div>
        <p className="pt-4 text-base">
          Kronos is blazing fast <span>&#x1f525;</span>. But it could be faster
          with Rust. If you want to me to review your slow code book a time with
          me on Kronos
          <a className="text-blue-500" href="#">
            kronos.com/theprimeagen
          </a>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;

import * as React from 'react';

export interface ValuePropsProps {}

const ValueProps: React.FC = (props: ValuePropsProps) => {
  return (
    <div className="flex flex-col md:flex-row w-full items-center md:items-start text-center md:text-left md:justify-around">
      <div className="max-w-[20rem] w-full rounded-lg flex flex-row p-4 lg:p-0">
        <div className="flex flex-col">
          <p className="text-sm font-semibold leading-6 text-slate-900">
            Built with modern technologies
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Our technology is built with bleeding edge technology so you won't
            get left in ancient times.
          </p>
        </div>
      </div>
      <div className="max-w-[20rem] w-full rounded-lg flex flex-row p-4 lg:p-0">
        <div className="flex flex-col">
          <p className="text-sm font-semibold leading-6 text-slate-900">
            Ease of user
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Our team has made scheduling so easy a mortal could do it. In just 3
            steps you will accepting meetings from your disciples.
          </p>
        </div>
      </div>
      <div className="max-w-[20rem] w-full rounded-lg flex flex-row p-4 lg:p-0">
        <div className="flex flex-col">
          <p className="text-sm font-semibold leading-6 text-slate-900">
            Built by experts
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-700">
            Some of our engineers have been around since the beginning of time,
            so your time is safe with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValueProps;

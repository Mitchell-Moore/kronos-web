import React, { useState } from 'react';

export interface HowItWorksProps {}

const HowItWorksImages = (props: { activeStep: string }) => {
  if (props.activeStep === 'setAvailability') {
    return (
      <img
        src="../../../public/images/SetAvailability.png"
        alt="Set availability calendar, days of the week enter start and end time"
      />
    );
  } else if (props.activeStep === 'shareLink') {
    return (
      <img
        src="../../../public/images/Link.png"
        alt="Set availability calendar, days of the week enter start and end time"
      />
    );
  }
  return (
    <img
      src="../../../public/images/Meeting.png"
      alt="Calendar with availability showing"
      v-if="activeStep === 'meeting'"
      className="ml-4 w-72 h-72"
    />
  );
};

const HowItWorks: React.FC = (props: HowItWorksProps) => {
  const [activeStep, setActiveStep] = useState('setAvailability');
  return (
    <div className="justify-center w-full bg-slate-100 text-black py-12 mt-24">
      <div className="container mx-auto">
        <div className="text-5xl font-bold mx-auto text-center w-full">
          Schedule meetings without Hermes!
        </div>
        <div className="flex flex-row mt-8">
          <div className="flex flex-col px-4">
            <div className="max-w-[40rem]">
              <div
                className={
                  'w-full hover:bg-slate-800 hover:text-slate-200 px-8 py-8 rounded-lg ' +
                  (activeStep === 'setAvailability'
                    ? 'bg-slate-800 text-slate-200'
                    : '')
                }
                onMouseEnter={() => {
                  setActiveStep('setAvailability');
                }}
              >
                <span className="font-semibold text-2xl">
                  Set your availability
                </span>
                <p className="mt-2 text-sm leading-6">
                  Set schedules for the times you want your disciples to meet
                  with you.
                </p>
              </div>

              <div
                className={
                  'w-full hover:bg-slate-800 hover:text-slate-200 px-8 py-8 rounded-lg ' +
                  (activeStep === 'shareLink'
                    ? 'bg-slate-800 text-slate-200'
                    : '')
                }
                onMouseEnter={() => {
                  setActiveStep('shareLink');
                }}
              >
                <span className="font-semibold text-2xl">Share your link</span>
                <p className="mt-2 text-sm leading-6">
                  Share your short kronos personal link and make it incredibly
                  easy for people to book a meeting at a time that works for
                  both of you!
                </p>
              </div>
              <div
                className={
                  'w-full hover:bg-slate-800 hover:text-slate-200 px-8 py-8 rounded-lg ' +
                  (activeStep === 'meeting'
                    ? 'bg-slate-800 text-slate-200'
                    : '')
                }
                onMouseEnter={() => {
                  setActiveStep('meeting');
                }}
              >
                <span className="font-semibold text-2xl">
                  Meetings on your time
                </span>
                <p className="mt-2 text-sm leading-6">
                  Set repeating schedules for the times of the day and week that
                  you want people to be able to book you.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-[40rem] w-full mb-auto hidden md:flex justify-end mr-10">
            <div
              className={
                'bg-[#212121] rounded-lg w-96 h-96 p-8 flex items-center ' +
                (activeStep === 'meeting' ? 'bg-[#1b1b1c]' : '')
              }
            >
              <HowItWorksImages activeStep={activeStep} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

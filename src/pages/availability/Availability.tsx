import React, { useState } from 'react';
import TimeInput from '../../components/TimeInput';

interface AvailabilityProps {}

const Availability: React.FC<AvailabilityProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const emptyState = '--';
  const [formData, setFormData] = useState([
    { day: 'Monday', startTime: null, endTime: null },
    { day: 'Tuesday', startTime: null, endTime: null },
  ]);

  const submit = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div className="w-full p-16">
      <div className="text-3xl font-bold text-slate-700">Availability</div>
      <span className="text-lg font-semibold">
        Enter when you would like to be available to book!
      </span>

      <div>
        <form
          action=""
          className=" w-56"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          {formData.map((value, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <label htmlFor="email">{value.day}</label>
                <TimeInput dateTime={value.startTime}></TimeInput>
                <TimeInput dateTime={value.endTime}></TimeInput>
              </div>
            );
          })}

          <button
            type="submit"
            className=" bg-blue-400 text-white rounded px-4 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Availability;

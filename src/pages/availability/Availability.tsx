import React, { useEffect, useState } from 'react';
import { getUserSchedules } from '../../api/schedule';
import { getUser } from '../../api/user';
import TimeInput from '../../components/TimeInput';

interface AvailabilityProps {}

const Availability: React.FC<AvailabilityProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [schedules, setSchedules] = useState();

  const [formData, setFormData] = useState([
    { day: 'Monday', startTime: null, endTime: null },
    { day: 'Tuesday', startTime: null, endTime: null },
    { day: 'Wednesday', startTime: null, endTime: null },
    { day: 'Thursday', startTime: null, endTime: null },
    { day: 'Friday', startTime: null, endTime: null },
    { day: 'Saturday', startTime: null, endTime: null },
    { day: 'Sunday', startTime: null, endTime: null },
  ]);

  const defaultTimes: string[] = getDefaultTimes();

  const submit = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  const user = getUser();
  if (!user) {
    return <div>fml</div>;
  }

  useEffect(() => {
    setIsLoading(true);
    getUserSchedules(user.id)
      .then((response) => {
        setIsLoading(false);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <div>Is Loading</div>;
  }
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
                <TimeInput
                  startTime={value.startTime}
                  endTime={value.endTime}
                  times={defaultTimes}
                ></TimeInput>
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

const getDefaultTimes = (): string[] => {
  let defaultTimes: string[] = [];
  let curTime = new Date();
  curTime.setHours(0, 0, 0, 0);
  let endTime = new Date();
  endTime.setHours(23, 59, 0, 0);
  while (endTime > curTime) {
    defaultTimes.push(
      curTime.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
    );
    curTime = new Date(curTime.getTime() + 15 * 60000);
  }
  return defaultTimes;
};

export default Availability;

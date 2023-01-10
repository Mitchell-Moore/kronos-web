import React, { useState } from 'react';
import { Schedule } from '../api/schedule';
import { getUser } from '../api/user';

interface TimeInputProps {
  times: string[];
  schedules: Schedule[];
  dayOfWeek: string;
}

const TimeInput: React.FC<TimeInputProps> = (props) => {
  // const [selectedStartTime, setSelectedStartTime] = useState(
  //   props.startTime !== null
  //     ? props.startTime.toLocaleString('en-US', {
  //         hour: 'numeric',
  //         minute: 'numeric',
  //         hour12: true,
  //       })
  //     : '9:00 AM'
  // );

  // console.log(props.schedules);

  let propSchedules = props.schedules.map((schedule) => {
    // const startTime = schedule.startDateTime.toLocaleTimeString();
    // console.log('startTime', startTime);
    const i = schedule.startDateTime.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
    console.log(i);
    return {
      startTime: '9:00 AM',
      endTime: '10:00 AM',
    };
  });
  // console.log('propsscheduls', propSchedules);
  const [showTimes, setShowTimes] = useState(props.schedules.length > 0);
  // const [schedules, setSchedules] = useState([]);

  const addNewSchedule = () => {
    setShowTimes(true);
    // setSchedules([{ startTime: '9:00 AM', endTime: '5:00 PM' }]);
  };

  if (!showTimes) {
    return (
      <div className="cursor-pointer" onClick={addNewSchedule}>
        +
      </div>
    );
  }
  return (
    <div className="flex flex-row">
      {/* {schedules.map((schedule, idx) => {
        return (
          <div key={idx}>
            <select
              name="start"
              id="start"
              value={schedule.startTime}
              onChange={(e) => {
                schedules[idx].startTime = e.target.value;
                setSchedules([...schedules]);
              }}
            >
              {props.times.map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                );
              })}
            </select>
            -
            <select
              name="end"
              id="end"
              value={schedule.endTime}
              onChange={(e) => {
                schedules[idx].endTime = e.target.value;
                setSchedules([...schedules]);
              }}
            >
              {props.times.map((value, index) => {
                return (
                  <option value={value} key={index}>
                    {value}
                  </option>
                );
              })}
            </select>
          </div>
        );
      })} */}

      <div className=" cursor-pointer" onClick={() => setShowTimes(false)}>
        X
      </div>
    </div>
  );
};

const formateTime = (date: Date) => {
  return date.toLocaleTimeString();
};

export default TimeInput;

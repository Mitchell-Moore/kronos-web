import React, { useState } from 'react';

interface TimeInputProps {
  startTime: Date | null;
  endTime: Date | null;
  times: string[];
}

const TimeInput: React.FC<TimeInputProps> = (props) => {
  const [selectedStartTime, setSelectedStartTime] = useState(
    props.startTime !== null
      ? props.startTime.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
      : '9:00 AM'
  );

  const [selectedEndTime, setSelectedEndTime] = useState(
    props.endTime !== null
      ? props.endTime.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        })
      : '5:00 PM'
  );

  return (
    <div className="flex flex-row">
      <div>
        <select
          name="start"
          id="start"
          value={selectedStartTime}
          onChange={(e) => setSelectedStartTime(e.target.value)}
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
          value={selectedEndTime}
          onChange={(e) => setSelectedEndTime(e.target.value)}
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
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default TimeInput;

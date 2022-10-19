import React from 'react';

interface TimeInputProps {
  dateTime: Date | null;
}

function TimeInput(props: TimeInputProps) {
  let hour = '--';
  let minute = '--';
  let am_pm = 'am';

  if (props.dateTime) {
    hour = (props.dateTime.getHours() % 12).toString();
    minute = props.dateTime.getMinutes().toString();
    am_pm = props.dateTime.getHours() >= 12 ? 'pm' : 'am';
  }

  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  /**
   * TODO:
   *    1. Add Split button for AM PM
   *        a. How do you do if statements in code???
   *    3. How do you emit values to parent during submit??
   *
   */

  return (
    <div className="flex flex-row">
      <div>
        <label htmlFor="hour">Hour</label>
        <select name="hour" id="hour" value={hour}>
          <option value="--">--</option>
          {times.map((value, index) => {
            return (
              <option value={value} key={index}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor="minute">Minute</label>
        <select name="minute" id="minute" value={minute}>
          <option value="--">--</option>
          {times.map((value, index) => {
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
}

export default TimeInput;

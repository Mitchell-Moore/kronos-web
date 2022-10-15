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

  /**
   * TODO:
   *    1. Add Split button for AM PM
   *        a. How do you do if statements in code???
   *    2. Find way to do an option for loop for 1 - 12
   *    3. How do you emit values to parent during submit??
   *
   */

  return (
    <div className="flex flex-row">
      <div>
        <label htmlFor="hour">Hour</label>
        <select name="hour" id="hour" value={hour}>
          <option value="--">--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div>
        <label htmlFor="minute">Minute</label>
        <select name="minute" id="minute" value={minute}>
          <option value="--">--</option>
          <option value="1">1</option>
        </select>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
}

export default TimeInput;

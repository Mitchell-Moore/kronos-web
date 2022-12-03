import React, { useState } from 'react';
import TimeInput from '../../components/TimeInput';

interface AvailabilityProps {}

const Availability: React.FC<AvailabilityProps> = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const emptyState = '--';
  const [form, setForm] = useState({
    monday: { startTime: emptyState, endTime: emptyState },
    tuesday: { startTime: emptyState, endTime: emptyState },
    wednesday: { startTime: emptyState, endTime: emptyState },
    thursday: { startTime: emptyState, endTime: emptyState },
    friday: { startTime: emptyState, endTime: emptyState },
    saturday: { startTime: emptyState, endTime: emptyState },
    sunday: { startTime: emptyState, endTime: emptyState },
  });

  const submit = async () => {
    setIsLoading(true);
    setIsLoading(false);
  };

  return (
    <div>
      <div className="text-xl font-bold">Availability</div>
      <a href="/login">Login</a>
      <a href="/register">Sign Up</a>

      <div>
        <form
          action=""
          className=" w-56"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Monday</label>
            <TimeInput dateTime={null}></TimeInput>
          </div>
          {/* 
          <div className="flex flex-col pb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className=" border-black border rounded"
              id="password"
            />
          </div> */}

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

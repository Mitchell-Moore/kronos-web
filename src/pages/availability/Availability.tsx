import React, { useState } from 'react';

interface AvailabilityProps {}

const Availability: React.FC = (props: AvailabilityProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState({
    monday: { startTime: '- -', endTime: '- -' },
    tuesday: { startTime: '- -', endTime: '- -' },
    wednesday: { startTime: '- -', endTime: '- -' },
    thursday: { startTime: '- -', endTime: '- -' },
    friday: { startTime: '- -', endTime: '- -' },
    saturday: { startTime: '- -', endTime: '- -' },
    sunday: { startTime: '- -', endTime: '- -' },
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
            <input
              type="time"
              value={form.monday.startTime}
              required
              className=" border-black border rounded"
              id="email"
            />
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

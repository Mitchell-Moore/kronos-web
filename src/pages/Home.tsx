import React from 'react';

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <div className="text-xl font-bold">Home</div>
      <a href="/login">Login</a>
      <a href="/register">Sign Up</a>
    </div>
  );
};

export default Home;

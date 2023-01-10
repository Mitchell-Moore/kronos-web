import React, { useState } from 'react';
import { login } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import PublicHeader from '../../components/public/PublicHeader';

interface LoginProps {}

const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    setIsLoading(true);
    const { data, error } = await login({ email, password });
    if (data) {
      navigate('/availability');
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div className="container mx-auto">
      <PublicHeader />
      <div className="pt-32">
        <div className="text-xl font-bold">Login</div>
        <a href="/">Home</a>
        <a href="/register">Sign Up</a>

        <form
          action=""
          className=" w-56"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className=" border-black border rounded"
              id="email"
            />
          </div>

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
          </div>

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

export default Login;

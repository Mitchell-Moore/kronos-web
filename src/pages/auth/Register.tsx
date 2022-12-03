import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from '../../api/user';
import PublicHeader from '../../components/public/PublicHeader';

interface RegisterProps {}

const Register: React.FC<RegisterProps> = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
    firstName: '',
    lastName: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async () => {
    setIsLoading(true);
    const { data, error } = await register(formData);
    if (data) {
      navigate('/login');
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
        <form
          action=""
          className=" w-56"
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="email">First Name</label>
            <input
              type="text"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              required
              className=" border-black border rounded"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Last Name</label>
            <input
              type="text"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              required
              className=" border-black border rounded"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              value={formData.userName}
              onChange={(e) =>
                setFormData({ ...formData, userName: e.target.value })
              }
              required
              className=" border-black border rounded"
              id="email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
              className=" border-black border rounded"
              id="email"
            />
          </div>

          <div className="flex flex-col pb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
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

export default Register;

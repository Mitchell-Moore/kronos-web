import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

interface AuthLayoutProps {}

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  return (
    <>
      <Sidebar />
      <section className="auth-container mx-auto">
        <Outlet />
      </section>
    </>
  );
};

export default AuthLayout;

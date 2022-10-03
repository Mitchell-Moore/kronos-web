import React from 'react'

interface LoginProps {}

const Login: React.FC = (props: LoginProps) => {
  return (
    <div>
      <div className="text-xl font-bold">Login</div>
      <a href="/">Home</a>
      <a href="/register">Sign Up</a>
    </div>
  )
}

export default Login

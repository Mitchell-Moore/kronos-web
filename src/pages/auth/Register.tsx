import React from 'react'

interface RegisterProps {}

const Register: React.FC = (props: RegisterProps) => {
  return (
    <div>
      <div className="text-xl font-bold">Register</div>
      <a href="/">Home</a>
      <a href="/login">Login</a>
    </div>
  )
}

export default Register

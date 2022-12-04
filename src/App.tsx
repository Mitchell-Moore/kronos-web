import { Routes, Route } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Landing from './pages/Landing';
import Availability from './pages/availability/Availability';
import AuthLayout from './components/layout/AuthLayout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Register />} />
        <Route element={<AuthLayout />}>
          <Route path="/availability" element={<Availability />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

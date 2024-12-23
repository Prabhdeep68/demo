import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';




import SignupForm from './SignupForm';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Our App</h1>
        
        {/* Navigation Buttons */}
        <div>
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
        
        {/* Routes for login and signup */}
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

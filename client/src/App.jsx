import React, { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from "./pages/login";
import { useSelector } from "react-redux";

function App() {
  const auth = useSelector((state) => state.auth);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const PrivateRoute = () => {
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
  };

  useEffect(() => {
    if (auth.id !== null) setIsLoggedIn(true);
  }, [auth.id]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

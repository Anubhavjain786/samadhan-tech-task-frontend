import SignUp from "./pages/signup";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import HomePage from "./pages/homepage";
import { useState } from "react";
import { Routes as ROUTES } from "./constants";
import NotFoundPage from "./pages/400";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <Routes>
      <Route
        element={<SignUp token={token} setToken={setToken} />}
        path={ROUTES.SIGNUP}
      />
      <Route
        element={<Login token={token} setToken={setToken} />}
        path={ROUTES.LOGIN}
      />
      <Route
        element={<HomePage token={token} setToken={setToken} />}
        path={ROUTES.HOME}
      />
      <Route
        element={<NotFoundPage token={token} setToken={setToken} />}
        path="*"
      />
    </Routes>
  );
}

export default App;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/navbar";
import { Routes } from "../constants";

interface LoginProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

function Login({ token, setToken }: LoginProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(Routes.HOME);
    }
  }, []);

  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <LoginForm setToken={setToken} />
    </>
  );
}

export default Login;

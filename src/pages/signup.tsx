import SignUpForm from "../components/SignUpForm";
import Navbar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Routes } from "../constants";

interface SignUpProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

function SignUp({ token, setToken }: SignUpProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate(Routes.HOME);
    }
  }, []);

  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <SignUpForm setToken={setToken} />
    </>
  );
}

export default SignUp;

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { Routes } from "../constants";

interface HomePageProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

function NotFoundPage({ token, setToken }: HomePageProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(Routes.SIGNUP);
    }
  }, []);
  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <div className="flex items-center dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
              404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl dark:text-gray-500">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-500">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <a
              rel="noopener noreferrer"
              href={Routes.HOME}
              className="px-8 py-3 font-semibold rounded dark:bg-blue-500 dark:text-white"
            >
              Back to homepage
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;

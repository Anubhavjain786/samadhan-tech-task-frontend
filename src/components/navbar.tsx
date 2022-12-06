import { Link, useNavigate } from "react-router-dom";
import { Routes } from "../constants";

interface NavbarProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

function Navbar({ token, setToken }: NavbarProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
    navigate(Routes.LOGIN);
  }
  return (
    <div>
      <nav className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 bg-slate-200 rounded-md px-1 py-1">
              <img
                className="h-10 w-10"
                src="https://squareboat.com/images/favicon.ico"
                alt="Workflow"
              />
            </div>
            <div className="">
              <div className="ml-10 flex items-baseline space-x-4">
                {!token && (
                  <Link
                    to={Routes.LOGIN}
                    className="text-white hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </Link>
                )}
                {!token && (
                  <Link
                    to={Routes.SIGNUP}
                    className="text-white hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Register
                  </Link>
                )}
                {token && (
                  <div
                    onClick={logout}
                    className="text-white hover:text-blue-600 hover:bg-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

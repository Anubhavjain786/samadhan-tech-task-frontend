import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import { Routes } from "../constants";
import { UserServices } from "../services";

interface HomePageProps {
  token: string | null;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const service = new UserServices();

function HomePage({ token, setToken }: HomePageProps) {
  const navigate = useNavigate();
  const { data, loading, error } = service.profile();

  useEffect(() => {
    if (!token) {
      navigate(Routes.SIGNUP);
    }
  }, []);

  return (
    <>
      <Navbar token={token} setToken={setToken} />
      <div className="mt-10 flex justify-center">
        {data && data.user && (
          <table className="shadow-lg bg-white">
            <thead>
              <tr>
                <th className="bg-blue-100 border text-left px-8 py-4">ID</th>
                <th className="bg-blue-100 border text-left px-8 py-4">Name</th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-8 py-4">{data.user.id}</td>
                <td className="border px-8 py-4">{data.user.name}</td>
                <td className="border px-8 py-4">
                  <a href={`mailto:${data.user.email}`}>{data.user.email}</a>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default HomePage;

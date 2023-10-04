import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const LoginBTN = () => {
  const [passHide, setPassHide] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

    const { logIn} = useContext(AuthContext);

  const togglePasswordVisibility = () => {
    setPassHide(!passHide);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // log in user
    logIn(email, password) 
    .then((result) => {
        console.log(result.user);
        navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
        console.error(error.message);
    })
  };

  return (
    <div className="bg-base-200 roun">
      <Navbar></Navbar>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Login your account</h1>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <div>
            <label className="sr-only">Email Address</label>
            <div className="relative">
              <input
                name="email"
                type="email"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter email" required
              />
              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label className="sr-only">Password</label>
            <div className="relative">
              <input
                name="password" required
                type={passHide ? "password" : "text"} // Toggle password visibility
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter your password"
                onChange={(e) => setPassHide(e.target.value)}
              />
              <span
                className="absolute inset-y-0 end-0 grid place-content-center px-4"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {passHide ? (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="6"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  ) : (
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="6"
                      d="M16 4.293L19.293 7.586 22.707 4.293M2.293 19.293L5.586 22.586 2.293 25.879"
                    />
                  )}
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">
              No account?
              <Link className="text-red-700 font-bold" to="/register">
                {" "}
                Register
              </Link>
            </p>

            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginBTN;

import logo from "../assets/logo/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { $axios } from "../http/http.Service";
import { useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    password: "123456",
    email: "admin@gmail.com",
    mobile: "",
    isEmail: true,
  });

  function handleSubmit(e: any) {
    e.preventDefault();

    console.log(loginData);
    $axios
      .post("/auth/login", loginData)
      .then((res: any) => {
        console.log(res);
        localStorage.setItem("cms-hit", res.result.token);
        localStorage.setItem("isLoggedIn", String(true));

        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div className="bg-primary-500">
      <div className="h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-20 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <Link to="/" className="flex">
                <img className="mx-auto h-12 w-auto" src={logo} />
              </Link>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm mt-8 text-gray-700"
                >
                  Enter your phone number
                </label>
                <div className="">
                  <input
                    name="phonenumber"
                    type="text"
                    autoComplete="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="appearance-none block w-full px-3 py-2 border-b-2 border-secondary-600 placeholder-gray-400 focus:outline-none focus:ring-secondary-800 focus:border-secondary-800 sm:text-lg"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mt-8 text-gray-700"
                >
                  Password
                </label>
                <div className="">
                  <input
                    name="password"
                    type="text"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                    autoComplete="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border-b-2 border-secondary-600 placeholder-gray-400 focus:outline-none focus:ring-secondary-800 focus:border-secondary-800 sm:text-lg"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <div>
                  <button
                    type="submit"
                    className="flex justify-center px-8 py-2 mt-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-500 hover:bg-primary-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                  >
                    Login
                  </button>

                  <div>
                    <Link to="/">
                      <p className="text-center pt-4 underline"> Home</p>
                    </Link>
                    <Link to="/auth/register">
                      <p className="text-center pt-4 underline"> Register</p>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

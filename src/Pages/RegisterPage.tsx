import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { $axios } from "../http/http.Service";
import { useState } from "react";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    password: "123456",
    confirmPassword: "123456",
    email: "anthony@gmail.com",
    mobile: "12345678",
    isEmail: true,
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    $axios
      .post("/auth/register", registerData)
      .then((res) => {
        console.log(res);
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
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
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
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
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
                    Register
                  </button>

                  <div>
                    <Link to="/">
                      <p className="text-center pt-4 underline"> Home</p>
                    </Link>
                    <Link to="/auth/login">
                      <p className="text-center pt-4 underline"> Login</p>
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

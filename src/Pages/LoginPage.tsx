import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const LoginPage = () => {
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
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm text-center mt-8 text-gray-700"
                />
                <div className="mt-8">
                  <label>Email / Mobile:</label>

                  <input
                    name="phonenumber"
                    type="text"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border-b-2 border-secondary-600 placeholder-gray-400 focus:outline-none focus:ring-secondary-800 focus:border-secondary-800 sm:text-lg"
                  />
                </div>
                <div className="mt-8">
                  <label>Password:</label>
                  <input
                    name="phonenumber"
                    type="text"
                    autoComplete="email"
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

export default LoginPage;

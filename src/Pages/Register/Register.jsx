import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    email: "",
    password: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) {
      errors.name = "Name is required";
    }

    if (formData.url && !isValidURL(formData.url)) {
      errors.url = "Invalid URL format";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      errors.password = "Password requirements not met";
    }

    if (!formData.terms) {
      errors.terms = "You must accept the terms and conditions";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidURL = (url) => {
    const urlPattern =
      /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,6}([-a-zA-Z0-9@:%._\+~#=]{2,})?(\?[a-z0-9+_&%-=]+)?$/i;
    return urlPattern.test(url);
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const isValidPassword = (password) => {
    const lengthCheck = password.length >= 7;
    const specialCharCheck = /[!@#$%^&*]/.test(password);
    const capitalLetterCheck = /[A-Z]/.test(password);

    return lengthCheck && specialCharCheck && capitalLetterCheck;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const url = form.get("url");
    const email = form.get("email");
    const password = form.get("password");

    try {
      // Attempt to create the user
      await createUser(email, password);
      // If successful, display a success toast message and redirect or do other actions
      toast.success("Registration successful!");
      console.log("User registered successfully");
    } catch (error) {
      // If there's an error, set the error state and display an error toast message
      setErrors({}); // Clear any previous form errors
      toast.error(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="font-poppins">
    <Navbar></Navbar>
      <section className="">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl mb-10">
              Register your account
            </h1>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form onSubmit={handleRegister} className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-xl font-semibold text-gray-900">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleInputChange}
                    value={formData.name}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.name && (
                    <div className="text-red-600">{errors.name}</div>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-xl font-semibold text-gray-900">
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="url"
                    placeholder="Your photo url"
                    onChange={handleInputChange}
                    value={formData.url}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.url && (
                    <div className="text-red-600">{errors.url}</div>
                  )}
                </div>

                <div>
                  <label className="block mb-2 text-xl font-semibold text-gray-900 ">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                  {errors.email && (
                    <div className="text-red-600">{errors.email}</div>
                  )}
                </div>
                <div>
                  <label className="block mb-2 text-xl font-semibold text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleInputChange}
                    value={formData.password}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errors.password && (
                    <div className="text-red-600">{errors.password}</div>
                  )}
                </div>

                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      name="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      onChange={handleInputChange}
                      checked={formData.terms}
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label className="font-light text-gray-500 dark:text-gray-300">
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#403F3F] text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;

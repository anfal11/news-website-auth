import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-indigo-500 bg-fixed bg-cover bg-bottom  flex justify-center items-center">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="text-center text-gray-50">
          <div className="relative ">
            <h1 className="text-9xl mb-10 tracking-tighter-less text-shadow font-sans font-bold">
              <span>4</span><span>0</span><span>4</span>
            </h1>
            <span className="absolute -top-10 text-gray-300 font-semibold mb-10">Oops!</span>
          </div>
          <h5 className="text-gray-300 font-semibold -mr-10 -mt-3 mb-6">Page not found</h5>
          <p className="text-gray-100 mt-2 mb-6">We are sorry, but the page you requested was not found</p>
          <Link
            className="bg-green-400 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"
            to="/"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

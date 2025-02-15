import { useState } from "react";
import { Link } from "react-router-dom";

function CaptainLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setcaptainData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    setcaptainData({
      email,
      password,
    });
    console.log(captainData);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <img src="../img/logo.png" alt="" />
        <h2 className="text-2xl font-bold text-center">Captain Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200"
          >
            Login
          </button>
          <div className="py-5 flex justify-center items-center">
            <p className="text-stone-800">haven&apos;t account ?</p>{" "}
            <Link className="text-sky-600 ml-1" to={"/captain-signup"}>
              Signup now
            </Link>
          </div>
          <div className="flex justify-items-center ">
            <Link
              className="bg-green-500 text-stone-50 py-2 px-5 w-full rounded text-center"
              to={"/user-login"}
            >
              Sign in as User
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CaptainLogin;

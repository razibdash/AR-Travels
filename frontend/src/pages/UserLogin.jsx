import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UserLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    axios
      .post("http://localhost:4000/users/login", formData)
      .then((res) => {
        toast.success("Login successful");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/user-profile");
      })
      .catch(() => {
        toast.error("Invalid user email or password");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <Link to="/"><img src="../img/logo.png" alt="" /></Link>
        <h2 className="text-2xl font-bold text-center">User Login</h2>
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
              name="email"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              value={formData.password}
              onChange={handleChange}
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
            <p className="text-stone-800">Don&apos;t have an account?</p>{" "}
            <Link className="text-sky-600 ml-1" to={"/user-signup"}>
              Signup now
            </Link>
          </div>
          <div className="flex justify-items-center ">
            <Link
              className="bg-green-500 text-stone-50 py-2 px-5 w-full rounded text-center"
              to={"/captain-login"}
            >
              Sign in as Captain
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLogin;

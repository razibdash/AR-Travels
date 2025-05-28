import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function UserSignup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    axios
      .post("http://localhost:4000/users/register", formData)
      .then((res) => {
        navigate("/user-login");
        console.log(res.data);
        toast.success("Registration successful! Please login.");
      })
      .catch((err) => {
        toast.error("Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md">
        <img src="../img/logo.png" alt="" />
        <h2 className="text-2xl font-bold mb-4 text-center">User SignUp</h2>

        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            name="fullname.firstname"
            value={formData.fullname.firstname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
            minLength="3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            name="fullname.lastname"
            value={formData.fullname.lastname}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            minLength="3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
        <div className="py-5 flex justify-center items-center">
          <p className="text-stone-800">have account ?</p>{" "}
          <Link className="text-sky-600 ml-1" to={"/user-login"}>
            Login now
          </Link>
        </div>
      </form>
    </div>
  );
}

export default UserSignup;

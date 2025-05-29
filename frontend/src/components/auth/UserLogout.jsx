import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const UserLogout = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      toast.error("You are not logged in.");
      navigate("/user-login");
      return null;
    } else {
      axios
        .get("http://localhost:4000/users/logout", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          toast.success("Logout successful");
          navigate("/user-login");
        })
        .catch(() => {
          toast.error("Logout failed. Please try again.");
        });
    }
  }, [token, navigate]);

  return <>logout</>;
};

export default UserLogout;

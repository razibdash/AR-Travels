import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      // Redirect to login or show an error message
      navigate("/user-login");
    }
  }, [token]);
  // If token exists, render the children components
  return <>{children}</>;
};

export default UserProtectedWrapper;

import { useNavigate } from "react-router-dom";
const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    // Redirect to login or show an error message
    navigate("/user-login");
  } else {
    return <>{children}</>;
  }
};

export default UserProtectedWrapper;

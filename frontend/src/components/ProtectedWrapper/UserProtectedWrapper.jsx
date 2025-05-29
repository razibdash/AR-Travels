import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../../context/UserContext";
import axios from "axios";
// eslint-disable-next-line react/prop-types
const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const {user, setUser} = useContext(UserDataContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!token) {
      // Redirect to login or show an error message
      navigate("/user-login");
       return;
    }

    // Fetch user profile
    axios
      .get("http://localhost:4000/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setUser(res.data.user);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
        localStorage.removeItem("token");
        navigate("/user-login");
      });
  }, [token]);

if(isLoading){
  return <div>...Loading</div>
}

  // If token exists, render the children components
  return <>{children}</>;
};

export default UserProtectedWrapper;

import { createContext, useEffect, useState } from "react";
function UserContext({ children }) {
  const userDataContext = createContext();

  const [user, setUser] = useState({});
  useEffect(() => {
    // You can set initial user data here if needed
    setUser({
      fullname: {
        firstName: "",
        lastName: "",
      },
      email: "",
    });
  }, []);
  return (
    <userDataContext.Provider value={user}>{children}</userDataContext.Provider>
  );
}

export default UserContext;

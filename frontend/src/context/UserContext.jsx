import React, { createContext, useState } from "react";

export const UserDataContext = createContext();

const UserContext = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    fullName: {
      firstName: "",
      lastName: "",
    },
  });
  const [location,setLocation] = useState([]);
  const [vehicle,setVehicle] = useState([])

  const value = {
    user,
    setUser,
    location,
    setLocation,
    vehicle,
    setVehicle
  }
  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;

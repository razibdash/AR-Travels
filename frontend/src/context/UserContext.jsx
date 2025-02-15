import { createContext, useState } from "react";
const userDataContext = createContext();
function UserContext({ children }) {
  const [user, setuser] = useState({});
  setuser({
    fullname: {
      firstName: "",
      lastName: "",
    },
    email: "",
  });
  return (
    <div>
      <userDataContext.Provider value={[user, setuser]}>
        {children}
      </userDataContext.Provider>
    </div>
  );
}

export default UserContext;

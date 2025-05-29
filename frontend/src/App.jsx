import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignup from "./pages/CaptainSignup";
import { ToastContainer } from "react-toastify";
import UserProtectedWrapper from "./components/ProtectedWrapper/UserProtectedWrapper";
import UserProfiles from "./pages/Profiles/UserProfiles";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/user-signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route
          path="/user-profile"
          element={
            <UserProtectedWrapper>
              <UserProfiles />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;

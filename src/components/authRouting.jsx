import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../pages/Login/LoginForm";
import SignupForm from "../pages/Signup/SignupForm";

const AuthRouting = (props) => {
  const auth = useSelector((x) => x.auth.value);

  if (auth) {
    console.log("AuthRouting Pagge");

    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="login" element={<LoginForm />} />
      <Route path="signup" element={<SignupForm />} />
    </Routes>
  );
};

export default AuthRouting;

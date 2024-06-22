import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRouteAdmin () {
  const { user, validateUser } = useContext(AuthContext);

  return validateUser() && user.usuRole === "admin" ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouteAdmin;

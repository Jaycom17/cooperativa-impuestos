import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

/**
 * TODO: Implement ProtectedRouteProfessor component
 * @returns 
 */
function ProtectedRouteProfessor() {
  const { user, validateUser } = useContext(AuthContext);

  return validateUser() && user.usuRole === "profesor" ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteProfessor;
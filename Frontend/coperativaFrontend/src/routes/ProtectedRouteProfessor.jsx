import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRouteProfessor () {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1>Loading...</h1>;

  return user && user.usuRole === "profesor" ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouteProfessor;
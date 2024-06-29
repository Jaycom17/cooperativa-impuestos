import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRouteProfessor () {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <h1 className="flex items-center justify-center bg-background min-h-screen h-full text-unicoop text-3xl font-bold w-full">Un momento por favor...</h1>;

  return user && user.usuRole === "profesor" ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRouteProfessor;
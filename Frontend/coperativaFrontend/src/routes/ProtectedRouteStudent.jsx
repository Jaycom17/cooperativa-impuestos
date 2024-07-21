import { StudentContext } from "../context/StuContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRouteStudent () {
  const { student, loading } = useContext(StudentContext);

  if (loading) return <h1 className="flex items-center justify-center bg-background min-h-screen h-full text-unicoop text-3xl font-bold w-full">Un momento por favor...</h1>;

  return student ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteStudent;
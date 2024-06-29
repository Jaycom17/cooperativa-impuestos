import { StudentContext } from "../context/StuContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRouteStudent () {
  const { student, loading } = useContext(StudentContext);

  if (loading) return <h1>Loading...</h1>;

  return student ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteStudent;
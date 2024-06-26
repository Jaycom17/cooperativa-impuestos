import { RoomContext } from "../context/StudentContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";


function ProtectedRouteStudent () {
  const { currentRoom, loading } = useContext(RoomContext);

  if (loading) return <h1>Loading...</h1>;

  return currentRoom ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRouteStudent;
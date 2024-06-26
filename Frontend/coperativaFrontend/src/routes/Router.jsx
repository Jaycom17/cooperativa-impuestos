import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainAdminPage from "../pages/MainAdminPage/MainAdminPage";
import Room from "../components/Room/Room";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import MainStudent from "../pages/MainStudent/MainStudent";
import ESFpatrimonioForm from "../pages/ESFpatrimonio/Form/ESFpatrimonioForm";
import CreateProfessor from "../pages/CreateProfessor/CreateProfessor";
import MiddlewareStudent from "../pages/MiddlewareStudent/MiddlewareStudent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import { RoomProvider } from "../context/StudentContext";

import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteProfessor from "./ProtectedRouteProfessor";
import ProtectedRouteStudent from "./ProtectedRouteStudent";

function Router() {
  return (
    <AuthProvider>
      <RoomProvider>
      <BrowserRouter id="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/room" element={<Room />} />
          
          <Route element={<ProtectedRouteStudent />}>
            <Route path="/student" element={<MainStudent />} />
            <Route path="/middlewarestudent" element={<MiddlewareStudent />} />
          </Route>

          <Route element={<ProtectedRouteAdmin />}>
            <Route path="/admin" element={<MainAdminPage />} />
            <Route path="/createprofessor" element={<CreateProfessor />} />
          </Route>

          <Route element={<ProtectedRouteProfessor />}>
            <Route path="/professor" element={<TeacherPage />} />
          </Route>
          <Route path="/esfpatrimonioform" element={<ESFpatrimonioForm />} />
        </Routes>
      </BrowserRouter>
      </RoomProvider>
    </AuthProvider>
  );
}

export default Router;

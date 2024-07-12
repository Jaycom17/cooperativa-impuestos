import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainAdminPage from "../pages/MainAdminPage/MainAdminPage";
import Room from "../components/Room/Room";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import CreateRoom from "../pages/CreateRoom/CreateRoom";
import MainStudent from "../pages/MainStudent/MainStudent";
import ESFpatrimonioForm from "../pages/ESFpatrimonio/Form/ESFpatrimonioForm";
import ActivosFijosForm from "../pages/ActivosFijos/Form/ActivosFijosForm";
import CreateProfessor from "../pages/CreateProfessor/CreateProfessor";
import MiddlewareStudent from "../pages/MiddlewareStudent/MiddlewareStudent";
import RoomReport from "../pages/RoomReport/RoomReport";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import { RoomProvider } from "../context/RoomContext";
import { StudentProvider } from "../context/StuContext";

import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteProfessor from "./ProtectedRouteProfessor";
import ProtectedRouteStudent from "./ProtectedRouteStudent";

function Router() {
  return (
    <AuthProvider>
      <RoomProvider>
        <StudentProvider>
          <BrowserRouter id="App">
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/room" element={<Room />} />

              <Route
                  path="/middlewarestudent"
                  element={<MiddlewareStudent />}
                />

              <Route element={<ProtectedRouteStudent />}>
                <Route path="/student" element={<MainStudent />} />
              </Route>

              <Route element={<ProtectedRouteAdmin />}>
                <Route path="/admin" element={<MainAdminPage />} />
                <Route path="/createprofessor" element={<CreateProfessor />} />
              </Route>

              <Route element={<ProtectedRouteProfessor />}>
                <Route path="/professor" element={<TeacherPage />} />
                <Route path="/createroom" element={<CreateRoom />} />
                <Route path="/roomreport/:id" element={<RoomReport />} />
              </Route>
              <Route path="/esfpatrimonioform" element={<ESFpatrimonioForm />}/>
              <Route path="/activosfijos" element={<ActivosFijosForm />}/>
            </Routes>
          </BrowserRouter>
        </StudentProvider>
      </RoomProvider>
    </AuthProvider>
  );
}

export default Router;

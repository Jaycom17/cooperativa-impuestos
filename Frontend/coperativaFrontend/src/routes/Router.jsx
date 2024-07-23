import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainAdminPage from "../pages/MainAdminPage/MainAdminPage";
import Room from "../components/Room/Room";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import CreateRoom from "../pages/CreateRoom/CreateRoom";
import MainStudent from "../pages/MainStudent/MainStudent";
import ESFpatrimonioForm from "../pages/ESFpatrimonio/Form/ESFpatrimonioForm";
import ActivosFijosForm from "../pages/ActivosFijos/Form/ActivosFijosForm";
import From110Form from "../pages/Form110/Form/Form110Form";
import DetalleReng from "../pages/DetalleRenglones/Form/DetalleRengForm";
import CreateProfessor from "../pages/CreateProfessor/CreateProfessor";
import MiddlewareStudent from "../pages/MiddlewareStudent/MiddlewareStudent";
import RoomReport from "../pages/RoomReport/RoomReport";
import CaratulaForm from "../pages/Caratula/Form/Caratula";
import IngresosFacturacionForm from "../pages/IngresosFacturacion/Form/IngresosFacturacionForm";
import ImpuestoDiferidoForm from "../pages/ImpuestoDiferido/Form/ImpuestoDiferidoForm";
import ResetPasswordTeacher from "../pages/ResetPassword/ResetPasswordTeacher";
import UpdateInfoAdmin from "../pages/UpdateInfoAdmin/UpdateInfoAdmin";
import RentaLiquidaForm from "../pages/RentaLiquida/Form/RentaLiquidaForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import { RoomProvider } from "../context/RoomContext";
import { StudentProvider } from "../context/StuContext";

import ProtectedRouteAdmin from "./ProtectedRouteAdmin";
import ProtectedRouteProfessor from "./ProtectedRouteProfessor";
import ProtectedRouteStudent from "./ProtectedRouteStudent";
import ResumenESFForm from "../pages/ResumenESF/Form/ResumenESFForm";

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
                <Route path="/updateinfoadmin" element={<UpdateInfoAdmin />} />
              </Route>

              <Route element={<ProtectedRouteProfessor />}>
                <Route path="/professor" element={<TeacherPage />} />
                <Route path="/createroom" element={<CreateRoom />} />
                <Route path="/roomreport/:roomID" element={<RoomReport />} />
                <Route path="/resetpasswordteacher" element={<ResetPasswordTeacher />} />
              </Route>
              <Route
                path="/esfpatrimonioform"
                element={<ESFpatrimonioForm />}
              />
              <Route path="/caratulaform" element={<CaratulaForm />} />
              <Route path="/ingrefactform" element={<IngresosFacturacionForm />}/>
              <Route path="/activosfijos" element={<ActivosFijosForm />}/>
              <Route path="/impuestodiferido" element={<ImpuestoDiferidoForm />}/>
              <Route path="/form110" element={<From110Form />}/>
              <Route path="/detalleReng" element={<DetalleReng />}/>
              <Route path="/rentaliquida" element={<RentaLiquidaForm />} />
              <Route path="/resumenesf" element={<ResumenESFForm />} />
            </Routes>
          </BrowserRouter>
        </StudentProvider>
      </RoomProvider>
    </AuthProvider>
  );
}

export default Router;

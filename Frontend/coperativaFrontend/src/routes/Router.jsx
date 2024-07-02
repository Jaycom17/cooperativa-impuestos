import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import MainAdminPage from "../pages/MainAdminPage/MainAdminPage";
import Room from "../components/Room/Room";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import MainStudent from "../pages/MainStudent/MainStudent";
import ESFpatrimonioForm from "../pages/ESFpatrimonio/Form/ESFpatrimonioForm";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <AuthProvider>
      <BrowserRouter id="App">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/room" element={<Room />} />
          <Route path="/teacher" element={<TeacherPage />} />
          <Route path="/admin" element={<MainAdminPage />} />
          <Route path="/student" element={<MainStudent />} />
          <Route element={<ProtectedRoute />}></Route>
          <Route path="/esfpatrimonioform" element={<ESFpatrimonioForm />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;

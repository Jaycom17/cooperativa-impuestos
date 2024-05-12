import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ItemLista from "../components/ItemLista/ItemLista";
import ItemListaTW from "../components/ItemLista/ItemListaTW";
import ListaItems from "../pages/ListaItems/ListaItems";
import Navbar from "../components/Navbar/Navbar";
import NavbarTW from "../components/Navbar/NavbarTW";
import Sala from "../components/Sala/Sala";
import TeacherPage from "../pages/TeacherPage/TeacherPage";
import LoginPageTW from "../pages/LoginPage/LoginPageTW";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function Router() {
  return (
    <AuthProvider>
      <BrowserRouter id="App">
        <Routes>
          <Route path="/login" element={<LoginPageTW />} />
          <Route path="/" element={<MainPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/sala" element={<Sala />} />
            <Route path="/teacher" element={<TeacherPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default Router;

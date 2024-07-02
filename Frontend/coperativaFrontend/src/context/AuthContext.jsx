import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { login, profile, logout } from "../services/login.service";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loginError, setLoginError] = useState(null);

    useEffect(() => {
        if (loginError) {
          const timer = setTimeout(() => {
            setLoginError(null);
          }, 5000);
          return () => clearTimeout(timer);
        }
      }, [loginError]);
    

    useEffect(() => {
        const checkLogin = async () => {      
            try {
              const res = await profile();

              if (!res.data) return;

              setUser(res.data);
              setLoading(false);
            } catch (error) {
              setLoading(false);
            }
          };
          checkLogin();
    }, []);

    const singin = async (userLogin) => {
        try {
            const res = await login(userLogin);
            setUser(res.data);
            setLoginError(null);
          } catch (error) {
            console.log(error);
            setLoginError("Usuario o contraseña incorrectos")
          }
    }

    const singout = () => {
        const result = logout();

        if (!result) {
            return false;
        }

        setUser(null);
        setLoading(false);

        return true;
    }


    return (
        <AuthContext.Provider value={{singin, user, loading, singout, loginError}}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
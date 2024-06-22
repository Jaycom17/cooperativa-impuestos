import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { login, profile, logout } from "../services/login.service";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        profile().then((result) => {
            localStorage.setItem('user', JSON.stringify(result));
            setUser(result);
        }).catch(() => {
            setUser(null);
        });
    }, []);

    const singin = async (userLogin) => {
        login(userLogin).then((result) => {
            if (!result) {
                return false;
            }

            localStorage.setItem('user', JSON.stringify(result));

            if (result.usuRole === "admin") {
                navigate("/admin");
                return;
              }
  
              navigate("/pofessor");
        }).catch(() => {
            return false;
        });
    }

    const singout = () => {
        const result = logout(user);

        if (!result) {
            return false;
        }

        setUser(null);
        localStorage.removeItem('user');

        return true;
    }

    const validateUser = () => {
        console.log(localStorage.getItem("user"))
        return JSON.parse(localStorage.getItem("user")) !== null;
    }


    return (
        <AuthContext.Provider value={{singin, user, singout, validateUser}}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
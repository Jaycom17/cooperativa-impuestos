import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { studentProfile, logoutStudent } from "../services/login.service";
import { createStudent, searchStudent } from "../services/student.service";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [studentError, setStudentError] = useState(null);

  useEffect(() => {
    if (studentError) {
      const timer = setTimeout(() => {
        setStudentError(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [studentError]);

  useEffect(() => {
    const checkStudent = async () => {
      try {
        const res = await studentProfile();

        if (!res.data) return;

        setStudent(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    checkStudent();
  }, []);

  const checkStudent = async (student) => {
    try {
      const roomID = JSON.parse(localStorage.getItem("room")).roomID;

      const res = await createStudent({ ...student, roomID });

      setStudent(res.data);
      setStudentError(null);
    } catch (error) {
      console.log(error);
      setStudentError("Error al crear el estudiante");
    }
  };

  const sStudent = async (stuName) => {
    try {
      const roomID = JSON.parse(localStorage.getItem("room")).roomID;

      const res = await searchStudent(stuName, roomID);

      console.log(res)

      setStudent(res.data);
      setStudentError(null);
    } catch (error) {
      setStudentError("Estudiante no encontrado");
    }
  };

  const logout = () => {
    const result = logoutStudent();

    if (!result) {
      return false;
    }

    setStudent(null);
    setLoading(false);

    return true;
  };

  return (
    <StudentContext.Provider
      value={{ checkStudent, student, loading, studentError, logout, sStudent }}
    >
      {children}
    </StudentContext.Provider>
  );
};

StudentProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

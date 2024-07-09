import { useEffect, useState } from "react";
import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import { useParams } from "react-router-dom";
import { getStudentsByRoom } from "../../services/student.service";

function RoomReport() {
  const { roomID } = useParams();
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [studentsCopy, setStudentsCopy] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await getStudentsByRoom(roomID);
        const sortedData = data.sort((a, b) =>
          a.stuName.localeCompare(b.stuName)
        );
        setStudents(sortedData);
        setStudentsCopy(sortedData);
      } catch (error) {
        console.error("Error al obtener los estudiantes de la sala:", error);
      }
    };
    fetchStudents();
  }, [roomID]);

  const searchStudent = (e) => {
    const searchValue = e.target.value;
    const filteredStudents = studentsCopy.filter((student) =>
      student.stuName.toLowerCase().includes(searchValue.toLowerCase())
    );
    setStudents(filteredStudents);
  }

  return (
    <>
      <TeacherNavbar />
      <main className="flex">
        <aside className="w-32 h-screen bg-buttons-login flex flex-col gap-1 lg:w-40">
          <div className="w-full p-1">
            <input onChange={searchStudent} placeholder="Busca estudiante" type="text" className="w-full rounded p-1" />
          </div>
          {students.map((student) => (
              <button key={student.stuID}
                onClick={() => setSelectedStudent(student)}
                className={`hover:bg-[#808080] w-full text-white ${selectedStudent?.stuID === student.stuID ? "bg-[#808080]" : "bg-buttons-login"}`}
              >{student.stuName}</button>
          ))}
        </aside>
      </main>
    </>
  );
}

export default RoomReport;

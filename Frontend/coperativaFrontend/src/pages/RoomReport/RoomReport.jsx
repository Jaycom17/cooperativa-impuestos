import { useEffect, useState } from "react";
import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import { useParams, Link } from "react-router-dom";
import { getStudentsByRoom } from "../../services/student.service";

function RoomReport() {
  const { roomID } = useParams();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await getStudentsByRoom(roomID);
        const sortedData = data.sort((a, b) =>
          a.stuName.localeCompare(b.stuName)
        );
        setStudents(sortedData);
      } catch (error) {
        console.error("Error al obtener los estudiantes de la sala:", error);
      }
    };
    fetchStudents();
  }, [roomID]);
  return (
    <>
      <TeacherNavbar />
      <main className="flex">
        <aside className="w-32 h-screen bg-buttons-login flex flex-col gap-1">
          <input type="text" className="w-full" />
          {students.map((student) => (
            <div className="w-full" key={student.stuID}>
              <Link
                className="text-center text-xl"
                to={`/roomstudentreport/${roomID}/${student.stuID}`}
              >
                <h1 className="hover:underline hover:bg-[#808080]">
                  {student.stuName}
                </h1>
              </Link>
            </div>
          ))}
        </aside>
      </main>
      {/**
     * <section className="p-4 flex gap-1 flex-col w-full items-start">
    {students.map((student) => (
        <div className="bg-red-200 w-1/6" key={student.stuID} >
          <Link className="text-center text-xl hover:underline" to={`/roomstudentreport/${roomID}/${student.stuID}`}>
            <h1>{student.stuName}</h1>
        </Link>
        </div>
    ))}
    </section>
     */}
    </>
  );
}

export default RoomReport;

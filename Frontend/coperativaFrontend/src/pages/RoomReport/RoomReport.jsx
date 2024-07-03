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
                setStudents(data);
            } catch (error) {
                console.error('Error al obtener los estudiantes de la sala:', error);
            }
        }
        fetchStudents();
    }, [roomID]);
  return (
    <>
    <TeacherNavbar/>
    <section className="p-4 flex gap-1 flex-col w-full items-center">
    {students.map((student) => (
        <div className="bg-red-200 w-1/3" key={student.stuID} >
          <Link className="text-center text-xl hover:underline" to={`/roomstudentreport/${roomID}/${student.stuID}`}>
            <h1>{student.stuName}</h1>
        </Link>
        </div>
    ))}
    </section>
    </>
  );
}

export default RoomReport;
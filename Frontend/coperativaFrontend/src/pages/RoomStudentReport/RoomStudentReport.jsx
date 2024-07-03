import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import { useParams } from "react-router-dom";

function RoomStudentReport() {
    const { roomID, stuID } = useParams();

  return (
    <>
    <TeacherNavbar/>
    <h2>{roomID}</h2>
    <h2>{stuID}</h2>
    </>
  );
}

export default RoomStudentReport;
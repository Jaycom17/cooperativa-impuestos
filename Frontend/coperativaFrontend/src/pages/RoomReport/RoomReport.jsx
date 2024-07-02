import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import { useParams } from "react-router-dom";

function RoomReport() {
    const { id } = useParams();
  return (
    <>
    <TeacherNavbar professorName="alguien" />
        <h2>{id}</h2>
    </>
  );
}

export default RoomReport;
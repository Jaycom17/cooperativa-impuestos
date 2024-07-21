import TeacherNavbar from "../../components/TeacherNavBar/TeacherNavbar";
import AsideProf from "../../components/AsideProf/AsideProf";
import { useParams } from "react-router-dom";
import { useState } from "react";

function RoomReport() {
  const { roomID } = useParams();
  const [form,setForm] = useState("");
  const [data, setData] = useState({});

  const toNav = (formTo, stuID) =>{
    setForm(formTo)
    console.log(formTo, stuID)
  }

  return (
    <>
      <TeacherNavbar />
      <main className="flex">
        <AsideProf toNav={toNav} form={form}/>
      </main>
    </>
  );
}

export default RoomReport;

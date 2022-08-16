import * as api from "../api"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {Students} from "../Types/types"
import Header from "./Header"


const TeacherPage = () => {
 const [students, setStudents] = useState<Students[]>([]);
 useEffect(() => {
  api.getStudents().then((students)=> setStudents([...students]))
 }, [])

return(
  <section>
    <Header />
    <section >
      {students.map((student, index) => (
        <section key={index} className="teacherPage">
          <img src={student.avatarURL}/>
          {student.username}
        </section>
      ))}
    </section>
  </section>  
  )
}

export default TeacherPage;

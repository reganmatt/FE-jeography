import * as api from "../api"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {Students} from "../Types/types"
//import "../css/Results.scss";
import Header from "./Header"


const TeacherPage = () => {
  const [students, setStudents] = useState<Students[]>([]);
  useEffect(() => {
   api.getStudents().then((students)=> setStudents([...students]))
  }, [])
 
 return(
   <section className="teacher-page">
     <Header />
     <section className="teacher-welcome">
       <h1>Hello there, teacher!</h1>
       <p>Select a student to view their profile and leave them</p>
     </section>
     <section className="teacherpage-students">      
       {students.map((student, index) => (
         <div key={index} className="teacherpage-item">
           <img src={student.avatarURL} alt="studentAvatar" className="avatar" width="100" height="100" />          
           <h5 className="box-caption"><Link to="/:student">{student.username}</Link></h5>
         </div>
       ))}
     </section>     
       <Link to="/">
         <Button size="small" variant="contained">
           Take me Home
         </Button>
       </Link>    
   </section>  
   )
 }

export default TeacherPage;

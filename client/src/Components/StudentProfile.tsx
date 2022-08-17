import {Button} from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Students } from "../Types/types";
import { useParams, Link } from "react-router-dom";
//import '../cssnkQuiz.scss';


const StudentProfile = () => {   
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<Students[]>([]);
  let nickname = useParams().nickname;

  useEffect(() => {
    if (nickname !== undefined) {
      api.getStudentByUsername(nickname).then((student) => {
        console.log(student, "in the student")
        setStudent(student);
        setIsLoading(false);
      });
    }
    
  }, [nickname]);

  
    return(
      <section >
        <section>
          <h1>Hello there, {nickname}!</h1>          
        </section>
        
        <section >                
          {student.map((student, index) => ( 
          <div key={index} className="student-item">           
            <h5 className="box-caption"><Link to={`/students/${student.username}`}>{student.username}</Link></h5>
            <p>You've collected {student.userPoints} Jeo points</p>
          </div>
        ))}
        </section>
        <section>
          <p>Jeo Ranch</p>
          <p>Select a Jeo badge to replace your avatar!</p>
          {student[0].jeoRanch.map((img, index) => (            
            <img src={img} alt="studentAvatar" className="avatar" width="100" height="100" />      
          ))}
        </section>     
          <Link to="/">
            <Button size="small" variant="contained">
              Take a quiz
            </Button>
          </Link>    
      </section>  
    )  
};

export default StudentProfile;
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Students } from "../Types/types";
import { useParams, Link } from "react-router-dom";
import StudentComments from "./StudentComments";

const StudentProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<Students[]>([]);
  const [name, setName] = useState("");

  let nickname = useParams().nickname;

  useEffect(() => {
    if (nickname !== undefined) {
      api.getStudentByUsername(nickname).then((student) => {
        setStudent(student);
        setName(student[0].username);
        setIsLoading(false);
      });
    }
  }, [nickname]);

  if (isLoading === true) {
    return <p>Loading ...</p>;
  } else {
    return (
      <section className="teacher-student">
        <section className="mario1" >
          <h1 >{name.toUpperCase()}'s PROFILE</h1>
        </section>
        <section className="mario1">
          {student.map((student, index) => (
            <div key={index} className="student-item">
              <p>
                {student.userPoints} Jeo points
              </p>
            </div>
          ))}
        </section>
        <section className="mario1">
          <p className="mario2">Jeos collected : </p>
          {student[0].jeoRanch.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt="studentAvatar"
              className="mario2"
              width="100"
              height="100"
            />
          ))}
        </section>
        <div className="mario1">

        <Link to="/teacher">
          <Button size="small" variant="contained">
            See Teacher's Page
          </Button>
        </Link>
        </div>
        <StudentComments nickname={name} />
      </section>
    );
  }
};

export default StudentProfile;

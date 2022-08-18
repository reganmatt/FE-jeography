import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import * as api from "../api";
import { Students } from "../Types/types";
import { useParams, Link } from "react-router-dom";
import StudentComments from "./StudentComments";
//import '../cssnkQuiz.scss';

const StudentProfile = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [student, setStudent] = useState<Students[]>([]);
  const [name, setName] = useState("");
  let nickname = useParams().nickname;

  useEffect(() => {
    if (nickname !== undefined) {
      api.getStudentByUsername(nickname).then((student) => {
        console.log(student, "in the student");
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
      <section>
        <section>
          <h1>{name.toUpperCase()}'s PROFILE</h1>
        </section>
        <section>
          {student.map((student, index) => (
            <div key={index} className="student-item">
              <p>
                {name} collected {student.userPoints} Jeo points
              </p>
            </div>
          ))}
        </section>
        <section>
          <p>List of avatars {name} collected : </p>
          {student[0].jeoRanch.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="studentAvatar"
              className="avatar"
              width="100"
              height="100"
            />
          ))}
        </section>

        <Link to="/teacher">
          <Button size="small" variant="contained">
            See Teacher's Page
          </Button>
        </Link>
        <StudentComments nickname={name} />
      </section>
    );
  }
};

export default StudentProfile;

import * as api from "../api"
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";
import {Students} from "../Types/types"



const TeacherPage = () => {
 const [students, setStudents] = useState<Students[]>([]);
 useEffect(() => {
  api.getStudents()
 }, [])

return(<p>
  Hello I am here!
</p>)

}

export default TeacherPage;

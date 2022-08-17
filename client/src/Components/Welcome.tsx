import {useEffect, useState} from 'react'
import axios from 'axios'
import { useAuth0, User } from "@auth0/auth0-react";
import {useNavigate, Link} from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../context/User";

// type JeographyUser = User&{type: string, avatarURL: string[], jeoRanch:string[], userPoints: number, userStatus: string}

// const { profile, setProfile } = useContext(UserContext);

const Welcome = () => {
  // let userProps = { type:'student',avatarURL:['https://i.imgur.com/T5IjKoI.png'],jeoRanch:['https://i.imgur.com/oxYZ7c2.png', 'https://i.imgur.com/T5IjKoI.png'],userPoints:0,userStatus:'Learning geography with jeography!'}
  
  // const {isAuthenticated, user} = useAuth0()
  // const [profile, setProfile] = useState<JeographyUser>()

  
  // useEffect(() => {
   
  //   if (isAuthenticated && user !== undefined) {
  //     const newUserObj= {...user, ...userProps }
      
  //     setProfile(newUserObj)
  //   }
  // }, [isAuthenticated])

  // useEffect(() => {

  //   if (profile !== undefined) {
  //     if (user !== undefined && !profile.userPoints) {
  //       axios
  //           .patch(`https://jeography.herokuapp.com/student/${user.nickname}/profile`)
  //           .then((response) => {
  //           })
  //     } 
  //   }
  // }, [])
const navigate = useNavigate()
  function handleClick() {
   return navigate('/profile')
  }

  return (
    <div>
        Welcome!
        <button type='button' onClick={handleClick}>Open the Jeo Ranch!</button>
    </div>
  )
}

export default Welcome
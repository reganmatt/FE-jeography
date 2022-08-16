import {useEffect, useState} from 'react'
import axios from 'axios'
import { useAuth0, User } from "@auth0/auth0-react";
import { parseJsonSourceFileConfigFileContent } from 'typescript';
type JeographyUser = User&{type: string, avatarURL: string[], jeoRanch:string[], userPoints: number, userStatus: string}

const Profile = () => {
  let userProps = { type:'student',avatarURL:['https://i.imgur.com/T5IjKoI.png'],jeoRanch:['https://i.imgur.com/oxYZ7c2.png', 'https://i.imgur.com/T5IjKoI.png'],userPoints:0,userStatus:'Learning geography with jeography!'}
  
  const {isAuthenticated, user} = useAuth0()
  const [profile, setProfile] = useState<JeographyUser>()
  console.log(profile)
  
  useEffect(() => {
    console.log('in authenticate useEffect')
    if (isAuthenticated && user !== undefined) {
      const newUserObj= {...user, ...userProps }
      setProfile(newUserObj)
    }
  }, [isAuthenticated])

  useEffect(() => {

    console.log(profile)
    if (profile !== undefined) {
      if (user !== undefined && !profile.userPoints) {
        axios
            .patch(`https://jeography.herokuapp.com/student/${user.nickname}/profile`)
            .then((response) => {
            })
      } 
    }
  }, [])

  return (
    <div>

    </div>
  )
}

export default Profile
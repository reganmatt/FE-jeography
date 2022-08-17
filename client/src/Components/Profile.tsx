import {useEffect, useState} from 'react'
import axios from 'axios'
import { useAuth0, User } from "@auth0/auth0-react";
import '../css/Profile.scss'
import { Comments } from "../Types/types";
import * as api from "../api";

type JeographyUser = User&{type: string, avatarURL: string[], jeoRanch:string[], userPoints: number, userStatus: string}

function capitalizeFirstLetter(str:string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Profile = () => {
  let userProps = { type:'student',avatarURL:['https://i.imgur.com/T5IjKoI.png'],jeoRanch:['https://i.imgur.com/oxYZ7c2.png', 'https://i.imgur.com/T5IjKoI.png'],userPoints:0,userStatus:'Learning geography with jeography!'}
  
  const {isAuthenticated, user} = useAuth0()
  const [profile, setProfile] = useState<JeographyUser>()

  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState<Comments[]>([]);

  
  useEffect(() => {

    if (isAuthenticated && user !== undefined) {
      const newUserObj= {...user, ...userProps }
      setProfile(newUserObj)
    }
  }, [isAuthenticated])

  useEffect(() => {
    if (profile !== undefined && profile.nickname !== undefined){
      api.getComments(profile.nickname).then((comments) => {
        setComments(comments);
        setIsLoading(false);
      });
    }
  }, [profile]);

  console.log(comments[0].body, '<<<<comments')

  return (
    <div>
      <section className='profile-greeting'>
      <p className='greeting'>Hello there, </p><p className='username'> {profile?.nickname}</p>
      </section>
      <section className='jeo-points'>
<p className='default-font'>So far you have collected </p><p className='user-jeo-points'> {profile?.userPoints} </p><p className='default-font'> Jeo points!</p>
      </section>
      <section className='profile-container'>

      <section className='jeo-ranch'><p className='jeo-ranch-title'>Your Jeo Ranch</p>
      <section className='jeo-container'>
{profile ? profile.jeoRanch.map((jeo)=>{
  return (<img src={jeo} alt={profile.nickname} className='jeo-img'></img>)
}) : null}
      </section>
      </section>
      <section className='teacher-comments'><p className='comments-title'>Notes from your teacher:</p>
      <section>
      {comments ? comments.map((comment)=>{
  return (<p>on {comment.created_at} your teacher said: {comment.body}</p>)
}) : null}
      </section>
      </section>
</section>
    </div>
  )
}

export default Profile
import '../css/Header.scss';
import AuthNav from './AuthNav';
import {useAuth0} from '@auth0/auth0-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header: React.FC = () => {
    return  (
      <div className="header">

       <img src="https://i.imgur.com/1XIaWws.png" alt="jeo-banner" className="jeo-banner"></img>  
       <section className='auth-button'>
       <AuthNav />
       </section>
      </div>
    );
  }


  export default Header

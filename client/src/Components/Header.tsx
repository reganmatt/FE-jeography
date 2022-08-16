import '../css/Header.scss';
import AuthNav from './AuthNav';
import {useAuth0} from '@auth0/auth0-react';

const Header: React.FC = () => {
    return  (
      <div className="header">
       <img src="https://i.imgur.com/Xc5ByTY.png" alt="jeo-logo" className="jeo-logo"></img>
       <img src="https://i.imgur.com/HuSyK8h.png" alt="jeo-banner" className="jeo-banner"></img>  
       <AuthNav />
      </div>
    );
  }


  export default Header

import '../css/Header.scss';
import AuthNav from './AuthNav';
import { Link } from "react-router-dom";


const Header: React.FC = () => {
    return  (
      <div className="header">
<Link to='/'>
       <img src="https://i.imgur.com/1XIaWws.png" alt="jeo-banner" className="jeo-banner"></img>  
</Link>
  
       <section className='auth-button'>
       <AuthNav />
       </section>
      </div>
    );
  }


  export default Header

import {Button} from '@mui/material';
import { Link } from "react-router-dom";
import Header from './Header';

const Home = () => {
    return (
      <div className="HomePage">
        <Header/>
        <section>
        <Button variant="outlined" size='large'>Interactive Map</Button>
        <Link to="/around-the-world">
        <Button variant="outlined" size='large'>Around The Word</Button>
        </Link>
        </section>
      </div>
    );
  }


  export default Home
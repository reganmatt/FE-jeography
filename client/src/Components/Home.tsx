import {Button} from '@mui/material';
import React from 'react';
import Header from './Header';

const Home = () => {
    return (
      <div className="HomePage">
        <Header/>
        <Button variant="outlined" size='large'>Interactive Map</Button>
        <Button variant="outlined" size='large'>Aroun The Word</Button>
      </div>
    );
  }


  export default Home
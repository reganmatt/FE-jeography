import React from 'react';
import Header from './Components/Header'

import './css/App.scss';

const App: React.FC = () => {
  console.log(process.env)
  return (
    <div className="App">
     <Header/>
    </div>
  );
}

export default App;

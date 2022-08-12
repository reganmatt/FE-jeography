import '../css/Header.scss';


const Header: React.FC = () => {
    return (
      <div className="header">
       <img src="https://i.imgur.com/Xc5ByTY.png" alt="jeo-logo" className="jeo-logo"></img>
       <img src="https://i.imgur.com/HuSyK8h.png" alt="jeo-banner" className="jeo-banner"></img>  
       <button>Auth0</button>
      </div>
    );
  }


  export default Header
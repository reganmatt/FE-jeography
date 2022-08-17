import { Link } from "react-router-dom";
import '../css/StudentLanding.scss'

const SelectQuiz = () => {
    return (
      <div className="HomePage">
        <section className="page-title-container">
        <p className="page-title">Start collecting Jeos</p>
  
        </section>
        <p className="sub-title">Choose your quiz below!</p>
        <section className="maps-container">
          <section className="flex">
  
          <Link to="/england">
            <section className="map-and-title">
            <img
              src="https://i.imgur.com/PhD8Bdh.png"
              className="map-select"
              alt="England Map"
              />
              <p className="map-title">Take a quiz about England</p>
            </section>
          </Link>
          <Link to="/scotland">
            <img
              src="https://i.imgur.com/Zo2pdiF.png"
              className="map-select"
              alt="Scotland Map"
              />
              <p className="map-title">Take a quiz about Scotland</p>
          </Link>
          <Link to="/wales">
            <img
              src="https://i.imgur.com/4hccEws.png"
              className="map-select"
              alt="Wales Map"
              />
              <p className="map-title">Take a quiz about Wales</p>
          </Link>
              </section>
              <section className="flex">

          <Link to="/ireland">
            <img
              src="https://i.imgur.com/P6zorSE.png"
              className="map-select"
              alt="Ireland Map"
              />
            <p className="map-title">Take a quiz about Ireland</p>
          </Link>
          <Link to="/nIreland">
            <img
              src="https://i.imgur.com/7D14x2n.png"
              className="map-select"
              alt="Northern Ireland Map"
              />
            <p className="map-title">Take a quiz about Northern Ireland</p>
          </Link>
          <Link to="/around-the-world">
            <img
              src="https://i.imgur.com/BxQkIjp.png"
              className="map-select"
              alt="World Map"
              />
            <p className="map-title">Take a quiz about the whole world</p>
          </Link>
              </section>
        </section>
        <section className="help-button-container">
          <button className="help-button">Ask for help</button>
  
            </section>
      </div>
    );
  };
  

export default SelectQuiz;

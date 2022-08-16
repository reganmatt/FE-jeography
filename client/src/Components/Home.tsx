import { Button } from "@mui/material";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  return (
    <div className="HomePage">
      <Button variant="outlined" size="large">
        Interactive Map
      </Button>
      <Button variant="outlined" size="large">
        Aroun The Word
      </Button>
    </div>
  );
};

export default Home;

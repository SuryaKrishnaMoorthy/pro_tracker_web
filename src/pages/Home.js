import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      Home: Welcome {`${location.state.first_name} ${location.state.last_name}`}
    </div>
  );
};

export default Home;

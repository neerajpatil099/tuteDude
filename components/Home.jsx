import React from "react";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import { Link } from "react-router-dom";
import '../src/App.css'

const Home = () => {
  return (<>
  <h1>TuteDude Assigments</h1>
    <div className="home">
    <Link to="/section1">
     <a><div className="section"> section1</div></a>
    </Link>
    <Link to="/section2">
     <a> <div className="section">section2</div></a>
    </Link>
    </div>
    </>
  );
};

export default Home;

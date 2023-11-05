import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
// import { useNavigate } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <Header />    
        <Main />
      <Footer />    
    </div>
  );
}

export default Home;
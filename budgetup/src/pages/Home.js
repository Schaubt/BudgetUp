import NavBar from '../components/navBar.js';
import React,{useState} from "react";
import Login from '../components/login-component';
import "../styles/home.css";


function Home() {

  return (
    <>
      <div className="document">
      <div claaName="navbar"><NavBar /></div>

        <div className="content">
        <Login />
        <img
              src="https://images.pexels.com/photos/210600/pexels-photo-210600.jpeg?cs=srgb&dl=pexels-pixabay-210600.jpg&fm=jpg"
              alt="Your Company"
            />
        </div>
      </div>
    </>
  );
}




export default Home;
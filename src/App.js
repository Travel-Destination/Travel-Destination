// import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
// import Home from "./components/home/Home";
// //import toursData from "/home/mereen/Travel-Destination/travel/Travel-Destination/src/data/db";
// const toursData = require("./data/db.json");

// function App() {
//   return (
//     <>
//     <Header/>
//     <Home toursData = {toursData}/>
//     <Footer/>
    
//     </>

  
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/home/Home.js';
//import TourDetails from './components/TourDetails/TourDetails';

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route path="/city/:id" element={<TourDetails />} /> */}
    </Routes>
    </>
  );
}

export default App;
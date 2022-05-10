import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Tours from "./components/tours/Tours";

const toursData = require("./data/db.json");

function App() {
  return (
    <>
    {
      toursData.map(Tdata => {
        return (
          <Tours id={Tdata.id} name={Tdata.name} info={Tdata.info} price={Tdata.price} image={Tdata.image}/>
        )
      })
    }
    

    <Footer/>
    <Header/>
    <Home/>
    </>

  
  );
}

export default App;

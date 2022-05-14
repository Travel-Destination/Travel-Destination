import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";
import toursData from "/home/ahmad/Travel-Destination/travel/src/data/db.json";


// const toursData = require("./data/db.json");



function Home (props){

    return(
        <>
        {
      toursData.map(Tdata => {
        return (
          <Tours id={Tdata.id} name={Tdata.name} info={Tdata.info} price={Tdata.price} image={Tdata.image}/>
        )
      })
    }
    

     <Header></Header>
     <Tours></Tours>
     <Footer></Footer>
     </>
    );
}
export default Home;
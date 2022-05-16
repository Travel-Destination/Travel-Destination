// import Tours from "../tours/Tours";
// //import toursData from "../../data/db.json"
// //const toursData = require ("../../data/db.json")
// import toursData from "/home/mereen/Travel-Destination/src/data/db.json";

// function Home (){

//     return(
//         <>
        

//         {
//         toursData.map(Tdata => {
//         return (
//           <Tours id={Tdata.id} name={Tdata.name} info={Tdata.info} price={Tdata.price} image={Tdata.image}/>
//         )
//       })
//     }
    

     
     
//      </>
//     );
// }
// export default Home;
import Header from '../header/Header'
import Tours from '../tours/Tours'
import Footer from '../footer/Footer'
import cardData from '../../data/db.json';



const Home = () => {
  console.log(cardData);
  return (
    <>
      <Header title='Travel Destination' />
      {
        cardData.map(card => (
          <Tours name={card.name} image={card.image} id={card.id} />
        ))
      }
      <Footer url='www.facebook.com' url2='www.Instagram.com' url3='www.LinkedIn.com' name='Bahaa/Esraa' />
    </>
  );
}

export default Home;
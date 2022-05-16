
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
      <Footer url='www.facebook.com' url2='www.Instagram.com' url3='www.LinkedIn.com' name='Ahmad/Mereen' />
    </>
  );
}

export default Home;
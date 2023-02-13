import Announcement from '../components/home/Announcement';
import Categories from '../components/home/Categories';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import Slider from '../components/home/Slider';
import ProductsList from '../components/home/ProductsList';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const Home = ({ toggle, toggleClick, handleClick }) => {
  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <main>
        <Search />
        <Slider />
        <Categories />
        <ProductsList />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default Home;

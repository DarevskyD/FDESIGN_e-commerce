import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import Categories from '../components/home/Categories';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const CategoryPage = ({ toggle, toggleClick, handleClick }) => {
  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <main>
        <Search />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;

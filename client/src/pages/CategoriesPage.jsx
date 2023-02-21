import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import Search from '../components/home/Search';
import Categories from '../components/home/Categories';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const CategoriesPage = () => {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <Search />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default CategoriesPage;

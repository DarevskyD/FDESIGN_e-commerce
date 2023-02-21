import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import LogIn from '../components/register/LogIn';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const LoginPage = ({ handleClick }) => {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <LogIn />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;

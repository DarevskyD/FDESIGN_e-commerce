import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import SignIn from '../components/register/SignIn';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const SignInPage = ({ toggle, toggleClick, handleClick }) => {
  return (
    <>
      <Announcement />
      <Header toggle={toggle} toggleClick={toggleClick} handleClick={(e) => handleClick(e)} />
      <main>
        <SignIn />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;

import Announcement from '../components/home/Announcement';
import Header from '../components/home/Header';
import SignIn from '../components/register/SignIn';
import Newsletter from '../components/home/Newsletter';
import Footer from '../components/home/Footer';

const SignInPage = () => {
  return (
    <>
      <Announcement />
      <Header />
      <main>
        <SignIn />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default SignInPage;

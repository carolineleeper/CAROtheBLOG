import '../style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Nav />
      <div className="pageContainer">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  ) 
}

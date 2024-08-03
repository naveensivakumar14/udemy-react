import logo from './logo.svg';
import './App.css';
import './index.css';

//Importing react components for udemy
import Navbar from './components/Navbar'
import Categories from './components/Categories';
import Banner from './components/Banner';
import Recomend from './components/Recomend';
import Topics from './components/Topics';
import Popular from './components/Popular';
import Footer from './components/Footer';

function App() {
  return (
      <div>
          <Navbar></Navbar>
          <Categories></Categories>
          <Banner></Banner>
          <Recomend></Recomend>
          <Topics></Topics>
          <Popular></Popular>
          <Footer></Footer>
      </div>
  );
}

export default App;

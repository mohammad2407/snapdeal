import logo from './logo.svg';
import './App.css';
import { Nav1 } from './NavComponents/Nav1';
import { Home } from './Home/Home';
// import { NavCarousel } from './NavComponents/Carousels/NavCarousel';
import Footer from './Footer/Footer';
import Payment from './payment/Payment';
function App() {
  return (
    <div className="App">
      <Nav1 style={{zIndex:'10'}}/>
      {/* <Home />
      <Footer />
      <Payment /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { Nav1 } from './NavComponents/Nav1';
import { Home } from './Home/Home';
// import { NavCarousel } from './NavComponents/Carousels/NavCarousel';
import Footer from './Footer/Footer';
import Payment from './payment/Payment';
import { Mens } from './Product/Mens';
import { Route } from 'react-router';
import { Routing } from './Routes/Routing';
function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;

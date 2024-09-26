// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import RSVP from './Components/RSVP';
import Venues from './Components/Venues';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Venues />
      <RSVP/>
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

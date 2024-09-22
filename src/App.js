// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import RSVP from './Components/RSVP';
import Venues from './Components/Venues';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Venues />
      <RSVP/>
      <Footer/>
    </div>
  );
}

export default App;

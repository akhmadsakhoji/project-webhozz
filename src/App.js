import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import MyButton from './components/MyButton';
import Footer from './components/Footer';

function App() {
  const navHeading = "Navigation Bar";
  const navText = "Sosmed";

  const clicked = () =>{
    return alert("Button di Pencet");
  }


  return (
    <div className="App">
      <header className="App-header">
        <Navbar navText={navText} navHeading={navHeading}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>HALO CUY 🤪</p>
        <MyButton clicked={clicked}/>
        <Footer />
      </header>
    </div>
  );
}


export default App;

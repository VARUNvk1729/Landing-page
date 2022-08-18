
import './App.css';
import background1 from './assets/bag.jpg';
import bmw1 from './assets/bmw1.jpg';
import tiger1 from './assets/tiger1.jpg';
import First from './components/First.js'
import Slider from './components/Slider.js'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Banner from './components/Banner'
import logo from './assets/lgo.png'
const navBarLinks=[
  {url:"#",title:"Home"},
  {url:"#",title:"Services"},
  {url:"#",title:"About"}
];
function App() {
  return (

    <div className="App">
      <Navbar navBarLinks={navBarLinks} />
      <First imageSrc={background1} />
      <Slider 
      imageSrc={bmw1} 
      title={"BMW 1250 GSA"}  
      subtitle={ "The King of Adventure is returning in a new avatar"} 
      />
      <Slider 
      imageSrc={tiger1}
      title={"Triumph tiger"} 
      subtitle={ "A motorcycle that can sing on the streets of a city"}
      flipped={true}
      />
      <Banner/>
      <Footer imageSrc={logo}/>
    </div>
  );
}

export default App;

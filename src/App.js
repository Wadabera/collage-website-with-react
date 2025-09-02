
import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar';
import Programs from './Components/Programs/Programs';
import Testmonials from './Components/Testmonials/Testmonials';
import Title from './Components/Title/Title';
import Footer from './Components/Footer/Footer';
import Vidio from './Components/Vidio/Vidio';

function App() {
  const [playState, setplayState] = useState(false);
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Title subtitle='Our PROGRAM' title='What We Offer'/>
      <Programs />
      
      <About setplayState={setplayState} />
      <Title subtitle='Gallery' title='Campus Photo' />
      <Campus></Campus>
      <Title subtitle='Testmonials' title='What student says' />
      <Testmonials></Testmonials>
      <Title subtitle='Contact Us' title='Get n Touch' />
      <Contact></Contact>
      <Footer></Footer>
      <Vidio playState={playState} setplayState={setplayState}></Vidio>

        
   
      
      
      
      
    
      
    

    </div>
  );
}

export default App;

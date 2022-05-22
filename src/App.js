// import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js'
import Assignment from './Assignment.js'
import Section1 from './Section1.js';
import Section2 from './Section2.js';
import Section3 from './Section3.js';
import Section4 from './Section4.js';
import Section5 from './Section5.js';
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <Assignment/>
     <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;

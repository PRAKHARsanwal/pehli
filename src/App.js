import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
 
<Navbar title="Textor" about="About Us"/>
<div className="container my-3">
  <Textform heading="Enter your text for analyzing"/>
  </div>
 <About/>
    </>
  );
}

export default App;


import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import About from './pages/about/About'
import BecomeAHost from './pages/becomeahost/BecomeAHost'
import Pricing from './pages'
import HowItWorks from './pages/howitworks/HowItWorks'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
        
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/becomeahost' element = {<BecomeAHost />} />
        <Route path='/pricing' element = {<Pricing />} />
        <Route path='/howitworks' element = {<HowItWorks />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;

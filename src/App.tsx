import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Pricing from './pages/pricing/Pricing';
import BecomeAHost from './pages/becomeahost/BecomeAHost';
import HowItWorks from './pages/howitworks/HowItWorks';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/style1.css'
import './assets/css/style2.css'
import './assets/css/style3.css'

function App() {
  return (
    <main className="App">
      <Header />
    
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route path={"/becomeahost"} element={<BecomeAHost />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path={"/howitworks"} element={<HowItWorks />} />
        </Routes>
      
      <Footer />
    </main>
  );
}

export default App;

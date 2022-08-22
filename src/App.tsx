<<<<<<< HEAD
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AboutUs from './pages/about/AboutUs';
import Home from './pages/home/Home';
// import About from './pages/about/About';
import Pricing from './pages/pricing/Pricing';
import BecomeAHost from './pages/becomeahost/BecomeAHost';
import HowItWorks from './pages/howitworks/HowItWorks';
import Account from './pages/account/createAccount/Account';
import Login from './pages/account/login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/style1.css'
import './assets/css/style2.css'
import './assets/css/style3.css'
import UserSignup from './pages/account/usersignup/UserSignup';
import TeamSignup from './pages/account/teamsignup/TeamSignup';

function App() {
  return (
    <main className="App">
      <Header />
    
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/becomeahost' element={<BecomeAHost />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/howitworks' element={<HowItWorks />} />
          <Route path='/account' element={<Account />} />
          <Route path='/login' element={<Login />} />
          <Route path='/usersignup' element={<UserSignup />} />
          <Route path='/teamsignup' element={<TeamSignup />} />
        </Routes>
      <Footer />
    </main>
=======
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import About from './pages/about/About'
import BecomeAHost from './pages/becomeahost/BecomeAHost'
import Pricing from './pages/pricing/Pricing'
import HowItWorks from './pages/howitworks/HowItWorks'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './assets/css/damier.css'
import './assets/css/leke.css'
import './assets/css/sarah.css'

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
>>>>>>> origin/gabriel
  );
}

export default App;
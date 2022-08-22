import Footer from './website/components/footer/Footer';
import Header from './website/components/header/Header';
import AboutUs from './website/pages/about/AboutUs';
import Home from './website/pages/home/Home';
// import About from './pages/about/About';
import Pricing from './website/pages/pricing/Pricing';
import BecomeAHost from './website/pages/becomeahost/BecomeAHost';
import HowItWorks from './website/pages/howitworks/HowItWorks';
import Account from './website/pages/account/createAccount/Account';
import Login from './website/pages/account/login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './assets/css/style1.css'
import './assets/css/style2.css'
import './assets/css/style3.css'
// old
import './assets/css/damier.css'
import './assets/css/leke.css'
import './assets/css/sarah.css'
import UserSignup from './website/pages/account/usersignup/UserSignup';
import TeamSignup from './website/pages/account/teamsignup/TeamSignup';

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
  );
}

export default App;
import { FaEnvelope, FaMailBulk, FaSearch } from "react-icons/fa";
// import bgHome from '../../../assets/img/bg-home.png'
// import Pwc from '../../../assets/img/pwc.png'
// import Xerde from '../../../assets/img/xerdelogo.png'
import "./Hero.css";
import Heading from "./Heading";
import HeroSection from "../../../components/heroSection/HeroSection";
import Typical from "react-typical";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <HeroSection />
      </section>
    </>
  );
};

export default Hero;

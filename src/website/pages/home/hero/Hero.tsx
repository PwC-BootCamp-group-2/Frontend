import { FaEnvelope, FaMailBulk, FaSearch } from "react-icons/fa";
// import bgHome from '../../../assets/img/bg-home.png'
// import Pwc from '../../../assets/img/pwc.png'
// import Xerde from '../../../assets/img/xerdelogo.png'
import "./Hero.css";
import Heading from "./Heading";
import HeroSection from "../../../components/heroSection/HeroSection";

const Hero = () => {
  let arr = [
    {
      "caseNumber": 123,
      "patientName": "John Doe",
      "technician": "Jasmin Joe",
      "reader": "Jade Boe"
    },
    {
      "caseNumber": 123,
      "patientName": "John Doe",
      "technician": "Jasmin Joe",
      "reader": "Jade Boe"
    },
    {
      "caseNumber": 789,
      "patientName": "Jim Doe",
      "technician": "Jasmin Joe",
      "reader": "Jade Boe"
    }
  ];
  
  return (
    <>
      <section className="hero">
        <HeroSection />
      </section>
    </>
  );
};

export default Hero;

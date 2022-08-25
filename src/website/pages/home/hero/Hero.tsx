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
  
  // Customize as appropriate.
  // Currently performs a case-insensitive match
  function searchMatch(target: any, search: any) {
      search = String(search).trim().toLowerCase();
      return String(target).toLowerCase().includes(search);
  }
  
  function findResults(arr: any, searchObj: any) {
      return arr.filter((el: any) => { 
          return Object.entries(searchObj).some(([key, value]) => searchMatch(el[key], value));
      })
  }
  

  // console.log("Result 3:", findResults(arr, { patientName: 'jim doe', caseNumber: 123}));
  return (
    <>
      <section className="hero">
        <HeroSection />
      </section>
    </>
  );
};

export default Hero;

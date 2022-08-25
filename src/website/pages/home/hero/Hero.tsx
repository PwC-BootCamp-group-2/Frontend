import { FaEnvelope, FaMailBulk, FaSearch } from 'react-icons/fa'
import bgHome from '../../../assets/img/bg-home.png'
import Pwc from '../../../assets/img/pwc.png'
import Xerde from '../../../assets/img/xerdelogo.png'
import './Hero.css'
import Heading from './Heading'

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
            <section className='hero'>
                <div className='containerhero'>
                    <Heading
                        title='Find Your Office Space' subtitle='The ultimate workspace experience, with ultimate flexibility. Access more than 50 coworking spaces across 20 cities, with a single membership.'
                    />
                    <form className='flex'>
                        <div className='box'>
                            <span>City/Street</span>
                            <input
                                type='text'
                                name='location'
                                // value='location'
                                id='location'
                                placeholder='Location' />
                        </div>
                        <div className='box'>
                            <span>Space Type</span>
                            <input
                                type='text'
                                name='spacetype'
                                // value='spacetype'
                                // id='spacetype'
                                placeholder='Space Type'
                            />
                        </div>
                        <div className='box'>
                            <span>Price Range</span>
                            <input
                                type='text'
                                name='price'
                                // value='price'
                                // id='price'
                                placeholder='Price Range' />
                        </div>
                        <div className='box'>
                            <button className='btn btn-lg btn-block'>Search</button>
                        </div>
                        <button className='btn btn-success'>
                            <FaSearch />
                        </button>
                    </form>
                </div>
             </section>
        </>
    )
}

export default Hero 
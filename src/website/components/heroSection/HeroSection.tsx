import { animated, useSpring, useTransition } from "@react-spring/web";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../../website/pages/home/hero/Hero.css";
import hero from "../../assets/img/home-hero.jpg";
import heroTwo from "../../assets/img/extra.jpg";
import heroThree from "../../assets/img/hero-bg.jpeg";
import heroFour from "../../assets/img/home-img.jpg";
import Typical from "react-typical";

const slides = [hero, heroTwo, heroThree, heroFour];

const HeroSection = () => {
  const [index, set] = useState(0);
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0.9 },
    enter: { opacity: 1 },
    leave: { opacity: 0.9 },
    config: { duration: 1000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <div className="flex fill center">
      {transitions((style, i) => (
        <animated.div
          className="hero"
          style={{
            ...style,
            backgroundImage: `url(${slides[i]})`,
          }}
        >
          <div className="containerhero">
            <div className="heading">
              <h1>
                <Typical
                  steps={["Find", 5000, "Lease", 5000, "Book", 5000]}
                  loop={Infinity}
                  className="animated-text"
                  wrapper="b"
                />
                Your Space
              </h1>
              <p>
                The ultimate workspace experience, with ultimate flexibility.
                <br></br>
                Access more than 50 coworking spaces across 20 cities, with a
                single membership.
              </p>
            </div>

            <form className="flex">
              <div className="box">
                <span>City/Street</span>
                <input
                  type="text"
                  name="location"
                  // value='location'
                  id="location"
                  placeholder="Location"
                />
              </div>
              <div className="box">
                <span>Space Type</span>
                <input
                  type="text"
                  name="spacetype"
                  // value='spacetype'
                  // id='spacetype'
                  placeholder="Space Type"
                />
              </div>
              <div className="box">
                <span>Price Range</span>
                <input
                  type="text"
                  name="price"
                  // value='price'
                  // id='price'
                  placeholder="Price Range"
                />
              </div>
              <div className="box">
                <button className="btn btn-lg btn-block">Search</button>
              </div>
              <button className="btn btn-success">
                <FaSearch />
              </button>
            </form>
          </div>
        </animated.div>
      ))}
    </div>
  );
};

export default HeroSection;

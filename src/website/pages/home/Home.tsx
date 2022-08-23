import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";

const Home = () => {
  return (
    <main>
      <Hero />
      <Featured />
      <Recent />
    </main>
  );
};

export default Home;

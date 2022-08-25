import Featured from "./featured/Featured";
import Hero from "./hero/Hero";
import Recent from "./recent/Recent";
import Users from "./users/Users";

const Home = () => {
  return (
    <main>
      <Hero />
      <Users />
      <Featured />
      <Recent />
    </main>
  );
};

export default Home;

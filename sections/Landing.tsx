import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Links from "../components/Links";

const Landing = () => {
  return (
    <section className="basis-1/3 bg-[#1d3557] p-8">
      <Navbar />
      <AboutMe />
      <Links />
    </section>
  );
};

export default Landing;

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import About from "../components/About";

function Home() {
  return (
    <div>
      <Navbar/>
       <Banner/>
       <HowItWorks/>
       <WhyChoose/>
       <About/>
    </div>
  );
}

export default Home;

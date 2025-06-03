import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div>
      <Navbar/>
       <Banner/>
       <HowItWorks/>
    </div>
  );
}

export default Home;

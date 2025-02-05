import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import SecondSection from "./component/SecondSection";
import ThirdSection from "./component/ThirdSection";
// import "../styles/globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <SecondSection/>
      <ThirdSection/>
    </div>
  );
}

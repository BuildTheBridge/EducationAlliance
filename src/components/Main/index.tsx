import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./Navbar";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";
export default function Main() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" justify-center items-center flex flex-col">
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

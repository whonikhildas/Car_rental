import { useEffect, useState } from "react"
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main";
import AOS from 'aos';
import "aos/dist/aos.css";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import CarList from "./components/CarList/CarList";
import Client from "./components/Client/Client";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {

  // Dark Mode Feature
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? 
    localStorage.getItem("theme") : "dark"
  );

  const element = document.documentElement;
  useEffect(()=>{
    if (theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem('theme','dark');
    }else{
    element.classList.remove("dark");
    localStorage.setItem('theme','light');
  }
},[theme]);

// AOS initialization 
useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay:100,
  });
  AOS.refresh();
  },[]);


  
  return (
    <div className="bg-white dark:bg-black dark:text-white ">
    <Navbar theme={theme} setTheme={setTheme}/>
    <Main theme={theme}/>
    <About/>
    <Services/>
    <CarList/>
    <Client/>
    <Banner/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App

import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import AboutImage from "../img/about.jpg";
import AboutUs from "../components/AboutUs";

import Footer from "../components/footer";
function about() {
  return (
    //"<></>"-they r known as empty figment use it when ever u have multiple component"
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="About"
        text="Find your dream vaction destination"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default about;

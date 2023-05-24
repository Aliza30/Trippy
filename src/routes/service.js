import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import AboutImage from "../img/service.jpg";
import Trip from "../components/trip";
import Footer from "../components/footer";
function service() {
  return (
    //"<></>"-they r known as empty figment use it when ever u have multiple component"
    <>
      <NavBar />
      <Hero
        cName="hero-mid mid-title"
        heroImg={AboutImage}
        title="Our Service"
        text="How may we help you? "
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}

export default service;

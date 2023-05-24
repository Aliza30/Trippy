import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import AboutImage from "../img/service.jpg";

function service() {
  return (
    //"<></>"-they r known as empty figment use it when ever u have multiple component"
    <>
      <NavBar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="Service"
        text="How can we help you?"
        btnClass="hide"
      />
    </>
  );
}

export default service;

import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import AboutImage from "../img/contact.jpeg";
import Footer from "../components/footer";
import Contact from "../components/contactform";

function contact() {
  return (
    //"<></>"-they r known as empty figment use it when ever u have multiple component"
    <>
      <NavBar />
      <Hero
        cName="hero-mid mid-title"
        heroImg={AboutImage}
        title="Contact Us"
        text="Book your vaction plan now!"
        btnClass="hide"
      />
      <Contact />
      <Footer />
    </>
  );
}

export default contact;

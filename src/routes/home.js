import NavBar from "../components/NavBar";
import Hero from "../components/hero";
import Distinaiton from "../components/destination";
import Trip from "../components/trip";
import Footer from "../components/footer";
function home() {
  return (
    //"<></>"-they r known as empty figment use it when ever u have multiple component"
    <>
      <NavBar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
        title="Your journey your story"
        text="Choose your favorite destination."
        btnText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Distinaiton />
      <Trip />
      <Footer />
    </>
  );
}

export default home;

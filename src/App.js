import Navigation from "./Components/Navigation";
import Contact from "./Components/Contact";
import Contactform from "./Components/Contactform";
import "./app.css";

const App = () => {
  return (
    <>
      <Navigation />
      <main className="main_container flex flex-col h-fit" >
      <Contact />
      <Contactform/>
      </main>
    </>
  );
}

export default App;

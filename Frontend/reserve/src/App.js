import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import Footer from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";
// import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <About />
      </div>
      <Footer />
    </>
  );
}

export default App;

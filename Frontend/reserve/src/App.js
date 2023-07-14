import { About } from "./Pages/About";
import { Customer } from "./Pages/Customer";
import { Home } from "./Pages/Home";
import Footer from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <Home />
        <About />
        <Customer />
      </div>
      <Footer />
    </>
  );
}

export default App;

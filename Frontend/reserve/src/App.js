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
      </div>
      <Footer />
    </>
  );
}

export default App;

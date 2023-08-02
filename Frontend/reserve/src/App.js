import { Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";
import { AvailableBus } from "./Pages/AvailableBus";
import { Payment } from "./Pages/Payment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/register" Component={Register} />
        <Route path="/login" Component={Login} />
        <Route path="/available-bus" Component={AvailableBus} />
        <Route path="/payment" Component={Payment} />
      </Routes>
    </>
  );
}

export default App;

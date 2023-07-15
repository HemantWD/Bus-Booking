import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import { Login } from "./Pages/Auth/Login";
import { Register } from "./Pages/Auth/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Main} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

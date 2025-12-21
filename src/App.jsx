import { Outlet } from "react-router";
import Nav from "./components/Nav.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;

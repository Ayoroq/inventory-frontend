import { outlet } from "react-router";
import nav from "./components/nav";
import "./App.css";

function App() {
  return (
    <>
      <nav />
      <outlet />
    </>
  );
}

export default App;

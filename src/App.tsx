import "./App.css";
import { type ReactElement } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App(): ReactElement {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;

import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Data/HomePage";
import Details from "./Details";
import Login from "./Login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

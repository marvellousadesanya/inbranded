import "./App.css";
import { Route, Routes } from "react-router-dom";
import Table from "./SalesPage";
import Sales from "./Sales";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/sales" element={<Sales />} />
      </Routes>
    </>
  );
}

export default App;

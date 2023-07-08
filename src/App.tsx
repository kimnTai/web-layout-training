import { Route, Routes } from "react-router-dom";
import Day1 from "./pages/day/Day1";
import DayDefault from "./pages/day/Day2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DayDefault />} />
      <Route path="/day1" element={<Day1 />} />
    </Routes>
  );
}

export default App;

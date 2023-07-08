import { Route, Routes } from "react-router-dom";
import DayDefault from "./pages/day/Day3";
import Day1 from "./pages/day/Day1";
import Day2 from "./pages/day/Day2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DayDefault />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
    </Routes>
  );
}

export default App;

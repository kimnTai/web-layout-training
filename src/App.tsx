import { Route, Routes } from "react-router-dom";
import DayDefault from "./pages/day/Day7";
import Day1 from "./pages/day/Day1";
import Day2 from "./pages/day/Day2";
import Day3 from "./pages/day/Day3";
import Day4 from "./pages/day/Day4";
import Day5 from "./pages/day/Day5";
import Day6 from "./pages/day/Day6";
import Day7 from "./pages/day/Day7";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DayDefault />} />
      <Route path="/day1" element={<Day1 />} />
      <Route path="/day2" element={<Day2 />} />
      <Route path="/day3" element={<Day3 />} />
      <Route path="/day4" element={<Day4 />} />
      <Route path="/day5" element={<Day5 />} />
      <Route path="/day6" element={<Day6 />} />
      <Route path="/day7" element={<Day7 />} />
    </Routes>
  );
}

export default App;

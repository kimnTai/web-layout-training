import { Route, Routes } from "react-router-dom";
import Day1 from "./pages/day/Day1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Day1 />} />
    </Routes>
  );
}

export default App;

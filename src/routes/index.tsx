import Home from "@/pages/Home";
import Day1 from "@/pages/day/Day1";
import Day10 from "@/pages/day/Day10";
import Day2 from "@/pages/day/Day2";
import Day3 from "@/pages/day/Day3";
import Day4 from "@/pages/day/Day4";
import Day5 from "@/pages/day/Day5";
import Day6 from "@/pages/day/Day6";
import Day7 from "@/pages/day/Day7";
import Day9 from "@/pages/day/Day9";
import Week1 from "@/pages/week/Week1";
import { createHashRouter } from "react-router-dom";

const router = createHashRouter([
  {
    index: true,
    path: "/",
    element: <Home />,
  },
  { path: "/day1", element: <Day1 /> },
  { path: "/day2", element: <Day2 /> },
  { path: "/day3", element: <Day3 /> },
  { path: "/day4", element: <Day4 /> },
  { path: "/day5", element: <Day5 /> },
  { path: "/day6", element: <Day6 /> },
  { path: "/day7", element: <Day7 /> },
  { path: "/day9", element: <Day9 /> },
  { path: "/day10", element: <Day10 /> },
  { path: "/week1", element: <Week1 /> },
]);

export default router;
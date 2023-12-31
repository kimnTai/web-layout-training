import Home from "@/pages/Home";
import Pixel from "@/pages/Pixel";
import Flex from "@/pages/course/Flex";
import SweetTaste from "@/pages/course/SweetTaste";
import Day1 from "@/pages/day/Day1";
import Day10 from "@/pages/day/Day10";
import Day11 from "@/pages/day/Day11";
import Day14 from "@/pages/day/Day14";
import Day15 from "@/pages/day/Day15";
import Day16 from "@/pages/day/Day16";
import Day17 from "@/pages/day/Day17";
import Day18 from "@/pages/day/Day18";
import Day19 from "@/pages/day/Day19";
import Day2 from "@/pages/day/Day2";
import Day22 from "@/pages/day/Day22";
import Day3 from "@/pages/day/Day3";
import Day4 from "@/pages/day/Day4";
import Day5 from "@/pages/day/Day5";
import Day6 from "@/pages/day/Day6";
import Day7 from "@/pages/day/Day7";
import Day9 from "@/pages/day/Day9";
import Week1 from "@/pages/week/Week1";
import Week2 from "@/pages/week/Week2";
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
  { path: "/day11", element: <Day11 /> },
  { path: "/day14", element: <Day14 /> },
  { path: "/day15", element: <Day15 /> },
  { path: "/day16", element: <Day16 /> },
  { path: "/day17", element: <Day17 /> },
  { path: "/day18", element: <Day18 /> },
  { path: "/day19", element: <Day19 /> },
  { path: "/day22", element: <Day22 /> },
  { path: "/week1", element: <Week1 /> },
  { path: "/week2", element: <Week2 /> },
  { path: "/pixel", element: <Pixel /> },
  { path: "/course/flex", element: <Flex /> },
  { path: "/course/sweetTaste", element: <SweetTaste /> },
]);

export default router;

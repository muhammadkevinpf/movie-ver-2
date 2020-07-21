import React from "react";
import { TiMediaPlay, TiChartLine, TiChartBar } from "react-icons/ti";
const linkSidebar = [
  {
    index: 1,
    to: "/",
    title: "Discover",
  },
  {
    index: 2,
    title: "Movies",
    subContent: [
      {
        index: 1,
        to: "/movies/playing",
        title: "Now Playing",
        icon: <TiMediaPlay />,
      },
      {
        index: 2,
        to: "/movies/popular",
        title: "Popular",
        icon: <TiChartLine />,
      },
      {
        index: 3,
        to: "/movies/top-rated",
        title: "Top Rated",
        icon: <TiChartBar />,
      },
    ],
  },
  {
    index: 3,
    title: "TV Shows",
    subContent: [
      {
        index: 1,
        to: "/tv/on-the-air",
        title: "On The Air",
        icon: <TiMediaPlay />,
      },
      {
        index: 2,
        to: "/tv/popular",
        title: "Popular",
        icon: <TiChartLine />,
      },
      {
        index: 3,
        to: "/tv/top-rated",
        title: "Top Rated",
        icon: <TiChartBar />,
      },
    ],
  },
];

export { linkSidebar };

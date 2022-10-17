import React from "react";
import CurrencyExchange from "./pages/CurrencyExchange/CurrencyExchange";
import Home from "./pages/Home/Home";
import Itinerary from "./pages/Itinerary/Itinerary";

const routesMap = () => {
  return [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/itinerary",
      element: <Itinerary />,
    },
    {
      path: "/currencyexchange",
      element: <CurrencyExchange />,
    },
  ];
};

export default routesMap;

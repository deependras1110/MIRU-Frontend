import React from "react";
import CurrencyExchange from "./pages/CurrencyExchange/CurrencyExchange";
import DormInformation from "./pages/DormInformation/DormInformation";
import EmergencyContacts from "./pages/EmergencyContacts/EmergencyContacts";
import Home from "./pages/Home/Home";
import Itinerary from "./pages/Itinerary/Itinerary";
import QuickTranslation from "./pages/QuickTranslation/QuickTranslation";

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
    {
      path: "/translation",
      element: <QuickTranslation />,
    },
    {
      path: "/emergencycontacts",
      element: <EmergencyContacts />,
    },
    {
      path: "/dorminformation",
      element: <DormInformation />,
    },
  ];
};

export default routesMap;

import React from "react";
import "./App.css";
import Layout from "./Layout";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar className="topbar" />
      <Layout className="layout" />
    </div>
  );
}

export default App;

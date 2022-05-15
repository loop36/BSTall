import React from "react";
import { Route, Routes } from "react-router";
import Landing from "./Pages/Landing/Landing";
import OC from "./Pages/Order Confirmation/OC";
function App() {

  return ( 
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/OC/:oid" element={<OC />} />
    </Routes>
 
  );
}

export default App;

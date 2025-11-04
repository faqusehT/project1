import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
<Router>

<Header />
      {/* <Routes>
        <Route path="/" element={<Page title="Home" />} />
        <Route path="/product" element={<Page title="Product" />} />
        <Route path="/about" element={<Page title="About Us" />} />
        <Route path="/contact" element={<Page title="Contact" />} />
      </Routes> */}

</Router>      
  );
}

export default App;


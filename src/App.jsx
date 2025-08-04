import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import About from "./Pages/About/About";
import Pricing from "./Pages/Pricing/Pricing";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Rostering from "./Pages/Rostering/Rostering";
import CustomerManagement from "./Pages/CustomerManagement/CustomerManagement";
import Billing from "./Pages/Billing/Billing";
import Budgeting from "./Pages/Budgeting/Budgeting";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rostering" element={<Rostering />} />
          <Route path="/costumermanagement" element={<CustomerManagement />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/budgeting" element={<Budgeting />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;

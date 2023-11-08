import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import PatientForm from "./Patient-Form";
import NotFound from "./404";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<PatientForm />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="*" element={<NotFound />} />
</Routes>
</BrowserRouter>
  );
}

export default App;

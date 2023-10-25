// App.tsx

import React from "react";
import AppRoutes from "./components/Routes"; // Import AppRoutes
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRoutes /> {/* Use AppRoutes component */}
    </BrowserRouter>
  );
};

export default App;

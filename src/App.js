import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import CouponsPage from "./pages/couponsPage";
import PlayList from "./pages/playlist";
import Vid from "./pages/vid";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/coupons" element={<CouponsPage />} />
        <Route exact path="/" element= {<HomePage />}/>
        <Route exact path="/playlist" element= {<PlayList />}/>
        <Route exact path="/vid" element= {<Vid />}/>
      </Routes>
    </Router>
  );
};

export default App;

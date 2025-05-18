import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeftSideComponent from "../components/LeftSideComponent";
import LandingPage from "../pages/LandingPage";
import ListDetailPage from "../pages/ListDetailPage";

const AppRoutes: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <Router>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "rgb(18,24,31)",
          color: "#fff",
          gap: open ? "0px" : "40px",
        }}
      >
        <LeftSideComponent open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sale/:id" element={<ListDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppRoutes;
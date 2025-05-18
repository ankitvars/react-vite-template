import React from "react";
import RightSideComponent from "../components/RightSideComponent";
// import { Divider } from "@mui/material";

const LandingPage: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgb(18,24,31)",
        color: "#fff",
        gap: "40px",
      }}
    >
      <RightSideComponent />
    </div>
  );
};

export default LandingPage;
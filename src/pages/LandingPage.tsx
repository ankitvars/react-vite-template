import React, { useState } from "react";
import LeftSideComponent from "../components/LeftSideComponent";
import RightSideComponent from "../components/RightSideComponent";
import { Divider } from "@mui/material";

const LandingPage: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "rgb(18,24,31)",
        color: "#fff",
        gap: open ? "0px" : "40px", 
      }}
    >
      {/* Left side navigation */}
      <LeftSideComponent open={open} setOpen={setOpen} />
      <Divider />
      <RightSideComponent />
    </div>
  );
};

export default LandingPage;

import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        width: "200px",
        display: "flex",
        flexDirection: "column",
      }}
      className="bg-info"
    >
      <div
        className="p-2 mt-2"
        onClick={() => {
          navigate("/home");
        }}
      >
        home
      </div>
      <div
        className="p-2"
        onClick={() => {
          navigate("/flags/india");
        }}
      >
        India
      </div>
      <div
        className="p-2"
        onClick={() => {
          navigate("/flags/germany");
        }}
      >
        Germany
      </div>
    </div>
  );
}

export default Sidebar;

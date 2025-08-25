import React from "react";
import { Link } from "react-router-dom"; // nếu dùng react-router
import "../assets/css/Marquee.css"

import Diadiemjson from "../data/Diadiem.json"
import Amthucjson from "../data/Amthuc.json"

const combinedData = [
    
    ...Diadiemjson.map((item) => ({ ...item, source: "diadiem" })),
    ...Amthucjson.map((item) => ({ ...item, source: "amthuc" })),
  ];

export default function Marquee() {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {combinedData.map((item, idx) => (
          <Link key={idx} to={item.link} className="marquee-item">
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

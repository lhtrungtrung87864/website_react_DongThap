import React, { useEffect, useState } from "react";
import DiaDiem from "../data/Diadiem.json";
import "../assets/css/ImagesDong.css"


export default function Main() {
  
        const places = DiaDiem; // chứa cả img + link
      
        
        const groupSize = 5; // số ảnh hiển thị cùng lúc
        const delay = 5000;
      
        const [index, setIndex] = useState(0);
        useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) =>
      prev + groupSize >= places.length ? 0 : prev + groupSize
    );
  }, delay);

  return () => clearInterval(interval);
}, [places.length]);

const displayed = places.slice(index, index + groupSize);

return (
    <div className="image-slider">
        {displayed.map((place) => (
    <a key={place.id} href={place.link} className="image-item">
      <img src={place.img} alt={place.title} />
    </a>
  ))}
      </div>
)
}
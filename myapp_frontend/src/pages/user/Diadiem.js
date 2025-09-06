import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../assets/css/Diadiem.css";

import ImagesDong from "../../component/ImagesDong";
import FloatinggeminiChat from "../../component/FloatingGeminiChat";

export default function DiaDiems() {
  
  const [places, setPlaces] = useState([]); // ✅ state để lưu dữ liệu từ API



 
useEffect(() => {
  fetch("/api/diadiem")
    .then((res) => res.json())
    .then((data) => setPlaces(data))
    .catch((err) => console.error("Lỗi khi load địa điểm:", err));
}, []);


  return (
    <div>
      <Header />
      <section id="dia-diem">
        <h2>Địa điểm du lịch</h2>
        <div className="dia-diem-container">
          {places.map((place) => (
            <a key={place.id} href={place.link} className="card">
              <img src={place.img} alt={place.title} />
              <div className="card-content">
                <h3>{place.title}</h3>
                <p>{place.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
      {/* ✅ Chat nổi góc phải */}
      <FloatinggeminiChat />
      <ImagesDong />
      <Footer />
    </div>
  );
}

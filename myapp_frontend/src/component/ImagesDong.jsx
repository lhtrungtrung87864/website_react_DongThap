import React, { useEffect, useState } from "react";
import DiaDiem from "../data/Diadiem.json";
import "../assets/css/ImagesDong.css";
import AmThuc from "../data/Amthuc.json";

export default function Main() {
  // Hàm shuffle mảng (Fisher-Yates algorithm)
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  // Gộp và random ngay từ đầu
  const [places] = useState(() => shuffleArray([...DiaDiem, ...AmThuc]));

  const groupSize = 5; // số ảnh hiển thị cùng lúc
  const delay = 5000;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        (prev + groupSize) % places.length // xoay vòng
      );
    }, delay);

    return () => clearInterval(interval);
  }, [places.length]);

  // Lấy đúng groupSize ảnh, không bao giờ thiếu
  const displayed = [];
  for (let i = 0; i < groupSize; i++) {
    displayed.push(places[(index + i) % places.length]);
  }

  return (
    <div className="image-slider">
      {displayed.map((place, i) => (
        <a key={`${place.id}-${i}`} href={place.link} className="image-item">
          <img src={place.img} alt={place.title} />
        </a>
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../assets/css/Diadiem.css";
import DiaDiem from "../../data/Diadiem.json";
import { useNavigate } from "react-router-dom";
import ImagesDong from "../../component/ImagesDong"
import FloatinggeminiChat from "../../component/FloatingGeminiChat";


export default function DiaDiems() {
  

  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedUser && loggedUser.role === "user") {
      setUser(loggedUser);
    } else {
      setUser(null);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
    navigate("/");
  };

  


  
  return (
    <div>
      <Header user={user} handleLogout={handleLogout} />
      <section id="dia-diem">
        <h2>Địa điểm du lịch</h2>
        <div className="dia-diem-container">
          {DiaDiem.map((place) => (
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

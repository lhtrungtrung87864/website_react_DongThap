import React, { useEffect, useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../assets/css/Amthuc.css";
import AmThuc from "../../data/Amthuc.json";
import { useNavigate } from "react-router-dom";
import ImagesDong from "../../component/ImagesDong";
import FloatinggeminiChat from "../../component/FloatingGeminiChat";


export default function Amthucs() {
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

      <section id="am-thuc">
        <h2>Ẩm thực & Đặc sản</h2>
        <div className="am-thuc-container">
          {AmThuc.map((item) => (
            <a key={item.id} href={item.link} className="card">
              <img src={item.img} alt={item.title} />

              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
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

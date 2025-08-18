import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../assets/css/HomeUser.css";

import Images from "../../assets/image/Dongthap.png";
import Anh1 from "../../assets/image/anh1.jpg";
import Anh2 from "../../assets/image/anh2.jpg";
import Anh3 from "../../assets/image/anh3.jpg";
import Anh4 from "../../assets/image/anh4.jpg";
import Anh5 from "../../assets/image/anh5.jpg";
import Anh6 from "../../assets/image/anh6.jpg";



export default function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const groupSize = 5; // số ảnh hiển thị cùng lúc
  const [index, setIndex] = useState(0);
  const images = [Anh1, Anh2, Anh3, Anh4, Anh5, Anh6]; // mảng ảnh cố định


  const sections = [
    {
      title: "Góc nhìn",
      articles: [
        {
          img: Anh1,
          main: "Những “dòng chảy” đổi thay ở “Đất Sen hồng”",
          subs: [
            "Câu chuyện dòng sông: Gợi mở tư duy vận hành chính quyền 2 cấp ở tỉnh Đồng Tháp",
            "Khi những hạt giống tư nhân vươn ra biển lớn",
          ],
        },
      ],
    },
    {
      title: "Phóng sự",
      articles: [
        {
          img: Anh2,
          main: "Đảm bảo việc học tập cho con cán bộ, công chức sau sáp nhập tỉnh",
          subs: [
            "Thiết thực chăm lo đời sống công nhân, người lao động",
            "Ở xã Anh hùng",
          ],
        },
      ],
    },
    {
      title: "Nhân sự mới",
      articles: [
        {
          img: Anh3,
          main: "Văn phòng UBND tỉnh triển khai công tác tổ chức, cán bộ",
          subs: [
            "Ông Nguyễn Sĩ Hùng được bổ nhiệm Phó Giám đốc Sở Văn hóa, TT&DL",
            "Công bố thành lập Ban Quản lý Khu kinh tế tỉnh Đồng Tháp",
          ],
        },
      ],
    },
  ];

 

  const news = [
    "Nội dung 1",
    "Nội dung 2",
    "Nội dung 3",
    "Nội dung 4",
    "Nội dung 5",
  ];

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

  // Tự động đổi ảnh
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };



  //cuoi trang
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + groupSize) % images.length);
    }, 3000); // đổi sau 3 giây

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // chỉ chạy 1 lần khi mount

  const displayed = images.slice(index, index + groupSize);

  

  return (
    <div>
      <>
        <Header user={user} handleLogout={handleLogout} />

          {/* Banner hình ảnh */}
<section id="banner">
  <img src={Images} alt="Cảnh đẹp Đồng Tháp" className="banner-image" />

  {/* Ô tìm kiếm */}
  <div className="search-box">
    <input
      type="text"
      placeholder="Nhập từ khóa tìm kiếm..."
      className="search-input"
    />
    <button className="search-button">Tìm kiếm</button>
  </div>
</section>




        <main className="home-main">
          {/* Dòng chữ chạy */}
          <div className="marquee-container">
            <div className="marquee-text">
              Chủ động ứng phó thiên tai trong những ngày tới - Tin cảnh báo mưa
              dông, lốc, tố, sét tỉnh Đồng Tháp (ngày 15/8/2025) - Thông báo tìm
              kiếm...
            </div>
          </div>


          <div className="content-wrapper">
            {/* Slideshow ảnh */}
            <div className="slideshow">
              <img
                src={images[currentImage]}
                alt="Slideshow"
                className="slideshow-img"
              />
              <button className="btn prev" onClick={prevImage}>
                ❮
              </button>
              <button className="btn next" onClick={nextImage}>
                ❯
              </button>
            </div>

            {/* Danh sách tin tức */}
            <div className="news-list">
              <ul>
                {news.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>


{/* phóng sự */}
          <div className="news-sections">
      {sections.map((section, idx) => (
        <div key={idx} className="news-block">
          <h2 className="section-title">{section.title}</h2>
          {section.articles.map((article, index) => (
            <div key={index}>
              <img src={article.img} alt={article.main} className="news-img" />
              <h3 className="main-article">{article.main}</h3>
              <ul className="sub-articles">
                {article.subs.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
          


          {/* cuoi trang */}
          <div className="image-slider">
      {displayed.map((img, i) => (
        <div key={i} className="image-item">
          <img src={img} alt={`Ảnh ${i}`} />
        </div>
      ))}
    </div>


        </main>

        <Footer />
      </>
    </div>
  );
}

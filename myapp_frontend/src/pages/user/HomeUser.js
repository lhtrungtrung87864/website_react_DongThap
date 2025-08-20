import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../assets/css/HomeUser.css";
import Search from "../../component/Search";
import newsData from "../../data/news.json";
import Sections from "../../data/sections.json";

import Images from "../../assets/image/Dongthap.png";
import NemLaiVung from "../../assets/image/Nemlaivung.jpg";
import LeHoi from "../../assets/image/Lehoi_Dinhyen.jpg";
import CauGachMieu from "../../assets/image/Caugachmieu.jpg";
import GoThap from "../../assets/image/Gothap.jpg";
import LangHoaSaDec from "../../assets/image/LanghoaSaDec.jpg";
import NhaCoHuynhThuyLe from "../../assets/image/NhacoHuynhThuyLe.jpg";

export default function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  // dữ liệu từ datanews.json
  const [news] = useState(newsData);

  const [results, setResults] = useState([]);

  const handleSearch = (keyword) => {
  const filtered = news.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );
  setResults(filtered);
};


  const [index, setIndex] = useState(0);
  const images = [
    LeHoi,
    NemLaiVung,
    CauGachMieu,
    GoThap,
    LangHoaSaDec,
    NhaCoHuynhThuyLe,
  ]; // mảng ảnh cố định
  const groupSize = 5; // số ảnh hiển thị cùng lúc
  const delay = 5000;
  
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
      setIndex((prev) =>
        prev + groupSize >= images.length ? 0 : prev + groupSize
      );
    }, delay);

    return () => clearInterval(interval);
  }, [images.length]);

  const displayed = images.slice(index, index + groupSize);
  return (
    <div>
      <>
        <Header user={user} handleLogout={handleLogout} />

        {/* Banner hình ảnh */}
        <section id="banner">
          <img src={Images} alt="Cảnh đẹp Đồng Tháp" className="banner-image" />

          {/* Ô tìm kiếm */}
          <Search news={news} onSearch={handleSearch} />
          {/* Hiển thị kết quả tìm kiếm */}
          {results.length > 0 && (
            <div className="search-results">
              <h3>Kết quả tìm kiếm:</h3>
              <ul>
                {results.map((r, idx) => (
                  <li key={idx}>
                    {/* render HTML trong chuỗi */}
                    <span dangerouslySetInnerHTML={{ __html: r }} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <h2 class="title_DT">Đồng Tháp – Đất Sen Hồng</h2>

        <main className="home-main">
          {/* Dòng chữ chạy */}
          <div class="marquee-container">
            <div class="marquee-track">
              <span>
                Góp ý dự thảo văn kiện trình Ðại hội đại biểu Ðảng bộ tỉnh lần
                thứ I, nhiệm kỳ 2025 – 2030
              </span>
              <span>
                Tuổi trẻ Đồng Tháp kết nối tri thức - chuyển đổi số - phát triển
                xanh và bền vững
              </span>
              <span>
                Đồng Tháp đẩy mạnh phát triển nông nghiệp xanh, bền vững
              </span>
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

            <div className="news-list">
              <ul>
                {news.map((item, index) => (
                  <li key={index}>
                    <a href={item.link}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* phóng sự */}
          <div className="news-sections">
      {Sections.map((section, idx) => (
        <div key={idx} className="news-block">
          <h2 className="section-title">{section.title}</h2>

          {section.articles.map((article, index) => (
            <div key={index}>
              <a href={article.imgLink}>
                <img
                  src={images[article.img]}
                  alt={article.main.text}
                  className="news-img"
                />
              </a>

              <h3 className="main-article">
                <a href={article.main.link}>{article.main.text}</a>
              </h3>

              <ul className="sub-articles">
                {article.subs.map((s, i) => (
                  <li key={i}>
                    <a href={s.link}>{s.text}</a>
                  </li>
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

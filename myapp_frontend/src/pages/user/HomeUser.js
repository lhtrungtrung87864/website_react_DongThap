import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Marquee from "../../component/Marquee";
import "../../assets/css/HomeUser.css";
import Search from "../../component/Search";
import newsData from "../../data/news.json";
import Sections from "../../data/sections.json";
import ImagesDong from "../../component/ImagesDong";
import DiaDiem from "../../data/Diadiem.json";

import Images from "../../assets/image/Dongthap.png";

export default function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  // dữ liệu từ datanews.json
  const [news] = useState(newsData);
  const places = DiaDiem; // chứa cả img + link

  const [results, setResults] = useState([]);

  const handleSearch = (keyword) => {
    const filtered = news.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );
    setResults(filtered);
  };

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
      setCurrentImage((prev) => (prev + 1) % places.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [places.length]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % places.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + places.length) % places.length);
  };

  const handleClick = () => {
    navigate(places[currentImage].link);
  };

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

          <Marquee />

          <div className="content-wrapper">
            {/* Slideshow ảnh */}
            <div className="slideshow">
              <img
                src={places[currentImage].img}
                alt={places[currentImage].title}
                className="slideshow-img"
                onClick={() => handleClick(places[currentImage].link)}
                style={{ cursor: "pointer" }}
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
                        src={article.img} // ❌ bỏ dấu ngoặc kép
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
        </main>
        {/* cuoi trang */}
        <ImagesDong />

        <Footer />
      </>
    </div>
  );
}

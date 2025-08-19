import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import "../../assets/css/HomeUser.css";

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
  const groupSize = 5; // số ảnh hiển thị cùng lúc
  const [index, setIndex] = useState(0);
  const images = [LeHoi, NemLaiVung, CauGachMieu, GoThap, LangHoaSaDec, NhaCoHuynhThuyLe]; // mảng ảnh cố định

  const sections = [
    {
      title: "Ẩm thực - Đặc sản",
      articles: [
        {
          img: NemLaiVung,
          main: "Nem Lai Vung – Di sản ẩm thực Đồng Tháp",
          subs: [
            "Nem Lai Vung từng lọt Top 10 đặc sản nem chả nổi tiếng Việt Nam;",
            "Nghề làm nem đã được công nhận là Di sản văn hóa phi vật thể cấp quốc gia 2023",
          ],
        },
      ],
    },
    {
      title: "Văn hoá - Lễ hội",
      articles: [
        {
          img: LeHoi,
          main: "Lễ hội Kỳ Yên Đình thần Định Yên",
          subs: [
            "Diễn ra vào các ngày 14 – 16 tháng 4 âm lịch hàng năm;",
            "Gồm hát bội, đờn ca tài tử, kéo co, đua thuyền...",
          ],
        },
      ],
    },
    {
      title: "Tin tức - Sự kiện",
      articles: [
        {
          img: CauGachMieu,
          main: "Tin nổi bật về Đồng Tháp",
          subs: [
            "Cầu Rạch Miễu 2 khánh thành, kết nối Đồng Tháp – Vĩnh Long;",
            "Hạ tầng chuyển đổi số trong giáo dục, mô hình nông nghiệp xanh...",
          ],
        },
      ],
    },
  ];

  const news = [
    "<strong>Vườn Quốc gia Tràm Chim</strong> – Không gian thiên nhiên hoang dã, ngồi thuyền giữa rừng tràm nghe chim hót, ngắm đàn sếu đầu đỏ và tận hưởng không khí mùa nước nổi.",
    "<strong>Khu di tích Gò Tháp</strong> – Di tích văn hóa Óc Eo, hòa quyện lịch sử và thiên nhiên, đặc biệt rực rỡ vào mùa sen.",
    "<strong>Làng hoa Sa Đéc</strong> – “Xứ sở” hoa muôn màu, đặc biệt vào mùa xuân, vô cùng rực rỡ và thơ mộng.",
    "<strong>Nhà cổ Huỳnh Thủy Lê</strong> – Kiến trúc Đông – Tây độc đáo, gắn liền với câu chuyện tình “Người tình” của Marguerite Duras.",
    "<strong>Vàm Kỳ Hôn</strong> – Nổi bật với vẻ đẹp miệt vườn và cảnh sông nước miền Tây. Là vùng đất nhiều giai thoại, với các hoạt động buôn bán, ẩm thực ghe mộc độc đáo trên sông.",
    "<strong>Phường Thới Sơn</strong> – Trước là vùng thuộc TP Mỹ Tho (Tiền Giang), nay trở thành địa điểm phát triển du lịch cộng đồng gắn với văn hóa sông nước và các sản phẩm đặc trưng.",
    "<strong>Khu di tích Xẻo Quýt</strong> - Điểm du lịch sinh thái kết hợp hành hương và về nguồn độc đáo, nằm trong danh sách thông tin nổi bật sau sáp nhập.",
    "<strong>Khu di tích cụ Phó bảng Nguyễn Sinh Sắc</strong> - Một di tích mang giá trị lịch sử, gắn liền với nhân vật văn hóa – lịch sử nổi tiếng, đặc biệt được nhắc đến khi mô tả Đồng Tháp sau sáp nhập.",
    "<strong>Khu du lịch Văn hóa Phương Nam</strong> - Nơi tái hiện tinh hoa văn hóa Nam Bộ với kiến trúc truyền thống, các đền thờ và hoạt động dân gian. Du khách có thể trải nghiệm không gian cổ kính và yên bình nơi đây.",
    "<strong>Chùa Vĩnh Tràng</strong> - Kiệt tác kiến trúc Đông – Tây hòa quyện, nổi bật với các đường nét tinh xảo và vẻ đẹp lôi cuốn đại diện cho thẩm mỹ miền Tây.",
    "<strong>Khu bảo tồn Đồng Tháp Mười</strong> - Minh chứng rõ nét cho sự đa dạng sinh học, với hệ sinh thái rừng tràm và động thực vật phong phú, giữ nguyên vẻ đẹp hoang sơ và quyến rũ.",
    "<strong>Biển Tân Thành</strong> - Bãi cát đen độc đáo dài khoảng 7 km, nơi du khách có thể trải nghiệm cuộc sống bình dị, cào nghêu khi thủy triều rút và ngắm cảnh bình minh hoặc hoàng hôn đầy ấn tượng.",
    "<strong>Vàm Kỳ Hôn</strong> - Vùng đất nhiều giai thoại, nổi bật với cảnh hoàng hôn kỳ vĩ trên vàm sông, chợ nổi về đêm lung linh đèn dầu và hàng bánh trái, là một trải nghiệm sống động miền Tây.",
    "<strong>Niệm Phật Đường Liên Hoa & Tượng Quan Âm Nam Hải</strong> - Quần thể tâm linh nằm gần Vàm Kỳ Hôn, điểm nhấn là tượng Quan Âm cao 33 m đứng bên bờ sông Tiền – nơi vãn cảnh và hướng về vọng tâm linh.",
    "<strong>Phường Thới Sơn (cụm du lịch cộng đồng)</strong> - Trước thuộc TP Mỹ Tho, nơi đây định hướng phát triển du lịch cộng đồng qua các cụm du lịch tại ấp Thới Thạnh và Thới Bình: chèo xuồng, vườn cây ăn trái, trải nghiệm làm mứt bưởi, dệt chiếu, đờn ca tài tử... liên kết với OCOP.",
    "<strong>Phường Mỹ Tho mới</strong> - Bao gồm cù lao Thới Sơn và chợ nổi Cái Bè – nơi diễn ra các hoạt động chèo xuồng ba lá, tham quan làng nghề (kẹo dừa, bánh tráng), điểm du lịch văn hóa hấp dẫn.",
    "<strong>Xã Tân Đông</strong> - Xã sở hữu cảnh quan sông nước thơ mộng, các làng nghề truyền thống như dệt chiếu, làm bánh, thu hút du lịch sinh thái kết hợp văn hóa.",
    "<strong>Xã Tân Phước 2</strong> - Mô hình du lịch sinh thái ven sông Hậu và du lịch cộng đồng đang được đẩy mạnh, nổi bật với sản xuất nông nghiệp công nghệ cao và cây ăn trái, phù hợp phát triển du lịch xanh.",
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
      <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
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
                    <img
                      src={article.img}
                      alt={article.main}
                      className="news-img"
                    />
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

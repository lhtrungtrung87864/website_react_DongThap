// import React, { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "../assets/css/Header.css";


function Header({ user, handleLogout }) {
  // const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header>
      <nav className="nav-left">
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/gioi-thieu">Giới thiệu về Đồng Tháp</Link></li>
          <li><Link to="/dia-diem">Địa điểm du lịch</Link></li>
          <li><Link to="/am-thuc-dac-san">Ẩm thực - Đặc sản</Link></li>
          <li><Link to="/van-hoa-le-hoi">Văn hóa - Lễ hội</Link></li>
          <li> <Link to="/tin-tuc-su-kien">Tin tức - Sự kiện</Link></li>
          <li> <Link to="/lien-he">Liên hệ</Link></li>


          {/* Giới thiệu */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("gioithieu")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/gioi-thieu">Giới thiệu về Đồng Tháp ▾</Link>
            {openDropdown === "gioithieu" && (
              <ul className="dropdown-menu">
                <li><Link to="/gioi-thieu/lich-su">Lịch sử hình thành</Link></li>
                <li><Link to="/gioi-thieu/dia-ly">Vị trí địa lý, khí hậu</Link></li>
                <li><Link to="/gioi-thieu/van-hoa">Đặc trưng văn hóa, con người</Link></li>
              </ul>
            )}
          </li> */}

          {/* Địa điểm du lịch */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("dulich")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/dia-diem">Địa điểm du lịch nổi bật ▾</Link>
            {openDropdown === "dulich" && (
              <ul className="dropdown-menu">
                <li><Link to="/dia-diem/tram-chim">Khu du lịch Tràm Chim</Link></li>
                <li><Link to="/dia-diem/lang-hoa-sa-dec">Làng hoa Sa Đéc</Link></li>
                <li><Link to="/dia-diem/xeo-quyt">Khu di tích Xẻo Quýt</Link></li>
                <li><Link to="/dia-diem/gao-giong">Khu du lịch Gáo Giồng</Link></li>

               
                <li className="dropdown-sub">
                  <span>Điểm tham quan tâm linh ▸</span>
                  <ul className="dropdown-submenu">
                    <li><Link to="/dia-diem/chua-kien-an-cung">Chùa Kiến An Cung</Link></li>
                    <li><Link to="/dia-diem/lang-cu-nguyen-sinh-sac">Lăng cụ Nguyễn Sinh Sắc</Link></li>
                  </ul>
                </li>
              </ul>
            )}
          </li> */}
          
          {/* Ẩm thực */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("amthuc")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/am-thuc">Ẩm thực ▾</Link>
            {openDropdown === "amthuc" && (
              <ul className="dropdown-menu">
                <li><Link to="/am-thuc/hu-tieu-sa-dec">Hủ tiếu Sa Đéc</Link></li>
                <li><Link to="/am-thuc/ca-loc-nuong-trui">Cá lóc nướng trui</Link></li>
                <li><Link to="/am-thuc/goi-xoai-kho-ca-sac">Gỏi xoài khô cá sặc</Link></li>
                <li><Link to="/am-thuc/oc-buou-hap-sa">Ốc bươu hấp sả</Link></li>
              </ul>
            )}
          </li> */}

          {/* Đặc sản */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("dacsan")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/dac-san">Đặc sản ▾</Link>
            {openDropdown === "dacsan" && (
              <ul className="dropdown-menu">
                <li><Link to="/dac-san/nem-lai-vung">Nem Lai Vung</Link></li>
                <li><Link to="/dac-san/quyt-hong-lai-vung">Quýt hồng Lai Vung</Link></li>
                <li><Link to="/dac-san/xoai-cao-lanh">Xoài Cao Lãnh</Link></li>
                <li><Link to="/dac-san/sen-dong-thap">Sen Đồng Tháp</Link></li>
              </ul>
            )}
          </li> */}

          {/* Văn hóa - lễ hội */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("vanhoa")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/van-hoa-le-hoi">Văn hóa - Lễ hội ▾</Link>
            {openDropdown === "vanhoa" && (
              <ul className="dropdown-menu">
                <li><Link to="/van-hoa/hoi-sen">Lễ hội Sen Đồng Tháp</Link></li>
                <li><Link to="/van-hoa/dua-ghe-ngo">Lễ hội đua ghe ngo</Link></li>
                <li><Link to="/van-hoa/lang-nghe-truyen-thong">Làng nghề truyền thống</Link></li>
              </ul>
            )}
          </li> */}

          {/* Tin tức */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("tintuc")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/tin-tuc">Tin tức - Sự kiện ▾</Link>
            {openDropdown === "tintuc" && (
              <ul className="dropdown-menu">
                <li><Link to="/tin-tuc/du-lich">Tin du lịch</Link></li>
                <li><Link to="/tin-tuc/cong-dong">Hoạt động cộng đồng</Link></li>
                <li><Link to="/tin-tuc/hoi-cho">Hội chợ, triển lãm</Link></li>
              </ul>
            )}
          </li> */}

          {/* Liên hệ */}
          {/* <li
            className="dropdown"
            onMouseEnter={() => setOpenDropdown("lienhe")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <Link to="/lien-he">Liên hệ ▾</Link>
            {openDropdown === "lienhe" && (
              <ul className="dropdown-menu">
                <li><Link to="/lien-he/thong-tin">Thông tin du lịch Đồng Tháp</Link></li>
                <li><Link to="/lien-he/ban-do">Bản đồ Google Maps</Link></li>
                <li><Link to="/lien-he/form">Form liên hệ</Link></li>
              </ul>
            )}
          </li> */}
        </ul>
      </nav>

      

      <nav className="nav-right">
        <ul>
          {user ? (
            <>
              <li><strong>Xin chào {user.name}</strong></li>
              <li>
                <button onClick={handleLogout}>Đăng xuất</button>
                
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="login-link">Đăng nhập</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

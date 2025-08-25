// import React, { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
import "../assets/css/Header.css";

function Header({ user, handleLogout }) {

  return (
    <header>
      <nav className="nav-left">
        <ul>
          <li>
            <Link to="/">Trang Chủ</Link>
          </li>
          <li>
            <Link to="/gioi-thieu">Giới thiệu về Đồng Tháp</Link>
          </li>
          <li>
            <Link to="/dia-diem">Địa điểm du lịch</Link>
          </li>
          <li>
            <Link to="/am-thuc">Ẩm thực - Đặc sản</Link>
          </li>
          <li>
            <Link to="/van-hoa-le-hoi">Văn hóa - Lễ hội</Link>
          </li>
          <li>
            {" "}
            <Link to="/tin-tuc-su-kien">Tin tức - Sự kiện</Link>
          </li>
          <li>
            {" "}
            <Link to="/lien-he">Liên hệ</Link>
          </li>

          
        </ul>
      </nav>

      <nav className="nav-right">
        <ul>
          {user ? (
            <>
              <li>
                <strong>Xin chào {user.name}</strong>
              </li>
              <li>
                <button onClick={handleLogout}>Đăng xuất</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="login-link">
                  Đăng nhập
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

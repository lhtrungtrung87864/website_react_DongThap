import React from "react";
import { Link } from "react-router-dom";

function Header({ user, handleLogout }) {
  return (
    <header>
      <nav className="nav-left">
        <ul>
          <li><Link to="/">Trang Chủ</Link></li>
          <li><Link to="/san-pham">Sản Phẩm</Link></li>
          <li><Link to="/gioi-thieu">Giới Thiệu</Link></li>
          <li><Link to="/lien-he">Liên Hệ</Link></li>
        </ul>
      </nav>

      <h1 className="nav-center">SHOP DONG THAP</h1>

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
              <li><Link to="/login">Đăng nhập</Link></li>
              <li><Link to="/register">Đăng ký</Link></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

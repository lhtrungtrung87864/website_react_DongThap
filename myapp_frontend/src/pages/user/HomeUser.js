import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedUser && loggedUser.role === "user") {
      setUser(loggedUser);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div>
      {user && (
        <>
          <Header user={user} handleLogout={handleLogout} />

          <main style={{ marginTop: "20px" }}>
            {/* Banner hình ảnh */}
            <section
              id="banner"
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <img
                src=""
                alt="Cảnh đẹp Đồng Tháp"
                style={{
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />
            </section>

            {/* Giới thiệu ngắn gọn */}
            <section id="gioi-thieu" style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
              >
                Giới thiệu về tỉnh Đồng Tháp
              </h2>
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3>Trước sáp nhập tỉnh</h3>
                  <p>
                    Đồng Tháp trước đây gồm hai tỉnh: Sa Đéc và Kiến Phong. Đây
                    là vùng đất giàu truyền thống lịch sử, gắn với sông Tiền và
                    những làng nghề truyền thống.
                  </p>
                </div>
                <div style={{ flex: 1, minWidth: "250px" }}>
                  <h3>Sau sáp nhập tỉnh</h3>
                  <p>
                    Năm 1976, hai tỉnh Sa Đéc và Kiến Phong sáp nhập thành Đồng
                    Tháp. Hiện nay, tỉnh nổi tiếng với những cánh đồng sen, làng
                    hoa Sa Đéc, và nhiều khu du lịch sinh thái sông nước.
                  </p>
                </div>
              </div>
            </section>

            {/* Các mục nổi bật */}
            <section id="noi-bat" style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "24px",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Các mục nổi bật
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "20px",
                }}
              >
                <div className="card">
                  <img src="" alt="Du lịch" className="animate-img" />
                  <h3>Du lịch</h3>
                </div>
                <div className="card">
                  <img src="" alt="Ẩm thực" className="animate-img" />
                  <h3>Ẩm thực</h3>
                </div>
                <div className="card">
                  <img src="" alt="Đặc sản" className="animate-img" />
                  <h3>Đặc sản</h3>
                </div>
                <div className="card">
                  <img src="" alt="Văn hóa" className="animate-img" />
                  <h3>Văn hóa</h3>
                </div>
              </div>
            </section>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

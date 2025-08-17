import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function About() {
  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <main>
        <section id="about">
          <h2>Giới Thiệu Về SHOP DONG THAP</h2>
          <p>
            Chào mừng bạn đến với <strong>SHOP DONG THAP</strong> – cửa hàng thời trang trực tuyến mang đến cho bạn
            những sản phẩm chất lượng cao, hợp xu hướng với mức giá phải chăng.
          </p>
          <p>
            Sứ mệnh của chúng tôi là đem đến cho khách hàng trải nghiệm mua sắm tuyệt vời, 
            từ những chiếc áo thun cơ bản đến những mẫu váy dạo phố và quần jeans trẻ trung.
          </p>
          <p>
            Với đội ngũ nhân viên tận tâm, chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình lựa chọn
            và đặt mua sản phẩm. Hãy để <strong>SHOP DONG THAP</strong> đồng hành cùng phong cách của bạn!
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

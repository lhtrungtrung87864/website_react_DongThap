import React, { useState } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ở đây bạn có thể gửi dữ liệu đến server (API) nếu muốn
    console.log("Dữ liệu liên hệ:", formData);
    setStatus("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <main>
        <section id="contact">
          <h2>Liên Hệ Với Chúng Tôi</h2>
          <p>
            Nếu bạn có thắc mắc hoặc góp ý, hãy điền thông tin vào form dưới
            đây. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Họ và tên:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Nội dung:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">Gửi</button>
          </form>

          {status && <p style={{ color: "green" }}>{status}</p>}
        </section>
      </main>

      <Footer />
    </div>
  );
}

import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import "../assets/css/Home.css"
import "../assets/css/Header.css"
import "../assets/css/Footer.css"



const products = [
  {
    name: "Áo Thun Nam Basic",
    price: "150.000đ",
    img: "images/jacket1.jpg"
  },
  {
    name: "Váy Nữ Dạo Phố",
    price: "350.000đ",
    img: "images/jeans1.jpg"
  },
  {
    name: "Quần Jeans Trẻ Trung",
    price: "250.000đ",
    img: "images/shirt1.jpg"
  }
];

function Home() {
  return (
    <>
       <Header />

      <main>
        <section id="banner">
          <h2>Chào mừng đến với cửa hàng!</h2>
          <p>Khám phá các mẫu quần áo mới nhất, thời trang nhất.</p>
        </section>

        <section id="products">
          <h2>Sản Phẩm Nổi Bật</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>Giá: <strong>{product.price}</strong></p>
                <button>Mua ngay</button>
              </div>
            ))}
          </div>
        </section>
      </main>

       <Footer />
    </>
  );
}

export default Home;

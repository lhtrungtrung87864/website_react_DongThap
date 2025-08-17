import React, { useState, useEffect } from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import productsData from "../../data/products .json";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <Header />

      <main>
        <section id="products">
          <h2>Tất cả sản phẩm</h2>
          <div className="product-list">
            {products.map((product, index) => (
              <div className="product" key={index}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>
                  Giá: <strong>{product.price}</strong>
                </p>
                <button>Mua ngay</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

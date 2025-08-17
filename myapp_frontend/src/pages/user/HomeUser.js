import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import productsData from "../../data/products .json"


export default function HomeUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedUser && loggedUser.role === "user") {
      setUser(loggedUser);
    } else {
      navigate("/login");
    }
     // load sản phẩm từ json
    setProducts(productsData);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  return (
    <div style={{ padding: "20px" }}>
      {user && (
        <>
          <Header user={user} handleLogout={handleLogout} />


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
        </>
      )}
    </div>
  );
}

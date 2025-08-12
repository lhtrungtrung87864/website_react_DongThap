import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div style={{ padding: "20px" }}>
      {user && (
        <>
          <h1>Xin chào User {user.name}</h1>
          <p>Đây là trang dành cho người dùng.</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </>
      )}
    </div>
  );
}

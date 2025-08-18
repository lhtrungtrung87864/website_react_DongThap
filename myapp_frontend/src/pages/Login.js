import React, { useState, useEffect } from "react";
import usersData from "../data/users.json";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("user"));
    if (storedUsers && storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      localStorage.setItem("users", JSON.stringify(usersData));
      setUsers(usersData);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );

    if (foundUser) {
      setMessage("Đăng nhập thành công");
      localStorage.setItem("loggedInUser", JSON.stringify(foundUser));

      if (foundUser.role === "admin") {
        navigate("/homeadmin");
      } else {
        navigate("/");
      }
    } else {
      setMessage("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleLogin}>
        <h3>Login</h3>

        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {message && <p>{message}</p>}

        <div>
          Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
        </div>
      </form>
    </div>
  );
}

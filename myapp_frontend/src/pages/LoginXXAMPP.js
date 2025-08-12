import React, { useState, useEffect } from "react";
import axios from "axios";
import "../assets/css/Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/myapp_backend/login.php",
        {
          username,
          password,
        }
      );
      setMessage(res.data.message);
       if (res.data.success) { // giả sử backend trả về success
      navigate("/home");
    }
    } catch (err) {
      setMessage("Lỗi kết nối server");
    }
  };

  useEffect(() => {
    if (window.google && window.google.accounts && window.google.accounts.id) {
      window.google.accounts.id.disableAutoSelect();
    }
  }, []);

  const onGoogleSuccess = async (credentialResponse) => {
    try {
      const token = credentialResponse.credential;
      const res = await axios.post(
        "http://localhost:8080/myapp_backend/login.php",
        {
          provider: "google",
          token: token,
        }
      );
      setMessage(res.data.message);
      setUser(res.data.user || { name: "Google User" });
      setMessage("Đăng nhập thành công");
      navigate("/home");
    } catch (error) {
      setMessage("Lỗi kết nối server");
    }
  };

  const onGoogleError = () => {
    setMessage("Đăng nhập Google thất bại");
  };

  return (
    <div className="auth-page">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Login</h3>

        {user ? (
          <p>Xin chào, {user.name}</p>
        ) : (
          <>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Email or Phone"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
          </>
        )}

        {message && (
          <p style={{ textAlign: "center", marginTop: "15px" }}>{message}</p>
        )}

        {!user && (
          <>
            <div className="auth-switch">
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </div>

            <GoogleLogin onSuccess={onGoogleSuccess} onError={onGoogleError} />
          </>
        )}
      </form>
    </div>
  );
}

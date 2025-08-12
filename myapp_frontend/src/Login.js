import React, { useState } from "react";
import axios from "axios";
import "./Auth.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null); // lưu info user Google

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
      // giả sử backend trả về info user trong res.data.user
      setUser(res.data.user || { name: "Google User" });
      setMessage("Đăng nhập thành công");
    } catch (error) {
      setMessage("Lỗi kết nối server");
    }
  };

  const onGoogleError = () => {
    setMessage("Đăng nhập Google thất bại");
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3>Login Here</h3>

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

            <button type="submit">Log In</button>
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
    </>
  );
}

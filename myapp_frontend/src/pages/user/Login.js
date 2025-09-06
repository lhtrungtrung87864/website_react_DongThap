import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../../assets/css/Auth.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    
 

    try {
      // Lấy danh sách user từ backend
      const res = await fetch(`${process.env.REACT_APP_API_AUTH_URL}`);
      const users = await res.json();

      // Kiểm tra username & password
      const user = users.find(
        (u) => u.username === username && u.password === password
      );

      if (user) {
        alert(`Đăng nhập thành công! Chào ${user.fullname}`);

        const userSafe = {
          username: user.username,
          fullname: user.fullname,
          role: user.role,
        };

        localStorage.setItem("user", JSON.stringify(userSafe));

        if (user.role === "admin") {
          navigate("/homeadmin");
        } else {
          navigate("/");
        }
      } else {
        alert("Sai username hoặc password");
      }
    } catch (err) {
      console.error(err);
      alert("Đăng nhập thất bại, vui lòng thử lại");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
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

          <button type="submit" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Login"}
          </button>

          <div>
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import usersData from "../data/users.json";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Auth.css";

export default function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers && storedUsers.length > 0) {
      setUsers(storedUsers);
    } else {
      localStorage.setItem("users", JSON.stringify(usersData));
      setUsers(usersData);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();

    const exists = users.find((u) => u.username === username);
    if (exists) {
      setMessage("Tài khoản đã tồn tại");
      return;
    }

    const newUser = { username, password, name, role };
    const updatedUsers = [...users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setMessage("Đăng ký thành công");
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <form onSubmit={handleRegister}>
        <h3>Register</h3>

        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

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

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user">User</option>
          
        </select>

        <button type="submit">Register</button>

        {message && <p>{message}</p>}

        <div>
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </div>
      </form>
    </div>
  );
}

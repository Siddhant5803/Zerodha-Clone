import React, { useState } from "react";
import { signup, login } from "../../services/auth";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css";
const SignupPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { login: doLogin, setLoading } = useAuth();
  const navigate = useNavigate();
  const toggle = () => setIsLogin(!isLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { token } = isLogin ? await login(form) : await signup(form);
      doLogin(token);
      navigate("/");              // go home after auth
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "4rem auto" }}>
      <h2>{isLogin ? "Log In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          placeholder="Email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />
        <button type="submit">{isLogin ? "Log In" : "Create Account"}</button>
      </form>
      <p style={{ marginTop: "1rem", cursor: "pointer", color: "blue" }} onClick={toggle}>
        {isLogin ? "Need an account? Sign up" : "Have an account? Log in"}
      </p>
    </div>
  );
};

export default SignupPage;

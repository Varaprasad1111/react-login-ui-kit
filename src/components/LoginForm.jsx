import React, { useState } from "react";

export default function LoginForm({ onSwitch }) {
  const [form, setForm] = useState({ email: "", password: "", remember: true });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password && form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // This is just a UI template – no real auth.
    console.log("Login submit", form);
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Welcome back</h2>
      <p className="auth-form__subtitle">
        Sign in to your account to continue.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Email
          <input
            type="email"
            name="email"
            className={`form-input ${errors.email ? "form-input--error" : ""}`}
            placeholder="you@example.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </label>

        <label className="form-label">
          Password
          <input
            type="password"
            name="password"
            className={`form-input ${
              errors.password ? "form-input--error" : ""
            }`}
            placeholder="••••••••"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="form-error">{errors.password}</span>
          )}
        </label>

        <div className="form-row form-row--between">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="remember"
              checked={form.remember}
              onChange={handleChange}
            />
            <span>Remember me</span>
          </label>
          <button
            type="button"
            className="text-button"
            onClick={() => onSwitch("forgot")}
          >
            Forgot password?
          </button>
        </div>

        <button type="submit" className="primary-button">
          Sign in
        </button>
      </form>

      <p className="auth-switch">
        New here?{" "}
        <button
          type="button"
          className="text-button"
          onClick={() => onSwitch("signup")}
        >
          Create an account
        </button>
      </p>
    </div>
  );
}

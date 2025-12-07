import React, { useState } from "react";

export default function SignupForm({ onSwitch }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
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
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (form.password && form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (!form.agree) {
      newErrors.agree = "You must agree to the terms";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log("Signup submit", form);
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Create an account</h2>
      <p className="auth-form__subtitle">Set up your profile in a minute.</p>

      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Full name
          <input
            type="text"
            name="name"
            className={`form-input ${errors.name ? "form-input--error" : ""}`}
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </label>

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
            placeholder="At least 6 characters"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className="form-error">{errors.password}</span>
          )}
        </label>

        <label className="form-label">
          Confirm password
          <input
            type="password"
            name="confirmPassword"
            className={`form-input ${
              errors.confirmPassword ? "form-input--error" : ""
            }`}
            placeholder="Repeat password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <span className="form-error">{errors.confirmPassword}</span>
          )}
        </label>

        <label className="checkbox-label">
          <input
            type="checkbox"
            name="agree"
            checked={form.agree}
            onChange={handleChange}
          />
          <span>
            I agree to the <strong>Terms & Privacy</strong>
          </span>
        </label>
        {errors.agree && <span className="form-error">{errors.agree}</span>}

        <button type="submit" className="primary-button">
          Create account
        </button>
      </form>

      <p className="auth-switch">
        Already have an account?{" "}
        <button
          type="button"
          className="text-button"
          onClick={() => onSwitch("login")}
        >
          Sign in
        </button>
      </p>
    </div>
  );
}

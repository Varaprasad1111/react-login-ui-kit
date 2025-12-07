import React, { useState } from "react";

export default function ForgotPasswordForm({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email is required");
      return;
    }
    setError("");
    setSubmitted(true);
    console.log("Password reset request:", email);
  };

  return (
    <div className="auth-form">
      <h2 className="auth-form__title">Reset password</h2>
      <p className="auth-form__subtitle">
        Enter your email and we’ll send you a reset link.
      </p>

      <form onSubmit={handleSubmit} className="form">
        <label className="form-label">
          Email
          <input
            type="email"
            className={`form-input ${error ? "form-input--error" : ""}`}
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && <span className="form-error">{error}</span>}
        </label>

        <button type="submit" className="primary-button">
          Send reset link
        </button>

        {submitted && !error && (
          <p className="success-message">
            If an account exists with that email, a reset link has been sent.
          </p>
        )}
      </form>

      <p className="auth-switch">
        Remembered your password?{" "}
        <button
          type="button"
          className="text-button"
          onClick={() => onSwitch("login")}
        >
          Back to sign in
        </button>
      </p>
    </div>
  );
}

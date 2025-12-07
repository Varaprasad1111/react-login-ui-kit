import React from "react";

export default function AuthLayout({ children, theme, onToggleTheme }) {
  return (
    <div className="auth-root">
      <div className="auth-card">
        <div className="auth-side auth-side--info">
          <div className="brand">
            <span className="brand-logo">⚡</span>
            <span className="brand-name">Login-UI Kit</span>
          </div>
          <h1 className="auth-title">Modern Authentication UI</h1>
          <p className="auth-subtitle">
            Reusable login, signup and recovery screens designed for SaaS,
            dashboards and mobile-first apps.
          </p>
          <ul className="auth-features">
            <li>✅ Responsive layout</li>
            <li>✅ Light / dark theme ready</li>
            <li>✅ Clean, reusable components</li>
          </ul>
          <button className="theme-toggle" onClick={onToggleTheme}>
            Switch to {theme === "light" ? "dark" : "light"} mode
          </button>
        </div>

        <div className="auth-side auth-side--form">
          {children}
          <p className="footer-note">Demo UI • No backend connected</p>
        </div>
      </div>
    </div>
  );
}

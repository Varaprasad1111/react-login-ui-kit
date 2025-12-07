import React, { useState, useEffect } from "react";
import AuthLayout from "./components/AuthLayout";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

export default function App() {
  const [activeScreen, setActiveScreen] = useState("login"); // "login" | "signup" | "forgot"
  const [theme, setTheme] = useState("light"); // "light" | "dark"

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const renderScreen = () => {
    switch (activeScreen) {
      case "signup":
        return <SignupForm onSwitch={setActiveScreen} />;
      case "forgot":
        return <ForgotPasswordForm onSwitch={setActiveScreen} />;
      case "login":
      default:
        return <LoginForm onSwitch={setActiveScreen} />;
    }
  };

  return (
    <AuthLayout
      theme={theme}
      onToggleTheme={() =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }
    >
      {renderScreen()}
    </AuthLayout>
  );
}

"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isLightMode, setIsLightMode] = useState(theme === "light");

  useEffect(() => {
    setMounted(true);
    setIsLightMode(theme === "light");
  }, [theme]);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(isLightMode ? "dark" : "light");
    setIsLightMode(!isLightMode);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {isLightMode ? (
          <>
            <BsMoon />
          </>
        ) : (
          <>
            <BsSun />
          </>
        )}
      </button>
    </div>
  );
}

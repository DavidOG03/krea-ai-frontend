"use client";

import { useEffect } from "react";

interface ThemeProps {
  theme: string;
  setTheme: (value: "light" | "dark") => void;
}
export default function ThemeToggle({ theme, setTheme }: ThemeProps) {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [setTheme]);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setTheme("dark");
    }
  };

  return (
    <li className="cursor-pointer">
      <button
        onClick={toggleTheme}
        aria-label="theme"
        className="hover:bg-accent-foreground/20 bg-accent flex h-[30px] w-[30px] items-center justify-center rounded-lg text-foreground dark:text-foreground/70 backdrop-blur-lg transition-colors duration-150 ease-[cubic-bezier(.33,0,.2,1)] hover:text-foreground cursor-pointer dark:hover:text-foreground/65 "
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <title>moon_fill</title>
            <path d="M21 12.79A9 9 0 0 1 11.21 3c0 .34.02.67.07 1A7 7 0 0 0 12 21a7 7 0 0 0 9-8.21c-.33.05-.66.07-1.01.07z" />
          </svg>
        ) : (
          // ☀️ Sun icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <title>sun_fill</title>
            <g id="sun_fill" fill="none">
              <path
                fill="currentColor"
                d="M12 19a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1m6.364-2.05.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414M5.636 16.95a1 1 0 0 1 1.497 1.32l-.083.094-.707.707a1 1 0 0 1-1.497-1.32l.083-.094zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12m-8 5a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm17 0a1 1 0 1 1 0 2h-1a1 1 0 0 1 0-2zM4.929 4.929a1 1 0 0 1 1.32-.083l.094.083.707.707a1 1 0 0 1-1.32 1.497l-.094-.083-.707-.707a1 1 0 0 1 0-1.414m14.142 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0M12 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1"
              ></path>
            </g>
          </svg>
        )}
      </button>
    </li>
  );
}

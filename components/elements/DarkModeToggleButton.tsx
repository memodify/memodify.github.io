import { useEffect } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";

// Thanks, https://tailwindcomponents.com/component/switch-to-darkmode
export function DarkModeToggleButton() {
  useEffect(() => {
    setDarkMode();
  }, []);

  return (
    <SwitchPrimitive.Root
      className="w-10 h-5
                 rounded-full
                 relative
                 flex items-center
                 focus:outline-none
                 drop-shadow
                 bg-white
                 cursor-default"
      onCheckedChange={toggleDarkMode}
    >
      <SwitchPrimitive.Thumb
        className="
            w-6 h-6
            p-1
            relative rounded-full
            transition-transform
                -translate-x-2
            dark:translate-x-full
            bg-yellow-500 text-white dark:bg-gray-700 "
      >
        {lightIcon}
        {darkIcon}
      </SwitchPrimitive.Thumb>
    </SwitchPrimitive.Root>
  );
}

const lightIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="dark:hidden"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const darkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className="hidden dark:block"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

function toggleDarkMode() {
  if (localStorage.theme === "dark") {
    localStorage.theme = "light";
  } else {
    localStorage.setItem("theme", "dark");
  }
  setDarkMode();
}

function setDarkMode() {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  console.debug(`toggleDarkMode:`, media);
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) && media.matches)
  ) {
    console.debug(`applying dark mode`);
    document.documentElement.classList.add("dark");
  } else {
    console.debug(`applying light mode`);
    document.documentElement.classList.remove("dark");
  }
}

import type { AppProps } from "next/app";
import { useEffect } from "react";
import "tailwindcss/tailwind.css";
import { setupGA, useTracking } from "../lib/ga";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_MEASUREMENT_ID;
  useEffect(() => {
    setupGA(id);
  });
  useTracking(id);
  return <Component {...pageProps} />;
}
export default MyApp;

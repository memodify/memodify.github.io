import "../styles/globals.css";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import { useEffect } from "react";
import { setupGA, useTracking } from "../lib/ga";

function MyApp({ Component, pageProps }: AppProps) {
  const id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID;
  useEffect(() => {
    setupGA(id);
  });
  useTracking(id);
  return <Component {...pageProps} />;
}
export default MyApp;

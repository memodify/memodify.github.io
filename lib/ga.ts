import { useRouter } from "next/router";
import { useEffect } from "react";

// https://qiita.com/Nishi53454367/items/b74c66c988539a7f8d4d
const gtagId = `gtag${Date.now()}`;
const gtagScriptId = `gtagscript${Date.now()}`;

export function setupGA(gaId: string | undefined) {
  document.getElementById(gtagScriptId)?.remove();
  document.getElementById(gtagId)?.remove();
  if (!gaId) {
    console.debug(`no given measurement-id.`);
    return;
  }
  console.debug(`will set up GA.`);

  const loadGtag = document.createElement("script");
  loadGtag.id = gtagId;
  loadGtag.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  loadGtag.async = true;
  document.head.appendChild(loadGtag);

  const initGtag = document.createElement("script");
  initGtag.id = gtagScriptId;
  initGtag.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', '${gaId}');
  `;
  document.head.appendChild(initGtag);
}

declare global {
  interface Window {
    gtag?: (
      key: string,
      trackingId: string,
      config: { page_path: string }
    ) => void;
  }
}

export function useTracking(gaId: string | undefined) {
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeStart", (location) => {
      if (!window.gtag) {
        return;
      }
      if (!gaId) {
        return;
      }
      window.gtag("config", gaId, {
        page_path: location.pathname,
      });
    });
  });
}

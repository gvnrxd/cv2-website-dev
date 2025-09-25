import { useEffect, useRef, useState } from "react";

export default function CalendlyEmbed() {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const init = () => {
      if (!ref.current) return;
      if (!ref.current.querySelector("iframe")) {
        window.Calendly?.initInlineWidget({
          url: "https://calendly.com/gvnrxd-dev/free-consult",
          parentElement: ref.current,
        });
      }
      // detect the injected iframe
      const obs = new MutationObserver(() => {
        const iframe = ref.current?.querySelector("iframe");
        if (iframe) {
          // mark loaded on iframe load or immediately if already loaded
          iframe.addEventListener("load", () => setLoaded(true), {
            once: true,
          });
          setLoaded(true);
          obs.disconnect();
        }
      });
      obs.observe(ref.current, { childList: true });
      // fallback in case mutation missed
      setTimeout(() => {
        if (ref.current?.querySelector("iframe")) setLoaded(true);
      }, 1000);
    };

    // run after script is present
    if (window.Calendly?.initInlineWidget) init();
    else {
      const t = setInterval(() => {
        if (window.Calendly?.initInlineWidget) {
          clearInterval(t);
          init();
        }
      }, 200);
      return () => clearInterval(t);
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        minWidth: 320,
        height: loaded ? 700 : 100, // grow when iframe appears
        transition: "height 0.4s ease",
        overflow: "hidden",
      }}
    />
  );
}

"use client";

import { useEffect } from "react";

const Calendario = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.nonce = "Gsde7EQvtNPnHRVq0FvmQQ";
    script.innerHTML = `
        (function (C, A, L) {
          let p = function (a, ar) { a.q.push(ar); };
          let d = C.document;
          C.Cal = C.Cal || function () {
            let cal = C.Cal;
            let ar = arguments;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              d.head.appendChild(d.createElement("script")).src = A;
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const api = function () { p(api, arguments); };
              const namespace = ar[1];
              api.q = api.q || [];
              typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
              return;
            }
            p(cal, ar);
          };
        })(window, "https://app.cal.com/embed/embed.js", "init");
  
        // Inicializa el calendario
        Cal("init", { origin: "https://cal.com" });
  
        // Configuración del calendario
        Cal("inline", {
          elementOrSelector: "#my-cal-inline",
          calLink: "protolylab/productdiscovery",
          layout: "month_view"
        });
  
        Cal("ui", {
          "styles": { "branding": { "brandColor": "#000000" } },
          "hideEventTypeDetails": false,
          "layout": "month_view"
        });
      `;
    document.head.appendChild(script);
  }, []);

  return (
    <div
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      id="my-cal-inline"
    ></div>
  );
};

export default Calendario;

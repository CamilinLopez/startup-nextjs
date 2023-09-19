
"use client";

import { useEffect } from 'react';


const CalendarioWidget = () => {
  useEffect(() => {
    // Código JavaScript incrustado para el calendario
    const script = document.createElement('script');
    script.type = 'text/javascript';
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
    <div style={{ width: '100%', height: '100%', overflow: 'scroll' }} id="my-cal-inline"></div>
  );
};



function Contact() {
  useEffect(() => {
    // Función para cargar el script de Tally
    const loadTallyScript = () => {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;

      script.addEventListener('error', () => {
        console.error('Error: Failed to load Tally script');
      });
      document.body.appendChild(script);
    };

      loadTallyScript();
    
  }, []);

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <iframe
          data-tally-src="https://tally.so/embed/wA2MAo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="200"
          title="Cuestionario Product Discovery"
        ></iframe>
      </div>
    </section>
  );
}

export {Contact,CalendarioWidget};

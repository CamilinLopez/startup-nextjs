
"use client";

import { useEffect } from 'react';

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

export default Contact;

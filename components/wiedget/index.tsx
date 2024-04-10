import React, { useEffect } from "react";

const OnWhatsWidget = () => {
  useEffect(() => {
    // Cargar el script del widget cuando el componente se monte
    const script = document.createElement("script");
    script.src = "https://widget.onwhats.app/js/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script del widget cuando el componente se desmonte
      document.body.removeChild(script);
    };
  }, []);

  return (
    // Agregar el div donde se mostrará el widget
    <div id="owadiv_odjxVaamUcLHhdxKMsPhY142Lvp4D3NuMsMFQQkf"></div>
  );
};

export default OnWhatsWidget;

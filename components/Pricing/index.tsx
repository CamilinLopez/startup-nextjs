"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Planes"
          paragraph="Da vida a tu idea"
          center
          width="665px"
        />

        <div className="w-full">
          <div
            className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
            data-wow-delay=".1s"
          >
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Pago único  
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Prototipo"
            price={isMonthly ? "2890" : "150"}
            duration={isMonthly ? "pu" : "me"}
            subtitle="Branding, mockups y página de destino para ayudarle a atraer usuarios potenciales, validar la demanda y probar sus suposiciones más riesgosas."
          >
            <OfferList text="Naming y Dominio.cl o .com" status="active" />
            <OfferList text="Logotipo" status="active" />
            <OfferList text="Paleta de colores y tipografía" status="active" />
            <OfferList text="Landing Page" status="active" />
            <OfferList text="Redacción" status="active" />
            <OfferList
              text="Maquetas de software (Máx 5 pantallas)"
              status="active" 
            />
            <OfferList text="Colección de correo electrónico" status="active" />
            <OfferList text="Análisis de sitios web" status="active" />
          </PricingBox>
          <PricingBox
            packageName="MVP Web App"
            price={isMonthly ? "8590" : "789"}
            duration={isMonthly ? "pu" : "me"}
            subtitle="Una aplicación web MVP para validar el valor de sus productos, generar ingresos e iterar para adaptar el producto al mercado."
          >
            <OfferList text="Todo lo de Prototipo" status="active" />
            <OfferList
              text="Sitio web (1) página o en One Page"
              status="active"
            />
            <OfferList
              text="Aplicación Web (4 Funcionalidades)"
              status="active"
            />
            <OfferList text="Autenticacion de usuario" status="active" />
            <OfferList text="Integración de pagos" status="active" />
            <OfferList text="Integraciones API" status="active" />
            <OfferList
              text="Estrategia de marketing personalizada"
              status="active"
            />
            <OfferList
              text="Servidores & micro servicios costos por separados"
              status="active"
            />
          </PricingBox>
          <PricingBox
            packageName="MVP App Móvil Híbrida"
            price={isMonthly ? "7490" : "889"}
            duration={isMonthly ? "pu" : "me"}
            subtitle="App Móvil Híbrida en Flutter o React Native (iOS & Android), MVP para validar el valor de sus productos, generar ingresos e iterar para adaptar el producto al mercado."
          >
            <OfferList text="Todo lo de Prototipo" status="active" />
            <OfferList
              text="Sitio web (1) páginas o en One Page"
              status="active"
            />
            <OfferList
              text="Aplicación Móvil (3 Funcionalidades)"
              status="active"
            />
            <OfferList text="Autenticacion de usuario" status="active" />
            <OfferList text="Integración de pagos" status="active" />
            <OfferList text="Integraciones API" status="active" />
            <OfferList
              text="Estrategia de marketing personalizada"
              status="active"
            />
            <OfferList
              text="Membresías (iOS & Android) & Micro servicios costos por separados"
              status="active"
            />
          </PricingBox>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Pricing;

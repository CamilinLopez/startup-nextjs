import { Block, BlockInfo, ProcessInfo } from "@/types/blocks";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const xIcon = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    className="fill-current"
  >
    <line x1="0" y1="0" x2="16" y2="16" stroke="#4A6CF7" strokeWidth="3" />
    <line x1="16" y1="0" x2="0" y2="16" stroke="#4A6CF7" strokeWidth="3" />
  </svg>
);

export const blocksInfo: Block[] = [
  {
    id: 1,
    title: "Freelance/Contrataciones",
    item1: {
      text: "Producto personalizado",
      log: checkIcon,
    },
    item2: {
      text: "Costoso (más de £30,000)",
      log: xIcon,
    },
    item3: {
      text: "Larga duración (más de 3 meses)",
      log: xIcon,
    },
    item4: {
      text: "Proceso autogestionado",
      log: xIcon,
    },
    item5: {
      text: "Falta de conocimiento sobre el fundador/MVP",
      log: xIcon,
    },
  },
  {
    id: 2,
    title: "Agencias",
    item1: {
      text: "Producto personalizado",
      log: checkIcon,
    },
    item2: {
      text: "Costoso (más de £40,000)",
      log: xIcon,
    },
    item3: {
      text: "Larga duración (más de 3 meses)",
      log: xIcon,
    },
    item4: {
      text: "Proceso intenso",
      log: xIcon,
    },
    item5: {
      text: "Falta de conciencia sobre el MVP",
      log: xIcon,
    },
  },
  {
    id: 3,
    title: "Sin programación",
    item1: {
      text: "Producto limitado",
      log: xIcon,
    },
    item2: {
      text: "Bajo costo",
      log: checkIcon,
    },
    item3: {
      text: "Larga duración (más de 3 meses)",
      log: xIcon,
    },
    item4: {
      text: "Proceso difícil",
      log: xIcon,
    },
    item5: {
      text: "Self Awareness",
      log: xIcon,
    },
  },
  {
    id: 4,
    title: "Cofundador técnico",
    item1: {
      text: "Producto personalizado",
      log: checkIcon,
    },
    item2: {
      text: "Alto costo (50% de propiedad)",
      log: xIcon,
    },
    item3: {
      text: "Larga duración (4+ meses)",
      log: xIcon,
    },
    item4: {
      text: "Proceso intenso",
      log: xIcon,
    },
    item5: {
      text: "Self Awareness",
      log: xIcon,
    },
  },
];

export const blocksInfo1 = [
  {
    text: "Producto personalizado",
    log: checkIcon,
  },
  {
    text: "Gran valor (£ 7,5 mil)",
    log: checkIcon,
  },
  {
    text: "Corta duración (4-6 semanas)",
    log: checkIcon,
  },
  {
    text: "Simple process",
    log: checkIcon,
  },
  {
    text: "Conocimiento del fundador y MVP",
    log: checkIcon,
  },
];

export const blocksInfo2: BlockInfo[] = [
  {
    id: 1,
    title: "MVP que realmente necesitas",
    log: "images/about/logo2.svg",
    text: "No más productos sobrediseñados. Creamos productos fantásticos, funcionales y efectivos que los fundadores utilizan para adaptar el producto al mercado, reduciendo su riesgo de capital y tiempo.",
  },
  {
    id: 2,
    title: "Paga solo por lo necesario",
    log: "images/about/logo3.svg",
    text: "Evite pagar por miembros de agencia y alcance innecesarios, o perder el tiempo administrando trabajadores independientes. Pague solo por lo que se necesita, un dúo dedicado de diseñador y desarrollador.",
  },
];

export const processInfo: ProcessInfo[] = [
  {
    id: 1,
    title: "Responder en",
    weeks: "24 horas",
  },
  {
    id: 2,
    title: "Confirmar en",
    weeks: "5 dias",
  },
  {
    id: 3,
    title: "Completa en",
    weeks: "4-6 semanas",
  },
];

import { Block, BlockInfo } from "@/types/blocks";

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
    title: "Freelance/Hires",
    item1: {
      text: "Custom product",
      log: checkIcon,
    },
    item2: {
      text: "Expensive (£30k+)",
      log: xIcon,
    },
    item3: {
      text: "Long duration (3+ months)",
      log: xIcon,
    },
    item4: {
      text: "Self-managed process",
      log: xIcon,
    },
    item5: {
      text: "Lack founder/MVP awareness",
      log: xIcon,
    },
  },
  {
    id: 2,
    title: "Agencies",
    item1: {
      text: "Custom product",
      log: checkIcon,
    },
    item2: {
      text: "Expensive (£40k+)",
      log: xIcon,
    },
    item3: {
      text: "Long duration (3+ months)",
      log: xIcon,
    },
    item4: {
      text: "Intense process",
      log: xIcon,
    },
    item5: {
      text: "Lack MVP awareness",
      log: xIcon,
    },
  },
  {
    id: 3,
    title: "No-Code",
    item1: {
      text: "Limited product",
      log: xIcon,
    },
    item2: {
      text: "Low cost",
      log: checkIcon,
    },
    item3: {
      text: "Long duration (3+ months)",
      log: xIcon,
    },
    item4: {
      text: "Difficult process",
      log: xIcon,
    },
    item5: {
      text: "Self Awareness",
      log: xIcon,
    },
  },
  {
    id: 4,
    title: "Technical Co-Founder",
    item1: {
      text: "Custom product",
      log: checkIcon,
    },
    item2: {
      text: "High cost (50% ownership)",
      log: xIcon,
    },
    item3: {
      text: "Long duration (4+ months)",
      log: xIcon,
    },
    item4: {
      text: "Intense process",
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
    text: "Custom product",
    log: checkIcon,
  },
  {
    text: "Great value (£7.5k)",
    log: checkIcon,
  },
  {
    text: "Short duration (4-6 weeks)",
    log: checkIcon,
  },
  {
    text: "Simple process",
    log: checkIcon,
  },
  {
    text: "Founder & MVP awareness",
    log: checkIcon,
  },
];

export const blocksInfo2: BlockInfo[] = [
  {
    id: 1,
    title: "MVPs you actually need",
    log: "images/about/logo2.svg",
    text: "No more over-engineered products. We build fantastic, functional, and effective products that founders use to iterate to product-market fit, reducing your capital and time risk.",
  },
  {
    id: 2,
    title: "Only pay for what's needed",
    log: "images/about/logo3.svg",
    text: "Avoid paying for unnecessary scope and agency members, or wasting time managing freelancers. Only pay for what’s needed, a dedicated duo of designer & developer.",
  },
];

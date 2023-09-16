import { Data } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";


const data: Data[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 24 24" className="fill-current">
        <path d="M15.5306 9.53063L13.0603 12L15.5306 14.4694C15.6003 14.5391 15.6556 14.6218 15.6933 14.7128C15.731 14.8039 15.7504 14.9015 15.7504 15C15.7504 15.0985 15.731 15.1961 15.6933 15.2872C15.6556 15.3782 15.6003 15.4609 15.5306 15.5306C15.4609 15.6003 15.3782 15.6556 15.2872 15.6933C15.1961 15.731 15.0986 15.7504 15 15.7504C14.9015 15.7504 14.8039 15.731 14.7128 15.6933C14.6218 15.6556 14.5391 15.6003 14.4694 15.5306L12 13.0603L9.53063 15.5306C9.46095 15.6003 9.37822 15.6556 9.28718 15.6933C9.19613 15.731 9.09855 15.7504 9 15.7504C8.90146 15.7504 8.80388 15.731 8.71283 15.6933C8.62179 15.6556 8.53906 15.6003 8.46938 15.5306C8.3997 15.4609 8.34442 15.3782 8.30671 15.2872C8.269 15.1961 8.24959 15.0985 8.24959 15C8.24959 14.9015 8.269 14.8039 8.30671 14.7128C8.34442 14.6218 8.3997 14.5391 8.46938 14.4694L10.9397 12L8.46938 9.53063C8.32865 9.38989 8.24959 9.19902 8.24959 9C8.24959 8.80098 8.32865 8.61011 8.46938 8.46937C8.61011 8.32864 8.80098 8.24958 9 8.24958C9.19903 8.24958 9.3899 8.32864 9.53063 8.46937L12 10.9397L14.4694 8.46937C14.5391 8.39969 14.6218 8.34442 14.7128 8.3067C14.8039 8.26899 14.9015 8.24958 15 8.24958C15.0986 8.24958 15.1961 8.26899 15.2872 8.3067C15.3782 8.34442 15.4609 8.39969 15.5306 8.46937C15.6003 8.53906 15.6556 8.62178 15.6933 8.71283C15.731 8.80387 15.7504 8.90145 15.7504 9C15.7504 9.09855 15.731 9.19613 15.6933 9.28717C15.6556 9.37822 15.6003 9.46094 15.5306 9.53063ZM21.75 12C21.75 13.9284 21.1782 15.8134 20.1068 17.4168C19.0355 19.0202 17.5127 20.2699 15.7312 21.0078C13.9496 21.7458 11.9892 21.9389 10.0979 21.5627C8.20656 21.1865 6.46928 20.2579 5.10571 18.8943C3.74215 17.5307 2.81355 15.7934 2.43735 13.9021C2.06114 12.0108 2.25422 10.0504 2.99218 8.26884C3.73013 6.48726 4.97982 4.96452 6.58319 3.89317C8.18657 2.82183 10.0716 2.25 12 2.25C14.585 2.25273 17.0634 3.28084 18.8913 5.10872C20.7192 6.93661 21.7473 9.41498 21.75 12ZM20.25 12C20.25 10.3683 19.7662 8.77325 18.8596 7.41655C17.9531 6.05984 16.6646 5.00242 15.1571 4.37799C13.6497 3.75357 11.9909 3.59019 10.3905 3.90852C8.79017 4.22685 7.32016 5.01259 6.16637 6.16637C5.01259 7.32015 4.22685 8.79016 3.90853 10.3905C3.5902 11.9908 3.75358 13.6496 4.378 15.1571C5.00242 16.6646 6.05984 17.9531 7.41655 18.8596C8.77326 19.7661 10.3683 20.25 12 20.25C14.1873 20.2475 16.2843 19.3775 17.8309 17.8309C19.3775 16.2843 20.2475 14.1873 20.25 12Z" />
      </svg>
    ),
    title: "Fundadores no técnicos",
    text: "Seremos su cofundador técnico como servicio, ahorrándole molestias y equidad.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="41" viewBox="0 0 24 24" className="fill-current">
        <g clip-path="url(#clip0_536_20123)">
          <path d="M21.5934 13.2244C21.3144 13.0096 20.9895 12.8622 20.6442 12.7934C20.2988 12.7246 19.9422 12.7364 19.6022 12.8278L15.6797 13.7297C15.7709 13.3442 15.7738 12.943 15.6879 12.5563C15.6021 12.1695 15.4298 11.8072 15.1841 11.4965C14.9383 11.1858 14.6254 10.9347 14.2688 10.7622C13.9122 10.5896 13.5212 10.5 13.125 10.5H8.43188C8.03775 10.499 7.64733 10.5761 7.28319 10.7269C6.91904 10.8777 6.58838 11.0991 6.31031 11.3784L4.18969 13.5H1.5C1.10218 13.5 0.720644 13.658 0.43934 13.9393C0.158035 14.2206 0 14.6022 0 15L0 18.75C0 19.1478 0.158035 19.5294 0.43934 19.8107C0.720644 20.092 1.10218 20.25 1.5 20.25H11.25C11.3113 20.25 11.3724 20.2425 11.4319 20.2275L17.4319 18.7275C17.4701 18.7184 17.5075 18.7058 17.5434 18.69L21.1875 17.1394L21.2288 17.1206C21.579 16.9456 21.8789 16.6843 22.1002 16.3614C22.3215 16.0385 22.457 15.6645 22.4939 15.2747C22.5307 14.8849 22.4678 14.4922 22.3109 14.1335C22.154 13.7748 21.9084 13.4619 21.5972 13.2244H21.5934ZM1.5 15H3.75V18.75H1.5V15ZM20.5716 15.7697L17.0091 17.2866L11.1562 18.75H5.25V14.5603L7.37156 12.4397C7.51035 12.2998 7.67555 12.1889 7.85758 12.1134C8.0396 12.0379 8.23482 11.9994 8.43188 12H13.125C13.4234 12 13.7095 12.1185 13.9205 12.3295C14.1315 12.5405 14.25 12.8266 14.25 13.125C14.25 13.4234 14.1315 13.7095 13.9205 13.9205C13.7095 14.1315 13.4234 14.25 13.125 14.25H10.5C10.3011 14.25 10.1103 14.329 9.96967 14.4697C9.82902 14.6103 9.75 14.8011 9.75 15C9.75 15.1989 9.82902 15.3897 9.96967 15.5303C10.1103 15.671 10.3011 15.75 10.5 15.75H13.5C13.5565 15.7498 13.6127 15.7436 13.6678 15.7313L19.9491 14.2866L19.9781 14.2791C20.1699 14.2258 20.3745 14.2454 20.5527 14.334C20.7309 14.4226 20.87 14.5739 20.9434 14.7589C21.0167 14.9439 21.0189 15.1495 20.9498 15.3361C20.8806 15.5227 20.7449 15.6771 20.5687 15.7697H20.5716ZM15.375 9C15.5603 9.00021 15.7453 8.98516 15.9281 8.955C16.1338 9.56582 16.51 10.105 17.0124 10.5088C17.5147 10.9125 18.1222 11.164 18.763 11.2335C19.4037 11.3029 20.051 11.1875 20.6282 10.9008C21.2054 10.614 21.6884 10.168 22.0202 9.61547C22.352 9.06291 22.5186 8.42691 22.5004 7.78266C22.4821 7.1384 22.2798 6.51284 21.9173 5.97993C21.5548 5.44703 21.0473 5.02905 20.4548 4.77543C19.8623 4.52181 19.2096 4.44315 18.5737 4.54875C18.3757 3.96023 18.0192 3.43775 17.5434 3.03879C17.0676 2.63984 16.4909 2.37988 15.8769 2.28754C15.2629 2.19519 14.6353 2.27403 14.0631 2.51537C13.491 2.75672 12.9966 3.15123 12.6342 3.65547C12.2719 4.15971 12.0556 4.75414 12.0093 5.37335C11.963 5.99256 12.0885 6.61254 12.3718 7.16506C12.6552 7.71759 13.0854 8.18123 13.6153 8.50497C14.1452 8.82872 14.7541 9.00001 15.375 9ZM21 7.875C21 8.24584 20.89 8.60835 20.684 8.9167C20.478 9.22504 20.1851 9.46536 19.8425 9.60728C19.4999 9.74919 19.1229 9.78632 18.7592 9.71397C18.3955 9.64163 18.0614 9.46305 17.7992 9.20083C17.537 8.9386 17.3584 8.60451 17.286 8.2408C17.2137 7.87708 17.2508 7.50008 17.3927 7.15747C17.5346 6.81486 17.775 6.52202 18.0833 6.316C18.3916 6.10997 18.7542 6 19.125 6C19.6223 6 20.0992 6.19755 20.4508 6.54918C20.8025 6.90081 21 7.37772 21 7.875ZM15.375 3.75C15.784 3.75021 16.1818 3.88416 16.5076 4.13145C16.8334 4.37874 17.0695 4.72579 17.1797 5.11969C16.7956 5.38997 16.4721 5.73744 16.2299 6.13989C15.9878 6.54234 15.8323 6.9909 15.7734 7.45688C15.6425 7.48515 15.509 7.49961 15.375 7.5C14.8777 7.5 14.4008 7.30246 14.0492 6.95083C13.6975 6.5992 13.5 6.12228 13.5 5.625C13.5 5.12772 13.6975 4.65081 14.0492 4.29918C14.4008 3.94755 14.8777 3.75 15.375 3.75Z" />
        </g>
        <defs>
          <clipPath id="clip0_536_20123">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    title: "Recaudación de fondos",
    text: "Nuestros MVP muestran credibilidad y resultados a los inversores, maximizando las posibilidades de un aumento.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="41" viewBox="0 0 24 24" className="fill-current">
        <path d="M22.4414 6.57102C22.3668 6.33831 22.2247 6.13299 22.0333 5.98111C21.8419 5.82922 21.6096 5.73761 21.366 5.71789L17.8767 5.42258L16.5154 2.24914C16.4193 2.02667 16.2602 1.83718 16.0577 1.70406C15.8553 1.57094 15.6182 1.5 15.3759 1.5C15.1336 1.5 14.8965 1.57094 14.694 1.70406C14.4915 1.83718 14.3324 2.02667 14.2364 2.24914L12.8751 5.42352L9.38479 5.71789C9.14243 5.73736 8.91127 5.82817 8.72045 5.97886C8.52964 6.12955 8.38773 6.33337 8.31262 6.56462C8.23751 6.79587 8.23256 7.04418 8.29841 7.27823C8.36426 7.51229 8.49794 7.7216 8.68261 7.87977L11.3226 10.1298L10.5323 13.4795C10.4767 13.7142 10.4916 13.9602 10.5749 14.1866C10.6583 14.413 10.8065 14.6099 11.001 14.7526C11.1979 14.8971 11.433 14.9805 11.6769 14.9921C11.9209 15.0038 12.1629 14.9433 12.3726 14.8182L15.3726 13.037L18.3726 14.8182C18.5824 14.9433 18.8243 15.0038 19.0683 14.9921C19.3122 14.9805 19.5473 14.8971 19.7442 14.7526C19.9388 14.61 20.0871 14.4131 20.1705 14.1867C20.2538 13.9602 20.2686 13.7142 20.2129 13.4795L19.4226 10.1298L22.0617 7.87977C22.2474 7.72371 22.3826 7.51603 22.4502 7.28304C22.5178 7.05006 22.5147 6.80225 22.4414 6.57102ZM18.3295 9.10227C18.1567 9.24862 18.028 9.44001 17.9575 9.65517C17.8869 9.87032 17.8775 10.1008 17.9301 10.321L18.6154 13.2273L16.011 11.6795C15.8188 11.5649 15.5992 11.5044 15.3754 11.5044C15.1516 11.5044 14.932 11.5649 14.7398 11.6795L12.1354 13.2179L12.8207 10.3116C12.8741 10.0915 12.8651 9.86091 12.7947 9.64563C12.7244 9.43036 12.5954 9.23895 12.4223 9.09289L10.1479 7.15977L13.1564 6.90477C13.3796 6.88603 13.5936 6.80685 13.7753 6.6757C13.957 6.54456 14.0995 6.36642 14.1876 6.16039L15.3754 3.39664L16.5604 6.16039C16.6487 6.3663 16.7913 6.54433 16.9729 6.67545C17.1546 6.80657 17.3684 6.88583 17.5917 6.90477L20.6001 7.15977L18.3295 9.10227ZM8.03104 11.7798L2.78104 17.0298C2.64031 17.1705 2.44944 17.2496 2.25042 17.2496C2.05139 17.2496 1.86052 17.1705 1.71979 17.0298C1.57906 16.889 1.5 16.6982 1.5 16.4991C1.5 16.3001 1.57906 16.1092 1.71979 15.9685L6.96979 10.7185C7.11052 10.5778 7.30139 10.4987 7.50042 10.4987C7.69944 10.4987 7.89031 10.5778 8.03104 10.7185C8.17177 10.8592 8.25083 11.0501 8.25083 11.2491C8.25083 11.4482 8.17177 11.639 8.03104 11.7798ZM9.53104 17.0298L4.28104 22.2798C4.21136 22.3494 4.12863 22.4047 4.03759 22.4424C3.94654 22.4801 3.84896 22.4996 3.75042 22.4996C3.65187 22.4996 3.55429 22.4801 3.46324 22.4424C3.3722 22.4047 3.28947 22.3494 3.21979 22.2798C3.15011 22.2101 3.09483 22.1274 3.05712 22.0363C3.01941 21.9453 3 21.8477 3 21.7491C3 21.6506 3.01941 21.553 3.05712 21.462C3.09483 21.3709 3.15011 21.2882 3.21979 21.2185L8.46979 15.9685C8.61052 15.8278 8.80139 15.7487 9.00042 15.7487C9.19944 15.7487 9.39031 15.8278 9.53104 15.9685C9.67177 16.1092 9.75083 16.3001 9.75083 16.4991C9.75083 16.6982 9.67177 16.889 9.53104 17.0298ZM16.281 15.9685C16.3508 16.0382 16.4061 16.1209 16.4438 16.2119C16.4816 16.303 16.501 16.4006 16.501 16.4991C16.501 16.5977 16.4816 16.6953 16.4438 16.7863C16.4061 16.8774 16.3508 16.9601 16.281 17.0298L11.031 22.2798C10.9614 22.3494 10.8786 22.4047 10.7876 22.4424C10.6965 22.4801 10.599 22.4996 10.5004 22.4996C10.4019 22.4996 10.3043 22.4801 10.2132 22.4424C10.1222 22.4047 10.0395 22.3494 9.96979 22.2798C9.90011 22.2101 9.84483 22.1274 9.80712 22.0363C9.76941 21.9453 9.75 21.8477 9.75 21.7491C9.75 21.6506 9.76941 21.553 9.80712 21.462C9.84483 21.3709 9.90011 21.2882 9.96979 21.2185L15.2198 15.9685C15.2894 15.8988 15.3722 15.8435 15.4632 15.8057C15.5543 15.768 15.6519 15.7486 15.7504 15.7486C15.849 15.7486 15.9466 15.768 16.0376 15.8057C16.1287 15.8435 16.2114 15.8988 16.281 15.9685Z" />
      </svg>
    ),
    title: "Emprendedores en serie",
    text: "¿Demasiadas ideas, poco tiempo? Nosotros construiremos el producto, tú haces tu magia.",
  },
  {
    id: 4,
    icon: (
      <svg
        width="40"
        height="41"
        className="fill-current"
        viewBox="0 0 256 256"
      >
        <path d="M103.77,185.94C103.38,187.49,93.63,224,40,224a8,8,0,0,1-8-8c0-53.63,36.51-63.38,38.06-63.77a8,8,0,0,1,3.88,15.53c-.9.25-22.42,6.54-25.56,39.86C81.7,204.48,88,183,88.26,182a8,8,0,0,1,15.51,4Zm93-67.4L192,123.31v58.33A15.91,15.91,0,0,1,187.32,193L153,227.3A15.91,15.91,0,0,1,141.7,232a16.11,16.11,0,0,1-5.1-.83,15.94,15.94,0,0,1-10.78-12.92l-5.37-38.49L76.24,135.55l-38.47-5.37A16,16,0,0,1,28.7,103L63,68.68A15.91,15.91,0,0,1,74.36,64h58.33l4.77-4.77c26.68-26.67,58.83-27.82,71.41-27.07a16,16,0,0,1,15,15C224.6,59.71,223.45,91.86,196.78,118.54ZM40,114.34l37.15,5.18L116.69,80H74.36ZM91.32,128,128,164.68l57.45-57.45a76.46,76.46,0,0,0,22.42-59.16,76.65,76.65,0,0,0-59.11,22.47ZM176,139.31l-39.53,39.53L141.67,216,176,181.64Z"></path>
      </svg>
    ),
    title: "Startups",
    text: "Le damos vida a tu producto para que puedas atraer usuarios y escalar tu negocio.",
  },
];

const Blocks = ({ info }: { info: Data }) => {
  const { icon, text, title } = info;
  return (
    <div className="wow fadeInUp rounded-md flex flex-col items-start md:items-center justify-center w-96 h-60 bg-white shadow-signUp dark:bg-[#1D2144] space-y-4 ">
      <div>{icon}</div>
      <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
      <p className="text-start md:text-center py-4 text-base font-medium text-body-color">{text}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Emprendedores -> Startups"
          paragraph="Con quién trabajamos"
          center
        />
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20">
            {data.map((info) => (
              <Blocks key={info.id} info={info} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-5 right-0 z-[-1]">
        <svg
          width="238"
          height="531"
          viewBox="0 0 238 531"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 bottom-5 z-[-1]">
        <svg
          width="279"
          height="106"
          viewBox="0 0 279 106"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Testimonials;

import { Brand } from "@/types/brand";
import Image from "next/image";

const brandsData: Brand[] = [
  {
    id: 1,
    name: "Mongo DB",
    description: "Database",
    href: "https://www.mongodb.com/es",
    image: "/images/brands/newImages/mongo.svg",
  },
  {
    id: 2,
    name: "Next JS",
    description: "Framework",
    href: "https://nextjs.org/",
    image: "/images/brands/newImages/next.svg",
  },
  {
    id: 3,
    name: "Node JS",
    description: "Framework",
    href: "https://nodejs.org/es",
    image: "/images/brands/newImages/nodejs.svg",
  },
  {
    id: 4,
    name: "Webpay",
    description: "Payment",
    href: "https://www.webpay.cl",
    image: "/images/brands/newImages/webpay.svg",
  },
  {
    id: 5,
    name: "Supabase",
    description: "Authentication",
    href: "https://supabase.com/",
    image: "/images/brands/newImages/supabase.svg",
  },
  {
    id: 6,
    name: "React JS",
    description: "Library",
    href: "https://es.react.dev/",
    image: "/images/brands/newImages/react.svg",
  },
  {
    id: 7,
    name: "Versel",
    description: "Hosting",
    href: "https://vercel.com/",
    image: "/images/brands/newImages/versel.svg",
  },
  {
    id: 8,
    name: "Tailwind CCS",
    description: "Styling",
    href: "https://tailwindcss.com/",
    image: "/images/brands/newImages/tailwind.svg",
  },
  {
    id: 9,
    name: "Figma",
    description: "Desing",
    href: "https://www.figma.com/",
    image: "/images/brands/newImages/figma.svg",
  },
  {
    id: 10,
    name: "Stripe",
    description: "Payments",
    href: "https://stripe.com/es-us",
    image: "/images/brands/newImages/stripe.svg",
  },
  {
    id: 11,
    name: "Flutter",
    description: "Mobile",
    href: "https://stripe.com/es-us",
    image: "/images/brands/newImages/flutter.svg",
  },
];

const Brands = () => {
  return (
    <section className="pt-16">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp flex flex-wrap items-center justify-center rounded-md bg-white py-8 px-2 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]"
              data-wow-delay=".1s
            "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name, description } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[140px] flex-col items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 lg:grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <Image src={image} alt={name} fill />
      </a>
      <p>{name}</p>
      <p className="text-xs">{description}</p>
    </div>
  );
};

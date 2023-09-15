import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { blocksInfo, blocksInfo1, blocksInfo2 } from "./blocksData";
import Blocks, { List } from "./Blocks";
import Blocks1 from "./Blocks1";

const AboutSectionOne = () => {
  return (
    <section id="about" className="lg:pt-28 bg-primary/[.03] ">
      <div className="container">
        <SectionTitle
          title="Por qué nosotros"
          paragraph="Ahorra tiempo, capital y atención."
          center
        />

        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-12">
            {blocksInfo.map((block) => (
              <div key={block.id} className="mb-10 md:mb-14">
                <Blocks block={block} />
              </div>
            ))}
          </div>

          <div className="w-full md:w-1/3 rounded-3xl bg-primary bg-opacity-25 px-0">
            <div className="flex justify-between items-center py-3 px-6">
              <h3 className="text-xl font-bold text-black dark:textw">
                Simple Suite
              </h3>
              <Image
                src="images/about/logo.svg"
                alt="logo"
                width={35}
                height={35}
              />
            </div>
            <div className="py-6 px-6">
              {blocksInfo1.map((item, id) => (
                <List key={id} item={item} />
              ))}
            </div>
            <div
              className="hidden md:block w-full relative"
              style={{ paddingBottom: "75%" }}
            >
              <Image
                className="rounded-3xl object-cover object-center absolute top-0 left-0 w-full h-full"
                src="images/about/logo1.svg"
                alt="logo1"
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-10">
          <h3 className="text-xl font-bold text-black dark:text-white py-6">
          Nuestra Razón
          </h3>
          <div className="flex flex-col md:flex-row w-full justify-around">
            {blocksInfo2.map((block) => (
              <Blocks1 key={block.id} block={block} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;

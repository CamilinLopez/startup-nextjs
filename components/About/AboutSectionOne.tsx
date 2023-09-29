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

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blocksInfo.map((block) => (
              <Blocks key={block.id} block={block} />
            ))}
          </div>
          <div className="rounded-3xl bg-primary bg-opacity-25 p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold text-black dark:text-white">
                Protoly Lab
              </h3>
              <Image
                src="/images/logo/newlogo/protoly SVG.svg"
                alt="logo"
                width={70}
                height={70}
                className="fill-current"
              />
            </div>
            <div className="my-9">
              {blocksInfo1.map((item, id) => (
                <List key={id} item={item} />
              ))}
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

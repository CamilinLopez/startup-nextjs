import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { processInfo } from "./blocksData";
import { ProcessInfo } from "@/types/blocks";

const steps: { count: number; text: string }[] = [
  {
    count: 1,
    text: "Llamada de descubrimiento inicial para conocer su idea y determinar si podemos ayudarlo.",
  },
  {
    count: 2,
    text: "Comience el proyecto con una inmersión profunda para asegurarse de que tenemos todo lo que necesitamos.",
  },
  {
    count: 3,
    text: "Dos llamadas de comentarios para mostrar el progreso de nuestra marca, diseño y construcción.",
  },
  {
    count: 4,
    text: "Actualizaciones asíncronas periódicas para asegurarse de que esté satisfecho con el resultado final.",
  },
];

const Process = ({ processInfo }: { processInfo: ProcessInfo }) => {
  const { title, weeks } = processInfo;
  return (
    <div className="flex flex-col justify-center items-center gap-3 bg-primary bg-opacity-25 p-6 rounded-xl">
      <h3 className="text-xl font-bold text-black dark:text-white">{title}</h3>
      <p className="text-base font-medium text-body-color">{weeks}</p>
    </div>
  );
};

const Steps = ({ step }: { step: { count: number; text: string } }) => {
  const { count, text } = step;
  return (
    <div className="flex items-center m-10 gap-x-5" >
      <h3 className="text-xl font-bold text-black dark:text-white" >{count}</h3>
      <p className="text-base font-medium text-body-color" >{text}</p>
    </div>
  );
};

const AboutSectionTwo = ({}) => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Cómo funciona"
          paragraph="Nuestro proceso simple, rápido y efectivo."
          center
        />
        <div className="flex flex-col items-center" >
          <div className="flex flex-col md:flex-row items-center justify-center">
            <Process key={processInfo[0].id} processInfo={processInfo[0]} />
            <Image
              src="images/about/arrow.svg"
              alt="arrow"
              width={40}
              height={40}
              className="transform rotate-90  md:rotate-0 md:m-0 m-4 "
            />
            <Process key={processInfo[1].id} processInfo={processInfo[1]} />
            <Image
              src="images/about/arrow.svg"
              alt="arrow"
              width={40}
              height={40}
              className="transform rotate-90  md:rotate-0 md:m-0 m-4"
            />
            <Process key={processInfo[2].id} processInfo={processInfo[2]} />
          </div>
          <div className="py-10" >
            {steps.map((step) => (
              <Steps key={step.count} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;

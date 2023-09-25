"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

type Question = {
  id: number;
  title: string;
  text: string;
};

const questions: Question[] = [
  {
    id: 1,
    title: "¿Cómo funciona su proceso?",
    text: "You can start the process by sending us a message or booking an intro call to help us determine if we’re able to support you based on the complexity of your idea. We’ll then create a strategy for bringing your idea to life and present this to you in video format, based on your initial insights. If we're able to support and you're happy with the approach then we can officially kick-start the project by securing an initial deposit (25%). Once a deposit has been made we'll book a discovery call to learn all the little details about your idea and preferences. We’ll then kick start the research process, followed by branding, design, and build, with regular async updates and optional check-in calls to ensure you’re happy with the result. On completion, we’ll send over the final payment link (75%) and transfer all assets to you.",
  },
  {
    id: 2,
    title: "¿Cómo sabes que este es el proceso correcto?",
    text: "In the words of entrepreneur and author of The Lean Startup, Eric Reis - “The minimum viable product is that version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.” A minimum viable product is an essential step to bringing an idea to life, without over investing your time, capital, and attention.",
  },
  {
    id: 3,
    title: "¿Qué es un producto mínimo viable (MVP)?",
    text: 'En palabras del empresario y autor de The Lean Startup, Eric Reis: "El producto mínimo viable es aquella versión de un nuevo producto que permite a un equipo recopilar la máxima cantidad de aprendizaje validado sobre los clientes con el menor esfuerzo". Un producto mínimo viable es un paso esencial para hacer realidad una idea, sin invertir demasiado tiempo, capital y atención.',
  },
  {
    id: 4,
    title: "¿Cómo funciona el pago?",
    text: "Like most of the SaaS products we build, we use Stripe to manage payments, and in alignment with industry best practice we charge 25% as an upfront deposit, and then the remaining 75% on completion.",
  },
  {
    id:5,
    title:"¿Cómo puede mantener la calidad del trabajo?",
    text: "Nos centramos en un proyecto a la vez, lo que significa que usted y su idea reciben toda nuestra atención, ya que creemos que esto genera los mejores resultados."
  }
];

const QuestionTitle = ({ question }: { question: Question }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { text, title } = question;

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="flex flex-col w-full md:w-[700px] p-10 shadow-signUp rounded-xl dark:bg-[#1D2144]">
      <div
        onClick={toggleExpanded}
        className="cursor-pointer flex justify-between items-center"
      >
        <h3 className="text-xl font-bold text-black dark:text-white">
          {title}
        </h3>

        <Image
          className={`w-5 h-5 transition-transform transform ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
          src="/images/faq/ArrowDonw.svg"
          alt="arrow"
          width={20}
          height={20}
        />
      </div>
      {isExpanded && (
        <div
          className={`mt-5 md:mt-10 transition-all ${
            isExpanded ? "max-h-[500px]" : "max-h-0"
          } overflow-hidden`}
        >
          <p className="text-start text-base font-medium text-body-color">
            {text}
          </p>
        </div>
      )}
    </div>
  );
};

function Faq() {
  return (
    <section className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Responde tus dudas"
          paragraph="Preguntas frecuentes"
          center
        />
        <div className="w-full flex flex-col justify-center items-center gap-y-7">
          {questions.map((question) => (
            <QuestionTitle key={question.id} question={question} />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center w-full py-24 gap-y-4">
          <h3 className="text-xl font-bold text-black dark:text-white text-center">
            ¿Tengo una pregunta? Envíanos un correo electrónico
          </h3>
          <a
            className="cursor-pointer text-start text-base font-medium text-body-color"
            href="https://vercel.com/camilinlopez/startup-nextjs"
          >
            {"hello@simplesuite.co ->"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;

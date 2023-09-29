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
    title: "¿Cómo funciona el proceso?",
    text: "Puede comenzar el proceso enviándonos un mensaje o programando una llamada de presentación para ayudarnos a determinar si podemos ayudarlo en función de la complejidad de su idea. Luego, crearemos una estrategia para hacer realidad su idea y se la presentaremos en formato de video, según sus conocimientos iniciales. Si podemos apoyarlo y usted está satisfecho con el enfoque, entonces podemos iniciar oficialmente el proyecto garantizando un depósito inicial (25%). Una vez realizado el depósito, programaremos una llamada de descubrimiento para conocer todos los pequeños detalles sobre su idea y preferencias. Luego, iniciaremos el proceso de investigación, seguido de la marca, el diseño y la creación, con actualizaciones asíncronas periódicas y llamadas de control opcionales para asegurarnos de que esté satisfecho con el resultado. Al finalizar, le enviaremos el enlace de pago final (75%) y le transferiremos todos los activos.",
  },
  {
    id: 2,
    title: "¿Cómo sabes que este es el proceso correcto?",
    text: "Porque hemos estado allí y lo hemos hecho varias veces. Construimos nuestro primer negocio (numerro.io) en 2019 y lo vendimos a Startup Studio en 2021, donde utilizamos este proceso exacto para validar nuestra idea, crear una base de usuarios de la que pudiéramos aprender, iterar para adaptar el producto al mercado y escalar el negocio. Desde entonces, hemos repetido el proceso en nuestros otros proyectos y para otros fundadores. Nuestro proceso y enfoque se basan en las mejores prácticas de algunos de los fundadores más respetados del mundo y ahorran tiempo, capital y atención, los tres recursos más valiosos.",
  },
  {
    id: 3,
    title: "¿Qué es un producto mínimo viable (MVP)?",
    text: 'En palabras del empresario y autor de The Lean Startup, Eric Reis: "El producto mínimo viable es aquella versión de un nuevo producto que permite a un equipo recopilar la máxima cantidad de aprendizaje validado sobre los clientes con el menor esfuerzo". Un producto mínimo viable es un paso esencial para hacer realidad una idea, sin invertir demasiado tiempo, capital y atención.',
  },
  {
    id: 4,
    title: "¿Cómo funciona el pago?",
    text: "Opciones de Pagos:-50% para comenzar y 50% al entregar -8% Descuento Pago 100% por Adelantado-2 a 12 Cuotas por Webpay Plus + 3.4% comisión *Valores neto.",
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
    <section className="py-16 md:py-20 lg:py-28">
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
            href="mailto:protolylab.digital@gmail.com"
          >
            {"protolylab.digital@gmail.com ->"}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Faq;

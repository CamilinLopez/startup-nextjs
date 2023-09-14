const   SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h3 className="mb-3 text-xl font-bold !leading-tight text-black dark:text-white sm:text-xl md:text-[20px]">
          {title}
        </h3>
        <h2 className="text-base !leading-relaxed text-body-color md:text-4xl">
          {paragraph}
        </h2>
      </div>
    </>
  );
};

export default SectionTitle;

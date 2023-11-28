import Calendario from "@/components/Calendario/Calendario";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const BlogSidebarPage = () => {
  return (
    <>
      <Header />
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div>
            <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
              Agendar
            </h2>
          </div>
          <Calendario />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogSidebarPage;

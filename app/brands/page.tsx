import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName="Nuestros proyectos"
        description="El futuro de tu Empresa"
      />
      <div className="container">
        <div className="flex flex-col gap-4">
          {blogData.map((blog) => (
            <div key={blog.id} className="rounded-xl shadow-signUp">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

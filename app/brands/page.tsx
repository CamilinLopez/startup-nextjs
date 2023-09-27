import Breadcrumb from "@/components/Common/Breadcrumb";
import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="Nuestros proyectos" description="" />
      <div className="container">
        <div className="flex flex-col gap-4">
          {blogData.map((blog) => (
            <div className="shadow-signUp rounded-xl" >
              <SingleBlog key={blog.id} blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

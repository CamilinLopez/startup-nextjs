import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Breadcrumb
        pageName="Contactanos"
        description=""
      />

      <Contact />
      <Footer />
    </>
  );
};

export default ContactPage;

import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function page() {
  return (
    <>
      <Breadcrumb pageName="FAQ" description="" />
      <Header />
      <Faq />
      <Footer />
    </>
  );
}

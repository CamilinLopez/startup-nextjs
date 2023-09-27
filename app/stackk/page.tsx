import Brands from "@/components/Brands"
import Breadcrumb from "@/components/Common/Breadcrumb"

export default function page() {
  return (
    <>
    <Breadcrumb description="Trabajamos con." pageName="Stack" />
    <Brands />
    </>
  )
}

import Header               from "@/components/Header";
import HeroBanner           from "@/components/HeroBanner";
import StatsBar             from "@/components/StatsBar";
import Accreditations       from "@/components/Accreditations";
import Placement            from "@/components/Placement";
import PlacementCompanies   from "@/components/PlacementCompanies";
import Courses              from "@/components/Courses";
import IndustryCertPartners from "@/components/IndustryCertPartners";
import Scholarships         from "@/components/Scholarships";
import InternationalCollab  from "@/components/InternationalCollab";
import CampusGallery from "@/components/CampusGallery";
import Testimonials         from "@/components/Testimonials";
import Footer               from "@/components/Footer";
import StickyPhone          from "@/components/StickyPhone";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <StatsBar />
        <Accreditations />
        <Placement />
        <PlacementCompanies />
        <Courses />
        <IndustryCertPartners />
        <Scholarships />
        <InternationalCollab />
        <CampusGallery />
        <Testimonials />
      </main>
      <Footer />
      <StickyPhone />
    </>
  );
}

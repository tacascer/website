import TechCarousel from "@/components/tech/TechCarousel";
import TechHeader from "@/components/tech/TechHeader";

const Tech = () => {
  return (
    <div className="col-lg-10 mx-auto">
      <TechHeader></TechHeader>
      <TechCarousel></TechCarousel>
    </div>
  );
};

export default Tech;

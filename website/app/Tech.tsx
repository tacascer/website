import TechCard from "@/components/tech/TechCard";
import TechHeader from "@/components/tech/TechHeader";

export interface Tech {
  name: string;
  image: string;
  altText: string;
  description: string;
}

const techs: Tech[] = [
  {
    name: "Apache Flink",
    image: "/flink.png",
    altText: "The Flink Logo",
    description:
      "Apache Flink is a framework and distributed processing engine for stateful computations over unbounded and bounded data streams. Flink has been designed to run in all common cluster environments, perform computations at in-memory speed and at any scale.",
  },
];

const Tech = () => {
  const carouselHeight = 450;
  return (
    <div className="col-md-8 mx-auto">
      <TechHeader></TechHeader>
      {techs.map((tech, index) => {
        return <TechCard key={index} {...tech}></TechCard>;
      })}
    </div>
  );
};

export default Tech;

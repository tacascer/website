"use client";

import { Carousel } from "../bootstrap";
import TechCard from "./TechCard";
import { TechList } from "@/app/Tech";

const TechCarousel = ({ techs }: TechList) => {
  return (
    <Carousel slide controls={false} interval={2000} wrap touch>
      {techs.map((tech, index) => {
        return (
          <Carousel.Item key={index} className="mb-4">
            <TechCard {...tech}></TechCard>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TechCarousel;

"use client";

import { Carousel } from "../bootstrap";
import TechCard from "./TechCard";
import { TechList } from "@/app/Tech";

const TechCarousel = ({ techs }: TechList) => {
  return (
    <Carousel
      id="tech-carousel"
      slide
      controls={false}
      interval={2000}
      wrap
      touch
    >
      {techs.map((tech, index) => {
        return (
          <Carousel.Item key={index}>
            <TechCard {...tech}></TechCard>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TechCarousel;

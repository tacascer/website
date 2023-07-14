"use client";

import { Carousel } from "components/bootstrap";
import TechCard from "./TechCard";
export interface Tech {
  name: string;
  image: string;
  altText: string;
  description: string;
  homePage: string;
}

const techs: Tech[] = [
  {
    name: "Next.js",
    image: "/nextjs.svg",
    altText: "The Next.js Logo",
    description:
      "Next.js is a React-based open-source framework used for building server-side rendered (SSR) web applications. It provides features such as automatic code splitting, server-side rendering, and static site generation.",
    homePage: "https://nextjs.org/",
  },
  {
    name: "Spring",
    image: "/spring.svg",
    altText: "The Spring Logo",
    description:
      "Spring is an open-source application framework used for building Java-based enterprise applications. It provides features such as dependency injection, aspect-oriented programming, and support for various data access technologies.",
    homePage: "https://spring.io/",
  },
  {
    name: "Kotlin",
    image: "/kotlin.svg",
    altText: "The Kotlin Logo",
    description:
      "Kotlin is a statically typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript source code. It is designed to be concise, expressive, and safe, and is often used for developing Android applications.",
    homePage: "https://kotlinlang.org/",
  },
  {
    name: "Gradle",
    image: "/gradle.svg",
    altText: "The Gradle Logo",
    description:
      "Gradle is an open-source build automation tool used for building, testing, and deploying software projects. It is designed to be flexible, fast, and easy to use, and is often used for building Java-based applications.",
    homePage: "https://gradle.org/",
  },
  {
    name: "Apache Flink",
    image: "/flink.png",
    altText: "The Flink Logo",
    description:
      "Apache Flink is a framework and distributed processing engine for stateful computations over unbounded and bounded data streams. Flink has been designed to run in all common cluster environments, perform computations at in-memory speed and at any scale.",
    homePage: "https://flink.apache.org/",
  },
  {
    name: "Apache Kafka",
    image: "/kafka.svg",
    altText: "The Kafka Logo",
    description:
      "Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications. It is designed to be fast, scalable, and durable, and is often used for processing large volumes of data in real-time.",
    homePage: "https://kafka.apache.org/",
  },
];

const TechCarousel = () => {
  return (
    <Carousel
      slide
      controls={false}
      interval={2000}
      wrap
      touch
      indicators={false}
      className="px-5"
    >
      {techs.map((tech, index) => {
        return (
          <Carousel.Item className="py-4" key={index}>
            <TechCard {...tech}></TechCard>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TechCarousel;

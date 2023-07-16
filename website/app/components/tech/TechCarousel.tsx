"use client";

import { Carousel } from "react-bootstrap";
import Card, { CardProps } from "@/components/common/Card";

const CALL_TO_ACTION = "Try It Out!";

const techs: CardProps[] = [
  {
    name: "Next.js",
    image: "/nextjs.svg",
    altText: "The Next.js Logo",
    description: `
        Next.js is an open-source React framework used for building static and server-side rendered applications.
        It provides features such as automatic code splitting, static file serving, and client-side routing. 
    `,
    button: {
      text: CALL_TO_ACTION,
      href: "https://nextjs.org/",
    },
  },
  {
    name: "Spring",
    image: "/spring.svg",
    altText: "The Spring Logo",
    description: `
      Spring is an open-source application framework used for building Java-based enterprise applications.
      Along with Spring Boot, it offers all the tools and configurations required to build enterprise applications in a quick and easy way.
    `,
    button: {
      text: CALL_TO_ACTION,
      href: "https://spring.io/",
    },
  },
  {
    name: "Kotlin",
    image: "/kotlin.svg",
    altText: "The Kotlin Logo",
    description: `
        Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference.
        It is designed to interoperate fully with Java, bringing modern language features to remove the verbosity and ceremony of Java.
    `,
    button: {
      text: CALL_TO_ACTION,
      href: "https://kotlinlang.org/",
    },
  },
  {
    name: "Gradle",
    image: "/gradle.svg",
    altText: "The Gradle Logo",
    // Generate two sentences about Gradle
    description: `
        Gradle is an open-source build automation tool used for building, testing, and deploying software.
        Its expressive and declarative DSL allows developers to write build scripts that are maintainable, scalable, and easy to understand.
    `,
    button: {
      text: CALL_TO_ACTION,
      href: "https://gradle.org/",
    },
  },
  {
    name: "Apache Flink",
    image: "/flink.png",
    altText: "The Flink Logo",
    description: `
        Apache Flink is an open-source stream processing framework used for building distributed, high-performance data pipelines.
        It provides features such as exactly-once semantics, stateful computations, and fault tolerance.
    `,
    button: {
      text: CALL_TO_ACTION,
      href: "https://flink.apache.org/",
    },
  },
  {
    name: "Apache Kafka",
    image: "/kafka.svg",
    altText: "The Kafka Logo",
    description: `
        Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, data integration, and mission-critical applications.
        It is horizontally scalable, fault-tolerant, and extremely fast.
    `,
    button: {
      text: CALL_TO_ACTION,
      href: "https://kafka.apache.org/",
    },
  },
];

const TechCarousel = () => {
  return (
    <Carousel
      slide
      controls={true}
      interval={2000}
      wrap
      touch
      indicators={false}
    >
      {techs.map((tech, index) => {
        return (
          <Carousel.Item className="pt-4" key={index}>
            <Card {...tech}></Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TechCarousel;

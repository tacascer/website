"use client";

import styles from "./TechCarousel.module.scss";
import { Carousel } from "react-bootstrap";
import Card, { CardProps } from "@/components/Card";

const CALL_TO_ACTION = "Try It Out!";
const TECH_BUTTON = {
  text: CALL_TO_ACTION,
  stretched: true,
};

const techs: CardProps[] = [
  {
    title: "Next.js",
    image: {
      image: "/nextjs.svg",
      altText: "The Next.js Logo",
    },
    description: `
        Next.js is an open-source React framework used for building static and server-side rendered web apps.
        It provides features such as static site generation, server-side rendering, automatic code splitting, and client-side routing.
    `,
    button: {
      href: "https://nextjs.org/",
      ...TECH_BUTTON,
    },
  },
  {
    title: "Spring",
    image: {
      image: "/spring.svg",
      altText: "The Spring Logo",
    },
    description: `
      Spring is an open-source application framework used for building Java-based enterprise applications.
      Along with Spring Boot, it offers all the tools and configurations required to build enterprise applications in a quick and easy way.
    `,
    button: {
      href: "https://spring.io/",
      ...TECH_BUTTON,
    },
  },
  {
    title: "Kotlin",
    image: {
      image: "/kotlin.svg",
      altText: "The Kotlin Logo",
    },
    description: `
        Kotlin is a cross-platform, statically typed, general-purpose programming language.
        It is designed to interoperate fully with Java, bringing modern language features to remove the verbosity and ceremony of Java.
    `,
    button: {
      href: "https://kotlinlang.org/",
      ...TECH_BUTTON,
    },
  },
  {
    title: "Gradle",
    image: {
      image: "/gradle.svg",
      altText: "The Gradle Logo",
    },
    // Generate two sentences about Gradle
    description: `
        Gradle is an open-source build automation tool used for building, testing, and deploying software.
        Its expressive and declarative DSL allows developers to write build scripts that are maintainable, scalable, and easy to understand.
    `,
    button: {
      href: "https://gradle.org/",
      ...TECH_BUTTON,
    },
  },
  {
    title: "Apache Flink",
    image: {
      image: "/flink.png",
      altText: "The Flink Logo",
    },
    description: `
        Apache Flink is an open-source stream processing framework used for building distributed, high-performance data pipelines.
        It provides features such as exactly-once semantics, stateful computations, and fault tolerance.
    `,
    button: {
      href: "https://flink.apache.org/",
      ...TECH_BUTTON,
    },
  },
  {
    title: "Apache Kafka",
    image: {
      image: "/kafka.svg",
      altText: "The Kafka Logo",
    },
    description: `
        Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, data integration, and mission-critical applications.
        It is horizontally scalable, fault-tolerant, and extremely fast.
    `,
    button: {
      href: "https://kafka.apache.org/",
      ...TECH_BUTTON,
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
          <Carousel.Item key={index} className={styles["tech-item"]}>
            <div className="col-lg-8 mx-auto">
              <Card {...tech}></Card>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TechCarousel;

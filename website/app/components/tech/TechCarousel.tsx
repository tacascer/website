"use client";

import { Carousel } from "@/app/components/bootstrap";
import Card, { CardProps } from "@/app/components/common/Card";

const techs: CardProps[] = [
  {
    name: "Next.js",
    image: "/nextjs.svg",
    altText: "The Next.js Logo",
    description: `Next.js is a React-based open-source framework used for building server-side rendered (SSR) web applications. 
        It provides features such as automatic code splitting, server-side rendering, and static site generation.`,
    button: {
      text: "Try It Yourself!",
      href: "https://nextjs.org/",
    },
  },
  {
    name: "Spring",
    image: "/spring.svg",
    altText: "The Spring Logo",
    description: `Spring is an open-source application framework used for building Java-based enterprise applications.
       It provides features such as dependency injection, aspect-oriented programming, and support for various data access technologies.`,
    button: {
      text: "Try It Yourself!",
      href: "https://spring.io/",
    },
  },
  {
    name: "Kotlin",
    image: "/kotlin.svg",
    altText: "The Kotlin Logo",
    description: `Kotlin is a statically typed programming language that runs on the Java Virtual Machine (JVM) and can also be compiled to JavaScript source code.
       It is designed to be concise, expressive, and safe, and is often used for developing Android applications.`,
    button: {
      text: "Try It Yourself!",
      href: "https://kotlinlang.org/",
    },
  },
  {
    name: "Gradle",
    image: "/gradle.svg",
    altText: "The Gradle Logo",
    description: `Gradle is an open-source build automation tool used for building, testing, and deploying software projects.
       It is designed to be flexible, fast, and easy to use, and is often used for building Java-based applications.`,
    button: {
      text: "Try It Yourself!",
      href: "https://gradle.org/",
    },
  },
  {
    name: "Apache Flink",
    image: "/flink.png",
    altText: "The Flink Logo",
    description: `Apache Flink is a framework and distributed processing engine for stateful computations over unbounded and bounded data streams.
       Flink has been designed to run in all common cluster environments, perform computations at in-memory speed and at any scale.`,
    button: {
      text: "Try It Yourself!",
      href: "https://flink.apache.org/",
    },
  },
  {
    name: "Apache Kafka",
    image: "/kafka.svg",
    altText: "The Kafka Logo",
    description: `Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications.
       It is designed to be fast, scalable, and durable, and is often used for processing large volumes of data in real-time.`,
    button: {
      text: "Try It Yourself!",
      href: "https://kafka.apache.org/",
    },
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
          <Carousel.Item className="pt-4" key={index}>
            <Card {...tech}></Card>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default TechCarousel;

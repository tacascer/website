import { Button, Card } from "components/bootstrap";
import { Tech } from "./TechCarousel";
import Image from "next/image";

const logoWidth = 200;
const logoHeight = 200;

const TechCard = ({ name, image, altText, description, homePage }: Tech) => {
  return (
    <Card className="border-0 gap-2">
      <Card.Img
        variant="top"
        src={image}
        alt={altText}
        width={logoWidth}
        height={logoHeight}
        as={Image}
        quality={100}
        className="align-self-center shadow rounded-5 p-3"
        style={{
          // Hard coding dimensions here because Card component doesn't respect className
          width: `${logoWidth}px`,
          height: `${logoHeight}px`,
        }}
      ></Card.Img>
      <Card.Body>
        <Card.Title as="h3" className="text-center">
          {name}
        </Card.Title>
        <div className="mx-auto d-none d-md-block col-lg-7">
          {cardTextFromDescription(description)}
          <Button
            variant="outline-primary"
            href={homePage}
            target="_blank"
            className="rounded-pill shadow d-grid col-5 mx-auto"
          >
            Try It Yourself!
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

const cardTextFromDescription = (description: string) => {
  // Split description into sentences and map each sentence to a Card.Text component. A sentence is defined as a substring of description that ends with a period and is followed by a space
  return description.split(/(?<=\.\s)/).map((sentence, index) => {
    return <Card.Text key={index}>{sentence}</Card.Text>;
  });
};

export default TechCard;

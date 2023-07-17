import Card, { CardProps, ImageMetadata } from "../components/Card";

export type EmployerCardProps = {
  employer: Employer;
  image: ImageMetadata;
};

type Employer = {
  name: string;
  description: string;
  link: string;
};

function employerToCard({
  employer: { description, link },
  image,
}: EmployerCardProps): CardProps {
  return {
    description: description,
    image: image,
    button: {
      text: CALL_TO_ACTION,
      href: link,
    },
  };
}
const CALL_TO_ACTION = "Learn More";

const EmployerCard = ({ ...props }: EmployerCardProps) => {
  return <Card {...employerToCard(props)}></Card>;
};

export default EmployerCard;

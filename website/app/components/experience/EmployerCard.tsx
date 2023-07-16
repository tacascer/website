import Card, { CardProps, ImageMetadata } from "../common/Card";

export interface EmployerCardProps extends ImageMetadata, Employer {}

type Employer = {
  name: string;
  description: string;
  link: string;
};

type EmployerWithImage = Employer & ImageMetadata;

function employerToCard(employer: EmployerWithImage): CardProps {
  return {
    description: employer.description,
    image: employer.image,
    altText: employer.altText,
    button: {
      text: CALL_TO_ACTION,
      href: employer.link,
    },
  };
}
const CALL_TO_ACTION = "Learn More";

const EmployerCard = ({ ...props }: EmployerCardProps) => {
  return <Card {...employerToCard(props)}></Card>;
};

export default EmployerCard;

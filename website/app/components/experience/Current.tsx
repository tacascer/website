import Card, { CardProps, ImageMetadata } from "../common/Card";
import Header from "../common/Header";
import Section from "../common/Section";
import { Employer, employerToCard } from "./utils";

const CURRENT_EMPLOYER: Employer = {
  name: "Bloomberg L.P.",
  description: `Bloomberg L.P. is a global media and financial data and analytics conglomerate that provides financial software tools and enterprise applications such as analytics and equity trading platform, data services, and news to financial companies and organizations through the Bloomberg Terminal.
  The Bloomberg Terminal is a computer software system provided by Bloomberg L.P. that enables professionals in the financial service sector and other industries to access Bloomberg Professional Services through which users can monitor and analyze real-time financial market data and place trades on the electronic trading platform.`,
  link: "https://www.bloomberg.com/company/",
};

const EMPLOYER_IMAGE: ImageMetadata = {
  image: "/bloomberg.svg",
  altText: "The Bloomberg Logo",
};

const CALL_TO_ACTION = "Learn More";

const EMPLOYER_CARD: CardProps = employerToCard(
  CURRENT_EMPLOYER,
  EMPLOYER_IMAGE,
  CALL_TO_ACTION
);

const CurrentExperience = () => {
  return (
    <Section id="experience">
      <Header>Deploying Bugs At</Header>
      <Card {...EMPLOYER_CARD}></Card>
    </Section>
  );
};

export default CurrentExperience;

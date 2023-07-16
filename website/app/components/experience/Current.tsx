import Card, { CardProps } from "../common/Card";
import Header from "../common/Header";
import Section from "../common/Section";

const CURRENT_EMPLOYER: CardProps = {
  image: "/bloomberg.svg",
  altText: "The Bloomberg Logo",
  description: `Bloomberg L.P. is a global media and financial data and analytics conglomerate that provides financial software tools and enterprise applications such as analytics and equity trading platform, data services, and news to financial companies and organizations through the Bloomberg Terminal.
  The Bloomberg Terminal is a computer software system provided by Bloomberg L.P. that enables professionals in the financial service sector and other industries to access Bloomberg Professional Services through which users can monitor and analyze real-time financial market data and place trades on the electronic trading platform.`,
  button: {
    text: "Learn More",
    href: "https://www.bloomberg.com/company/",
  },
};

const CurrentExperience = () => {
  return (
    <Section id="experience">
      <Header>To Build Things At</Header>
      <Card {...CURRENT_EMPLOYER}></Card>
    </Section>
  );
};

export default CurrentExperience;

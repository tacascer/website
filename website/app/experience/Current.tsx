import Header from "@/components/Header";
import Section from "@/components/Section";
import EmployerCard, { EmployerCardProps } from "./EmployerCard";

const CURRENT_EMPLOYER: EmployerCardProps = {
  name: "Bloomberg L.P.",
  description: `Bloomberg L.P. is a global media and financial data and analytics conglomerate that provides financial software tools and enterprise applications such as analytics and equity trading platform, data services, and news to financial companies and organizations through the Bloomberg Terminal.
  The Bloomberg Terminal enables professionals in the financial service sector and other industries to access Bloomberg Professional Services through which users can monitor and analyze real-time financial market data and place trades on the electronic trading platform.`,
  link: "https://www.bloomberg.com/company/",
  image: "/bloomberg.svg",
  altText: "The Bloomberg Logo",
};

const CurrentExperience = () => {
  return (
    <Section id="experience">
      <Header>Deploying Bugs At</Header>
      <EmployerCard {...CURRENT_EMPLOYER} />
    </Section>
  );
};

export default CurrentExperience;

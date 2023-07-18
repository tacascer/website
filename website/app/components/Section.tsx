import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="my-5 col-lg-8 mx-auto">
      {children}
    </section>
  );
};

export default Section;

import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <div id={id} className="my-5">
      {children}
    </div>
  );
};

export default Section;

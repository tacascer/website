"use client";

import { Button } from "react-bootstrap";
import { ButtonProps } from "./About";

const AboutButton = ({ variant, href, children }: ButtonProps) => {
  return (
    <Button
      variant={variant}
      size="lg"
      href={href}
      className="px-4 shadow rounded-pill"
    >
      {children}
    </Button>
  );
};
export default AboutButton;

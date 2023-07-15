"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";
import { ButtonProps } from "./About";

const AboutButton = ({ variant, href, children }: ButtonProps) => {
  const router = useRouter();
  return (
    <Button
      variant={variant}
      size="lg"
      onClick={() => {
        router.push(href);
      }}
      className="px-4 shadow rounded-pill"
    >
      {children}
    </Button>
  );
};
export default AboutButton;

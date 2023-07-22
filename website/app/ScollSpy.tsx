"use client";
import ScrollSpy from "react-ui-scrollspy";

export type ScrollSpyBodyProps = {
  children: React.ReactNode;
};

export default function ScrollSpyBody({ children }: ScrollSpyBodyProps) {
  return <ScrollSpy>{children}</ScrollSpy>;
}

"use client";
import ScrollSpy from "react-ui-scrollspy";
import { useAppDispatch } from "./components/hooks";
import { setActive } from "./components/navbar/navSlice";

export type ScrollSpyBodyProps = {
  children: React.ReactNode;
};

export default function ScrollSpyBody({ children }: ScrollSpyBodyProps) {
  const dispatch = useAppDispatch();
  return (
    <ScrollSpy
      scrollThrottle={50}
      onUpdateCallback={(id) => dispatch(setActive(id))}
    >
      {children}
    </ScrollSpy>
  );
}

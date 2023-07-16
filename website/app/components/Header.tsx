import { ReactNode } from "react";

export interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return <h1 className="text-center my-4">{children}</h1>;
};

export default Header;

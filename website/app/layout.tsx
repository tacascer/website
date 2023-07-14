import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import { Roboto_Flex } from "next/font/google";
import MainNavBar from "./MainNavBar";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tim's Corner",
  description: "Where I share my thoughts and ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} container`}>
        <MainNavBar></MainNavBar>
        {children}
      </body>
    </html>
  );
}

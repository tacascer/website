import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import { Roboto_Flex } from "next/font/google";
import NavBar from "./components/NavBar";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tim's Corner",
  description: `Tim Tran (@tacascer) is a software engineer based in NYC.
   He is passionate about building software that is scalable, maintainable, and easy to use.
   This is his corner of the internet.
   `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} container`}>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}

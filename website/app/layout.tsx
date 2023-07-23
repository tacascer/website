import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/navbar/NavBar";
import { Analytics } from "@vercel/analytics/react";
import ScrollSpyBody from "./ScollSpy";
import StatefulBody from "./StatefulBody";
import Footer from "./footer/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Tim's Corner",
  description:
    "Tim Tran (@tacascer) is a software engineer based in NYC. He is passionate about building software that is scalable, maintainable, and easy to use. This is his corner of the internet.",
  authors: [
    {
      name: "Tim Tran",
      alias: "tacascer",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className}`}>
        <div className="container">
          <StatefulBody>
            <NavBar></NavBar>
            <ScrollSpyBody>{children}</ScrollSpyBody>
          </StatefulBody>
        </div>
        <Footer></Footer>
        <Analytics></Analytics>
      </body>
    </html>
  );
}

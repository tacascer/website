import "bootstrap/dist/css/bootstrap.css";
import "../styles/custom.scss";
import { Montserrat } from "next/font/google";
import NavBar from "./components/NavBar";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
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
      <body className={`${montserrat.className} container`}>
        <NavBar></NavBar>
        {children}
        <Analytics></Analytics>
      </body>
    </html>
  );
}

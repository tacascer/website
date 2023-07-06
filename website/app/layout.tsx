import "bootstrap/dist/css/bootstrap.css";
import { Roboto_Flex } from "next/font/google";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
});

export const metadata = {
  title: "Tim Tran",
  description: "Tim Tran's Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${robotoFlex.className} container bg-light`}>
        {children}
      </body>
    </html>
  );
}

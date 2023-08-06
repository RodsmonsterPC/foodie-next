
import "./styles/global.css";

import { Poppins, Montserrat } from "next/font/google";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

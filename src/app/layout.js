import { Montserrat, Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "../components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

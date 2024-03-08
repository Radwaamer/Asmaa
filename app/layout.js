import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./sections/side bar/Nav";
import Logo from "./components/Logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asmaa",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar" className="font-marhey">
      <body className={inter.className}>
        <div className="bg-landing relative">
          <div className='absolute top-0 left-0 w-full h-full bg-[#ffffffe6]'></div>
          <div className='lg:flex relative'>
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

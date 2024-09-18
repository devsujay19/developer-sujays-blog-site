import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import LargeFooter from "@/components/LargeFooter";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Sujay",
  description: "The NextJS version for blogs of the original site - Developer Sujay.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <div className="mx-auto max-w-[1148px] px-[-100px]">
          {children}
          <LargeFooter />
        </div>
        <Footer />
      </body>
    </html>
  );
}

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Soham Khade",
  description: "Welcome to my portfolio",
    icons: {
        icon: "./titleBarIcon.png", // Replace with your favicon file path
    },
};
import { ThemeProvider } from 'next-themes'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider attribute="class" className={"bg-black"}>
            <ToastContainer />
            <Navbar />
            {children}
            <Footer />
        </ThemeProvider>
        </body>
        </html>
    )
}

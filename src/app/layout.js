import { Inter } from "next/font/google";
import "./globals.css";
import "./styles.css";
import Head from "next/head";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NEW PROJECT",
  description: "Listing new post!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head />
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" async></script>
      </body>
    </html>
  );
}

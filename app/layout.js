import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "IntelliTrack",
  description: "An AI-Enhanced Expense Tracker with Automated Receipt Parsing and Subscription",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*header*/}
        <Header></Header>
        <main className="min-h-screen">
          {children}
        </main>

        {/*footer*/}
        <footer>
          <div className="container mx-auto  text-center text-gray-500">
            <p className="text-center text-sm text-gray-500 bg-blue-50 py-10">
              © 2025 IntelliTrack. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}

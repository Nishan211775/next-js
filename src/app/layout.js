import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar";
import { AuthProvider } from "./config/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "General Knowledge",
  description: "PWA application with Next 13",
  generator: "Next.js",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
  authors: [
    { name: "Nishan Dhungana" },
    {
      name: "Nishan Dhungana",
      url: "https://www.linkedin.com/in/nishan-dhungana-660b92155/",
    },
  ],
  viewport: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon-192x192.png" },
    { rel: "icon", url: "icons/icon-192x192.png" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="manifest" href="/manifest.json" />
      <body className={inter.className}>
        <AuthProvider>
          <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-b from-indigo-900 via-transparent to-purple-900 opacity-75">
            <img src="#" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="relative z-10">
            <NavBar />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}

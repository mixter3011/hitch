import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/provider/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hitch",
  description: "An alternate to Notion",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/hitch-logo-dark.svg",
        href: "/hitch-logo-dark.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/hitch-logo.svg",
        href: "/hitch-logo.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="hitch-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

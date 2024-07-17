import { Toaster } from "sonner";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/provider/theme-provider";
import { ConvexClientProvider } from "@/components/provider/convex-provider";
import { ModalProvider } from "@/components/provider/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";

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
        <ConvexClientProvider>
          <EdgeStoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="hitch-theme-2"
          >
            <Toaster position="bottom-center"/>
            <ModalProvider/>
            {children}
          </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}

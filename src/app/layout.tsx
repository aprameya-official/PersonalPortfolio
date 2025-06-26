import type { Metadata } from "next";
import "./globals.css";
import { Fira_Code } from "next/font/google";
import type { ReactNode } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const firaCode = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aprameya-portfolio.com"),

  title: "Aprameya Pattnaik",
  description: "Computer Science Engineering Student | Web Developer | AI & Cloud Enthusiast",
  alternates: {
    canonical: "https://aprameya-portfolio.com",
  },
  openGraph: {
    url: "https://aprameya-portfolio.com",
    title: "Aprameya Pattnaik",
    description: "Computer Science Engineering Student | Web Developer | AI & Cloud Enthusiast",
    images: [
      {
        url: "https://aprameya-portfolio.com/images/og-image.webp",
        width: 1200,
        height: 640,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://aprameya-portfolio.com",
    title: "Aprameya Pattnaik",
    description: "Computer Science Engineering Student | Web Developer | AI & Cloud Enthusiast",
    images: "https://aprameya-portfolio.com/images/og-image.webp",
  },

  authors: [
    {
      name: "Aprameya Pattnaik",
    },
  ],
  keywords: [
    "Portfolio",
    "ReactJS",
    "NextJS",
    "Web Developer",
    "Software Engineer",
    "Aprameya Pattnaik",
  ],
  icons: {
    icon: "/icons/myicon.png",
    shortcut: "/icons/myicon.png",
    apple: "/icons/myicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="57x57" href="/icons/favicon/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/icons/favicon/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/icons/favicon/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/icons/favicon/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/icons/favicon/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/icons/favicon/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/icons/favicon/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/favicon/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/favicon/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/favicon/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/icons/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/icons/favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://www.cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="Aprameya"
          data-description="Support me on Buy me a coffee!"
          data-message="Insufficient coffee"
          data-color="#C778DD"
          data-position="Right"
          data-x_margin="24"
          data-y_margin="24"
          defer
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${firaCode.variable} antialiased overflow-x-hidden`}>
        <div className="bg-primary min-h-screen">
          {children}
        </div>
      </body>

      <GoogleAnalytics gaId="G-BHL50EQXC8" />
    </html>
  );
}

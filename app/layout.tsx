import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ApplyModalProvider } from "@/components/ApplyModal";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "P P Savani University | Admissions Open 2026-2027",
  description:
    "South Gujarat's only NAAC A+ private university. Apply for admissions 2026-27. Explore courses, scholarships, placements and campus life at PPSU.",
  keywords: "PPSU, P P Savani University, admissions 2026, NAAC A+, engineering, pharmacy, nursing",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <ApplyModalProvider>{children}</ApplyModalProvider>
      </body>
    </html>
  );
}

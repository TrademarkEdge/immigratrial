import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Immigra Evaluations | Expert Documentation for U.S. Immigration",
  description:
    "Expert opinion letters, recommendation letters, credential evaluations, position evaluations and RFE documentation support for U.S. employment-based immigration matters.",
  keywords: [
    "immigration expert opinion letter",
    "H1B expert opinion letter",
    "EB1 expert opinion letter",
    "EB2 NIW recommendation letter",
    "O1 expert opinion letter",
    "immigration evaluations",
    "RFE response support",
    "credential evaluation",
    "position evaluation"
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

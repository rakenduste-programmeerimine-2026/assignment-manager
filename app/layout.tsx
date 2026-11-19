import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Tähtajad ühes kohas",
  description: "Pane kirja oma koolitööd ja tähtajad ning näe, mis on järgmisena vaja valmis saada.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="et" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen font-sans text-base">
        <header className="border-b border-border bg-surface">
          <div className="mx-auto max-w-[680px] px-4 py-4">
            <p className="text-lg font-semibold">Tähtajad ühes kohas</p>
          </div>
        </header>
        <main className="mx-auto max-w-[680px] px-4 py-8">{children}</main>
      </body>
    </html>
  );
}

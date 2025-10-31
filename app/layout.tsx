import type React from "react"
import type { Metadata } from "next"
import { Poppins, DM_Sans } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] })
const dmSans = DM_Sans({ weight: ["400", "500", "600"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Srinithi R M | VLSI & Embedded Systems Engineer",
  description: "Portfolio of Srinithi R M - ECE Student at VIT Chennai, VLSI Designer, Embedded Systems Engineer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased bg-background text-foreground`}>{children}</body>
    </html>
  )
}

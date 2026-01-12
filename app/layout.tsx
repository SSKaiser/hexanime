import "@/app/globals.css"
import { Navbar } from "./components/navbar"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <html className="bg-[#0a0a0a]" dir="ltr" lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
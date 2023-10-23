
import Link from "next/link";
import "./globals.css";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ['100', '400'], subsets: ['latin'] })

export const metadata = {
  title: "Community app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  

  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
      <nav className="flex justify-between bg-neutral-950 px-3 h-auto w-auto">
          <div className="m-2 font-bold text-3xl text-gray-200">
           <Link href="/">Reddit</Link>
          </div>
          <div className="text-lg flex m-3 px-2 gap-2 font-bold text-gray-200">
            <button className=" hover:text-gray-300"> Theme </button>
            <Link className=" hover:text-gray-300" href="/register">Sign in</Link>
            <Link className=" hover:text-gray-300" href="/publications">Publications</Link>
          </div>
      </nav>
      {children}
    </body>
    </html>
    
  );
}
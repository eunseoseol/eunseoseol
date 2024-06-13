"use client";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const books = [
  {
    id: 1,
    title: "특이점이 온다",
    image: "https://link.coupang.com/a/bFvSf6",
    url: "https://link.coupang.com/a/bFvSf6"
  },
  {
    id: 2,
    title: "슈퍼인텔리전스",
    image: "https://link.coupang.com/a/bFvSFZ",
    url: "https://link.coupang.com/a/bFvSFZ"
  },
  {
    id: 3,
    title: "호모데우스",
    image: "https://link.coupang.com/a/bFvSVa",
    url: "https://link.coupang.com/a/bFvSVa"
  }
];

export default function LibraryPage() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Library Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Featured Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {books.map(book => (
                <div key={book.id} className="border p-4 rounded-lg shadow-lg">
                  <img src={book.image} alt={book.title} className="w-full h-auto mb-2 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
                  <Link href={book.url} legacyBehavior>
                    <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Buy on Coupang
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </AuthContextProvider>
      </body>
    </html>
  );
}
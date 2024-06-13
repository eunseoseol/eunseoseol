"use client"; // 클라이언트 컴포넌트로 지정
import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4 flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold mb-6">Playground for All Creator</h1>
          <div className="flex space-x-4">
            <Link href="/community" legacyBehavior>
              <a className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300">
                ES Community
              </a>
            </Link>
            <Link href="/studio" legacyBehavior>
              <a className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                ES Studio
              </a>
            </Link>
            <Link href="/academy" legacyBehavior>
              <a className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                ES Academy
              </a>
            </Link>
            <Link href="/library" legacyBehavior>
              <a className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                ES Library
              </a>
            </Link>
            <Link href="/events" legacyBehavior>
              <a className="px-6 py-3 bg-green-600 text-white rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
                ES Events
              </a>
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
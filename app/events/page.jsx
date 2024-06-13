"use client";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const webinars = [
  {
    id: 1,
    title: "Eunseo Seol 웨비나 Events 1",
    date: "2024.06.13 - 2024.06.15",
    thumbnail: "/images/webinar1.jpg",
    link: "#"
  },
  {
    id: 2,
    title: "Eunseo Seol 웨비나 Events 2",
    date: "2024.05.30",
    thumbnail: "/images/webinar2.jpg",
    link: "#"
  },
  {
    id: 3,
    title: "Eunseo Seol 웨비나 Events 3",
    date: "2024.05.09 - 2024.05.27",
    thumbnail: "/images/webinar3.jpg",
    link: "#"
  },

];

export default function StudioPage() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Events Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Upcoming Webinars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {webinars.map(webinar => (
                <div key={webinar.id} className="border p-4 rounded-lg shadow-lg">
                  <img src={webinar.thumbnail} alt={webinar.title} className="w-full h-auto mb-2 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-gray-600 mb-2">{webinar.date}</p>
                  <Link href={webinar.link} legacyBehavior>
                    <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      View Webinar
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
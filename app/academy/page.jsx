"use client";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const courses = [
  {
    id: 1,
    title: "NextJS 강의",
    price: "69,000원",
    link: "#"
  },
  {
    id: 2,
    title: "Flutter 강의",
    price: "69,000원",
    link: "#"
  },
  {
    id: 3,
    title: "Swift 강의",
    price: "69,000원",
    link: "#"
  }
];

export default function AcademyPage() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Academy Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Available Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map(course => (
                <div key={course.id} className="border p-4 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-2">{course.price}</p>
                  <Link href={course.link} legacyBehavior>
                    <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Buy Now
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
"use client";
import Navbar from "../components/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
import { AuthContextProvider } from "../context/AuthContext";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

const videos = [
  {
    id: "S9Rup4FgjmI",
    title: "일론 머스크 : 테슬라, AGI, 시뮬레이션, 오토파일럿, 딥러닝, FSD",
    thumbnail: "https://img.youtube.com/vi/S9Rup4FgjmI/mqdefault.jpg",
    url: "https://www.youtube.com/watch?v=S9Rup4FgjmI"
  },
  {
    id: "WBa2nl1nyoE",
    title: "샘 알트만 : 오픈AI, GPT 5, Sora, AGI, 일리야 수츠케버, 일론 머스크, ChatGPT",
    thumbnail: "https://img.youtube.com/vi/WBa2nl1nyoE/mqdefault.jpg",
    url: "https://www.youtube.com/watch?v=WBa2nl1nyoE&t=35s"
  }
];

export default function StudioPage() {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <Navbar />
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to the Studio Page</h1>
            <h2 className="text-2xl font-semibold mb-4">Latest Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {videos.map(video => (
                <div key={video.id} className="border p-4 rounded-lg shadow-lg">
                  <img src={video.thumbnail} alt={video.title} className="w-full h-auto mb-2 rounded-lg" />
                  <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                  <Link href={video.url} legacyBehavior>
                    <a className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                      Watch on YouTube
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
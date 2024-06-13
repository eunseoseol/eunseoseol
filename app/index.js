import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();

  const navigateToCommunity = () => {
    router.push("/community");
  };

  const navigateToStudio = () => {
    router.push("/studio");
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
          <h1>Welcome to the Home Page</h1>
          <button onClick={navigateToCommunity} style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>
            ES Community
          </button>
          <button onClick={navigateToStudio} style={{ margin: "10px", padding: "10px 20px", fontSize: "16px" }}>
            ES Studio
          </button>
        </div>
      </body>
    </html>
  );
}
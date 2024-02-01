"use client";
import React, { useState, useEffect } from "react";

export default function Page() {
  const [isMobile, setIsMobile] = useState(false);

  const hoverStyle = {
    maxWidth: '150px',
    marginBottom: '20px',
  };
  const mobileHoverStyle = {
    maxWidth: '80px',
    marginBottom: '10px',
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Consider below 768px as mobile
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imageStyle = isMobile ? mobileHoverStyle : hoverStyle;

  const links = {
    Medium: "https://medium.com/@eunseoseol",
    Threads: "https://threads.net/@eunseoseol",
    GitHub: "https://github.com/eunseoseol",

    YouTube: "https://www.youtube.com/@eunseoseol",
    Pinterest: "https://pin.it/N12ZpAT",
    TikTok: "https://www.tiktok.com/@eunseo.seol?_t=8iibwwacOG2&_r=1",
    Instagram: "https://www.instagram.com/eunseoseol?igsh=MWEwYjZla2JldDE4dQ%3D%3D&utm_source=qr",
    Discord: "https://discord.gg/DTwqGKeG",

    Mastodon: "https://me.dm/@eunseoseol",

    PayPal: "https://paypal.me/eunseoseol",
    LinkedIn: "https://www.linkedin.com/in/eunseoseol?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",




    Facebook: "https://www.facebook.com/profile.php?id=61552233172220&mibextid=2JQ9oc",

    X: "https://x.com/eunseo_seol?s=21",

    Telegram: "https://t.me/eunseo_seol",


    // 나머지 링크들도 여기에 추가...
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>








      
      <div style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '100px', paddingBottom: '100px', height: 'calc(100vh - 20px)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <main className="p-4" style={{ height: '100vh' }}>
          <div style={{ position: 'relative', zIndex: 1, paddingBottom: '40px', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '-50px' }}>
            {Object.entries(links).map(([name, url]) => (
              <a key={name} href={url} style={{ marginBottom: '10px' }}>
                <img src={`/${name}.png`} alt={name} style={imageStyle} />
              </a>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

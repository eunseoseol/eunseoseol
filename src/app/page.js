// Page.js
"use client";

import React, { useState } from "react";

export default function Page() {
  // 페이지 상태를 관리하는 useState. 초기 상태는 'Red Pill'.
  const [pageState, setPageState] = useState('Red Pill');

  const handleRedPillClick = () => {
    setPageState('Blue Pill');
  };

  const handleBluePillClick = () => {
    setPageState('Red Pill');
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
        <source src="/background.mov" type="video/mp4" />
      </video>

      <main className="p-4">
        {pageState === 'Red Pill' ? (
          <div style={{ position: 'relative', zIndex: 1, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <img src="/book.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
            <button onClick={handleRedPillClick}>Red Pill</button>
          </div>
        ) : (
          <div style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '20px', height: 'calc(100vh - 20px)', overflowY: 'scroll', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', alignItems: 'center' }}>
          <img src="/book0.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book1.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book2.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book3.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book4.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book5.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book6.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book7.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book8.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book9.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book10.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book11.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book12.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book13.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book14.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book15.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book16.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book17.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book18.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book19.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book20.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book21.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book22.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book23.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book24.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book25.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book26.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
          <img src="/book27.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />
  
  
    <p className="cursor-pointer" onClick={handleBluePillClick}>
   Blue Pill
  </p>
  
  
  
  
        </div>
        
        )}
      </main>
    </div>
  );
}



// Page.js
"use client";

import React, { useState, useEffect } from "react";
import { UserAuth } from './context/AuthContext';
import { loadTossPayments } from "@tosspayments/payment-sdk";
import { db } from './firebase'; // Firestore 데이터베이스를 임포트합니다.
import { doc, updateDoc } from "firebase/firestore"; // Firestore의 문서 업데이트 함수를 임포트합니다.

export default function Page() {
   const { user, googleSignIn, logOut } = UserAuth();

  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const updateUserData = async () => {
    if (user) {
      const userDocRef = doc(db, "users", user.email); // 사용자의 문서 참조를 생성합니다.
      await updateDoc(userDocRef, {
        "profile.book": "Purchased" // 'profile.book' 필드를 'Purchased'로 업데이트합니다.
      });
    }
  };


  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  // 결제 성공 페이지에서 호출될 때 사용자 데이터를 업데이트합니다.
  useEffect(() => {
    if (window.location.pathname === '/api/payments/success') {
      updateUserData();
    }
  }, []);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <video autoPlay loop muted playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>

        <source src="/background.mov" type="video/mp4" />
      </video>
     
     



        <main className="p-4">
      {/* 사용자가 로그인되어 있으면 Welcome 메시지를 표시하고, 그렇지 않으면 Home Page를 표시합니다. */}
      {user ?


      
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


  <p className="cursor-pointer" onClick={handleSignOut}>
 Blue Pill
</p>




      </div>
      
      
 



      
      
       : 
      <div style={{ position: 'relative', zIndex: 1, height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

      <img src="/book.png" alt="Book" style={{ maxWidth: '150px', marginBottom: '20px' }} />

      
      
      
      
      
      
      <button onClick={handleSignIn}>
      Red Pill
    </button>
      
      
      
      
      
    </div>

      
      
      }
    </main>
    </div>
  );
}


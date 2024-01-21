"use client";


import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, onSnapshot } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { loadTossPayments } from "@tosspayments/payment-sdk";

// Firebase 설정 정보
const firebaseConfig = {
  apiKey: "AIzaSyBlLWD-ifPY8So3R2JIQEB_PjRiTUKn7no",
  authDomain: "eunseo-seol-6334e.firebaseapp.com",
  projectId: "eunseo-seol-6334e",
  storageBucket: "eunseo-seol-6334e.appspot.com",
  messagingSenderId: "1042386782911",
  appId: "1:1042386782911:web:7c833a17dc9f505dd3140a",
  measurementId: "G-5RN0P4M3JE"
};

// Firebase 앱 초기화
initializeApp(firebaseConfig);
const auth = getAuth();
const firestore = getFirestore();

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isCitizenshipTrue, setIsCitizenshipTrue] = useState(false);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);

        // Firestore에서 사용자의 문서 감시
        const userDocRef = doc(firestore, "users", user.email);
        const unsubscribeDoc = onSnapshot(userDocRef, (doc) => {
          const userData = doc.data();
          if (userData && userData.Citizenship === true) {
            setIsCitizenshipTrue(true);
          } else {
            setIsCitizenshipTrue(false);
          }
        });

        return unsubscribeDoc;
      } else {
        setIsLoggedIn(false);
        setIsCitizenshipTrue(false);
      }
    });

    return unsubscribeAuth;
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // 로그인 성공 처리
      setIsLoggedIn(true);
      console.log('Logged in user:', result.user);
    } catch (error) {
      // 오류 처리
      console.error('Login failed:', error);
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      // 로그아웃 성공 처리
      setIsLoggedIn(false);
    }).catch((error) => {
      // 오류 처리
      console.error('Logout failed:', error);
    });
  };

  const handleClick = async () => {
    const tossPayments = await loadTossPayments(
      "test_ck_QbgMGZzorznJWP7nelA2rl5E1em4"
    );

    await tossPayments.requestPayment("카드", {
      amount: 10000,
      orderId: Math.random().toString(36).slice(2),
      orderName: "It from bit.",
      successUrl: `${window.location.origin}/api/payments`,
      failUrl: `${window.location.origin}/api/payments/fail`,
    });
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <video autoPlay loop muted playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
        <source src="/background.mov" type="video/mp4" />
      </video>
      {isLoggedIn ? (
        <>
          {isCitizenshipTrue ? (
            <div style={{ position: 'relative', zIndex: 1, width: '100%', paddingTop: '20px', height: 'calc(100vh - 20px)', overflowY: 'scroll', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
       </div>

          ) : (
            <button onClick={handleClick}>It from bit</button>
          )}
          <button onClick={handleLogout}>Blue Pill</button>
        </>
      ) : (
        <button onClick={handleGoogleLogin}>Red Pill</button>
      )}
    </div>
  );
}

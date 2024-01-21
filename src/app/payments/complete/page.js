"use client";

import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc, onSnapshot } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

// Firebase 설정 초기화
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

const firestore = getFirestore();
const auth = getAuth();

function Page() {
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
  
        const docRef = doc(firestore, "users", user.email);
        const unsubscribeDoc = onSnapshot(docRef, (doc) => {
          const userData = doc.data();
          if (userData && userData.Citizenship === true) {
            // 3초 후에 리디렉션
            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          }
        });
  
        return () => unsubscribeDoc();
      } else {
        setUserEmail('');
      }
    });
  
    return () => unsubscribeAuth();
  }, []);
  

  const updateCitizenship = () => {
    if (userEmail) {
      const docRef = doc(firestore, "users", userEmail);
      setDoc(docRef, { Citizenship: true }, { merge: true })
        .then(() => {
          alert("Citizenship updated successfully!");
        }).catch(error => {
          console.error("Error updating or creating document: ", error);
        });
    } else {
      alert("No user logged in");
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
    <video autoPlay loop muted playsInline style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
      <source src="/background.mov" type="video/mp4" />
    </video>
      <button onClick={updateCitizenship}>Get Citizenship</button>
    </div>
  );
}

export default Page;

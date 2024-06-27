import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserAuth } from '../context/AuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './../firebase'; // Firestore instance
import { BellIcon, PencilAltIcon } from '@heroicons/react/outline'; // Heroicons, install if needed: npm install @heroicons/react
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WriteModal = dynamic(() => import('./WriteModal'), { ssr: false }); // 모달 컴포넌트 동적 로드

const Navbar = ({ onSearch }) => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // Menu box display state
  const [notifications, setNotifications] = useState([]);
  const [notificationMenuOpen, setNotificationMenuOpen] = useState(false); // Notification menu box display state
  const [searchTerm, setSearchTerm] = useState('');
  const notificationRef = useRef(null);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false); // 글쓰기 모달 상태

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
      setMenuOpen(false); // Close menu on logout
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfileView = () => {
    setMenuOpen(false); // Close menu on profile view click
  };

  const fetchNotifications = async () => {
    if (user) {
      const q = query(collection(db, 'notifications'), where('recipient', '==', user.email));
      const querySnapshot = await getDocs(q);
      const notificationsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNotifications(notificationsData);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      if (user) {
        // Fetch user profile image from Firestore
        const userDocRef = doc(db, 'users', user.email);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const userData = userDoc.data();
          if (userData.profileImage) {
            setProfileImage(userData.profileImage);
          }
        }

        // Fetch notifications
        await fetchNotifications();
      }
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  useEffect(() => {
    // Close notification menu box on outside click
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      window.location.href = `/search/${searchTerm}`;
    }
  };

  return (
    <div className="content-container">
      <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 relative">
        <ul className="flex">
          <li className="p-2 cursor-pointer">
          <Link href="/">
            <div style={{ width: 150, height: 40, position: 'relative' }}>
              <Image
                src="/ARTIFACT.png" // 이미지 경로를 실제 경로로 수정
                alt="ARTIFACT Logo"
                layout="fill" // 레이아웃을 fill로 설정
                objectFit="contain" // 이미지가 요소 안에 맞춰지도록 설정
              />
            </div>
          </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearchSubmit} className="flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="검색..."
              className="p-2 border rounded"
            />
            <button type="submit" className="hidden">Search</button>
          </form>
          {loading ? null : !user ? (
            <ul className="flex">
              <li onClick={handleSignIn} className="p-2 cursor-pointer">
                로그인하기
              </li>
            </ul>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }} className="relative space-x-4">
              <div className="relative p-2 cursor-pointer flex items-center bg-gray-100 rounded-full hover:bg-gray-200 sm:h-10 sm:w-auto sm:px-4 sm:py-2 h-10 w-10 justify-center" onClick={() => setIsWriteModalOpen(true)}>
                <PencilAltIcon className="w-5 h-5 sm:mr-1" />
                <span className="hidden sm:inline">글쓰기</span>
              </div>
             
              <div className="relative cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center">
                    {user.displayName ? user.displayName.slice(0, 2) : 'U'}
                  </div>
                )}
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg">
                    <Link href="/profile" legacyBehavior>
                      <a
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        onClick={handleProfileView}
                      >
                        프로필 보기
                      </a>
                    </Link>
                    <div
                      onClick={handleSignOut}
                      className="block px-4 py-2 text-gray-700 cursor-pointer hover:bg-gray-100"
                    >
                      로그아웃
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      {isWriteModalOpen && <WriteModal onClose={() => setIsWriteModalOpen(false)} />}
    </div>
  );
};

export default Navbar;

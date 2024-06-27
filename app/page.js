"use client"; // 클라이언트 컴포넌트로 지정
import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy, doc, getDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from './firebase';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import Navbar from "./components/Navbar";
import { ClipLoader } from 'react-spinners'; // 로딩 애니메이션을 위한 라이브러리
import Image from 'next/image';
import './globals.css'; // 글로벌 CSS 파일 추가

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [category, setCategory] = useState('전체');
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [categoryCounts, setCategoryCounts] = useState({
     '🦄 스타트업': 0,
    '🤖 인공지능': 0,
    '📈 미국주식': 0,
    '🪙 암호화폐': 0,
  });

  const categories = ['🦄 스타트업', '🤖 인공지능', '📈 미국주식', '🪙 암호화폐'];
  const categoryIcons = {
    '스타트업': '🦄 스타트업',
    '인공지능': '🤖 인공지능',
    '미국주식': '📈 미국주식',
    '암호화폐': '🪙 암호화폐'
  };
  const categoryLinks = {
    '🦄 스타트업': 'http://open.kakao.com/o/gV1tVm6f',
    '🤖 인공지능': 'http://open.kakao.com/o/gsDA4Bag',
    '📈 미국주식': 'https://kakao.com/stocks',
    '🪙 암호화폐': 'http://open.kakao.com/o/gHnIXwcg',
  };

  // 조회수 업데이트 함수
  const updateViewCount = async (articleId) => {
    const articleRef = doc(db, 'JarvisArticle', articleId);
    await updateDoc(articleRef, {
      views: increment(1)
    });
  };

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true); // 로딩 시작

      const articlesData = [];
      const counts = {
         '🦄 스타트업': 0,
        '🤖 인공지능': 0,
        '📈 미국주식': 0,
        '🪙 암호화폐': 0,
      };

      const q = query(collection(db, 'JarvisArticle'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const collectionArticles = await Promise.all(querySnapshot.docs.map(async (docSnapshot) => {
        const data = docSnapshot.data();
        const userDocRef = doc(db, 'users', data.author);
        const userDocSnapshot = await getDoc(userDocRef);
        const userData = userDocSnapshot.exists() ? userDocSnapshot.data() : { profile: { name: 'Unknown', profileImage: null } };
        
        // Ensure data.categories is an array
        const categories = data.categories || [];
        categories.forEach(cat => {
          if (counts[cat] !== undefined) {
            counts[cat]++;
          }
        });
        counts['전체']++;
        return {
          id: docSnapshot.id,
          ...data,
          authorName: userData.profile?.name || 'Unknown',
          authorProfileImage: userData.profileImage || null,
          views: data.views || 0, // 조회수 추가
          categoryNames: categories.map(cat => categoryIcons[cat] || '').join(' ') // 카테고리 이름 및 아이콘 추가
        };
      }));

      articlesData.push(...collectionArticles);

      setArticles(articlesData);
      setFilteredArticles(articlesData);
      setCategoryCounts(counts);
      setLoading(false); // 로딩 종료
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    if (category === '전체') {
      setFilteredArticles(articles);
    } else {
      const filteredCategory = category.replace('🦄 ', '').replace('🤖 ', '').replace('📈 ', '').replace('🪙 ', '');
      setFilteredArticles(articles.filter(article => article.categories && article.categories.includes(filteredCategory)));
    }
  }, [category, articles]);

  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter(article => 
        article.title.includes(searchTerm) || 
        extractPreviewText(article.content).includes(searchTerm)
      );
      setFilteredArticles(filtered);
    }
  };

  const extractPreviewText = (html) => {
    if (typeof document !== 'undefined') {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const textContent = tempDiv.textContent || tempDiv.innerText || "";
      return textContent.substring(0, 200) + (textContent.length > 200 ? "..." : ""); // 첫 200자 표시
    }
    return "";
  };
  const extractPreviewText2 = (html) => {
    if (typeof document !== 'undefined') {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const textContent = tempDiv.textContent || tempDiv.innerText || "";
      return textContent.substring(0, 30) + (textContent.length > 200 ? "..." : ""); // 첫 200자 표시
    }
    return "";
  };

  const extractFirstImage = (html) => {
    if (typeof document !== 'undefined') {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = html;
      const img = tempDiv.querySelector("img");
      return img ? img.src : null;
    }
    return null;
  };

  const calculateReadTime = (text) => {
    const wordsPerMinute = 200;
    const words = text.split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  // 가장 인기있는 아티클을 조회수 기준으로 정렬하여 상위 5개 선택
  const topArticles = articles.slice().sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className="p-4 flex flex-col lg:flex-row h-screen">
      {/* Sidebar for categories */}
      <div className="w-full lg:w-1/4 p-4">
        <ul className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
          {categories.map((cat) => (
            <li key={cat} className="flex justify-between items-center">
              <button
                className={`block text-left p-2 rounded ${category === cat ? 'bg-gray-200 font-bold' : 'bg-gray-100'}`}
                onClick={() => setCategory(cat)}
              >
                {cat} ({categoryCounts[cat]})
              </button>
            </li>
          ))}
        </ul>
      </div>

        {/* Articles Section */}
        <div className="w-full lg:w-2/4 p-4 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center w-full">
              <ClipLoader size={50} color={"#123abc"} loading={loading} />
            </div>
          ) : (
            filteredArticles.map(article => (
              <Link key={article.id} href={`/article/${article.id}`} legacyBehavior>
                <a 
                  className="block border p-4 mb-4 cursor-pointer hover:bg-gray-100 transition-colors duration-300 rounded-lg w-full"
                  onClick={() => updateViewCount(article.id)}
                >
                  {extractFirstImage(article.content) && (
                    <div className="mb-4">
                      <img src={extractFirstImage(article.content)} alt={article.title} className="w-full h-auto rounded-lg" />
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {article.authorProfileImage ? (
                      <img
                        src={article.authorProfileImage}
                        alt="Profile"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center mr-2">
                        {article.authorName.slice(0, 2)}
                      </div>
                    )}
                    <div className="text-sm text-gray-500">
                      <p className="font-bold">{article.authorName}</p>
                      <p>{formatDistanceToNow(new Date(article.createdAt.toDate()))} ago • {article.views} views</p>
                      <p>카테고리: {article.categoryNames}</p> {/* 카테고리 이름 및 아이콘 표시 */}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                  <p className="mb-4">{extractPreviewText(article.content)}</p>
                </a>
              </Link>
            ))
          )}
        </div>

         {/* Top Articles Section */}
         <div className="hidden lg:block w-full lg:w-1/4 p-4">
        <h2 className="text-lg font-bold mb-4">🚀 트렌딩 아티클</h2>
        <ul className="space-y-2">
          {topArticles.map((article, index) => (
            <li key={article.id} className="flex items-center">
              <span className="text-xl mr-2">{index + 1}</span>
              <Link href={`/article/${article.id}`} legacyBehavior>
                <a className="flex-1 block text-sm text-left cursor-pointer hover:bg-gray-100 transition-colors duration-300 rounded-lg p-2">
                  <div className="flex items-center">
                    {extractFirstImage(article.content) && (
                      <img
                        src={extractFirstImage(article.content)}
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded-lg mr-4"
                      />
                    )}
                    <div className="text-sm text-gray-500 flex-1">
                      <p className="font-bold">{article.authorName}님의 #{article.categoryNames}</p>
                      <p className="truncate">{article.title}</p>
                      <p className="mt-1">{extractPreviewText(article.content)}</p>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      </main>
    </>
  );
}

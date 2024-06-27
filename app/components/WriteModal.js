import React, { useState, useRef, useEffect } from "react";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db } from "../firebase";
import { collection, addDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from 'next/navigation';
import '../globals.css';  // Ensure this import points to your global CSS file

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const WriteModal = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const quillRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (quillRef.current) {
      const quill = quillRef.current.getEditor();
      quill.getModule('toolbar').addHandler('image', () => {
        imageHandler(quill);
      });

      quill.root.addEventListener('click', (e) => {
        if (e.target && e.target.tagName === 'IMG') {
          if (selectedImage) {
            selectedImage.classList.remove('selected-image');
          }
          e.target.classList.add('selected-image');
          setSelectedImage(e.target);
        } else if (selectedImage) {
          selectedImage.classList.remove('selected-image');
          setSelectedImage(null);
        }
      });

      document.addEventListener('keydown', (e) => {
        if (selectedImage && e.key === 'Escape') {
          selectedImage.classList.remove('selected-image');
          setSelectedImage(null);
        } else if (selectedImage && e.key === 'Delete') {
          quill.deleteText(quill.getSelection(), 1);
          setSelectedImage(null);
        }
      });
    }
  }, [selectedImage]);

  const imageHandler = (quill) => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('multiple', true);
    input.click();

    input.onchange = async () => {
      const files = input.files;
      if (files.length > 4) {
        alert('You can only upload up to 4 images.');
        return;
      }

      const uploadPromises = [];
      for (const file of files) {
        const storageRef = ref(storage, `images/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        const uploadPromise = new Promise((resolve, reject) => {
          uploadTask.on(
            "state_changed",
            snapshot => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
            },
            error => {
              console.error(error);
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });

        uploadPromises.push(uploadPromise);
      }

      const downloadURLs = await Promise.all(uploadPromises);
      const range = quill.getSelection();
      let currentIndex = range ? range.index : 0;
      downloadURLs.forEach(url => {
        quill.insertEmbed(currentIndex, 'image', url, 'user');
        quill.setSelection(currentIndex + 1);
        quill.insertText(currentIndex + 1, '\n');
        currentIndex += 2;  // 이미지와 줄 바꿈 후 커서를 다음 위치로 이동
      });

      // Add border radius to the images
      quill.root.querySelectorAll('img').forEach(img => {
        img.style.borderRadius = '16px';
      });
    };
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevSelectedCategories =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter(cat => cat !== category)
        : [...prevSelectedCategories, category]
    );
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert("제목이나 내용을 채워주세요.");
      return;
    }

    if (selectedCategories.length === 0) {
      alert("주제를 선택해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      if (!user) {
        alert("You must be logged in to save an article.");
        setIsLoading(false);
        return;
      }

      const categoriesWithoutEmoji = selectedCategories.map(category => category.replace(/[^가-힣a-zA-Z\s]/g, '').trim());

      await addDoc(collection(db, "JarvisArticle"), {
        title: title,
        content: content,
        author: user.email,
        categories: categoriesWithoutEmoji,  // 주제 필드 배열로 추가
        createdAt: new Date()
      });
      alert("Article saved successfully!");
      setIsLoading(false);
      onClose();  // 모달 닫기
      router.push('/');  // 홈 화면으로 리디렉션
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error saving article.");
      setIsLoading(false);
    }
  };

  const modules = {
    toolbar: {
      container: [
          ['bold', 'italic'],
        ['image'],
       ]
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-white p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 relative max-h-[90vh] overflow-auto">
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-800" onClick={onClose}>X</button>
        <div className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">제목</label>
            <input
              type="text"
              className="border rounded w-full p-2"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ borderRadius: '16px', fontSize: '16px' }} // cornerRadius 및 폰트 크기 추가
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">카테고리</label>
            <div className="flex flex-wrap">
              {['🤖 인공지능', '🦄 스타트업', '📈 미국주식', '🪙 암호화폐'].map((category) => (
                <label key={category} className="mr-4">
                  <input
                    type="checkbox"
                    value={category}
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                    className="mr-2"
                  />
                  {category}
                </label>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">내용</label>
            <div style={{ height: '40vh' }}>
              <ReactQuill
                ref={quillRef}
                value={content}
                onChange={setContent}
                modules={modules}
                className="border rounded"
                style={{ height: '90%', borderRadius: '16px', fontSize: '16px' }}  // cornerRadius 및 폰트 크기 추가
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="button"
              className="bg-blue-500 text-white py-2 px-4 rounded-full"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? '업로드 중...' : '업로드'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteModal;

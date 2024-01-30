import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Eunseoseol = () => {
  const router = useRouter();

  useEffect(() => {
    // 페이지 로드 시, YouTube 프로필 링크로 리디렉션합니다.
    window.location.href = 'https://www.youtube.com/@eunseoseol';
  }, []);

  return null;
};

export default Eunseoseol;

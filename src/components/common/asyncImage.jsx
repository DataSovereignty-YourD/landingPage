import React, { useState, useEffect } from 'react';

function AsyncImage({ src, alt, className }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(src);
        const imageBlob = await response.blob();
        setImageSrc(URL.createObjectURL(imageBlob));
      } catch (error) {
        console.error("이미지 로딩에 실패했습니다.", error);
      } finally {
        setLoading(false);
      }
    };

    loadImage();
  }, [src]); // src가 변경될 때마다 이미지를 다시 불러옵니다.

  if (loading) {
    return <div>Loading...</div>; // 로딩 중일 때 표시될 내용
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
    />
  );
}

export default AsyncImage;

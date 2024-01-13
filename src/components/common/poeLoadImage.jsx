// PreloadImage.js

import React, { useState, useEffect } from 'react';

const PreloadImage = ({ src, alt, className }) => { // 'className' prop을 사용합니다.
  const [loadedSrc, setLoadedSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoadedSrc(src);
    img.src = src;
  }, [src]);

  if (!loadedSrc) {
    return null; 
  }

  return <img src={loadedSrc} alt={alt} className={className} />; // 'className' prop을 img 태그에 적용합니다.
};

export default PreloadImage;

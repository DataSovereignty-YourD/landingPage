const preloadImages = (imageArray) => {
    imageArray.forEach((imageUrl) => {
      const img = new Image();
      img.src = imageUrl;
    });
  };
  
  export default preloadImages;
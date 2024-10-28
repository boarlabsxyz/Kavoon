const detailsImgGallery = (numberOfSlides) =>
  Array.from({ length: numberOfSlides }, (_, idx) => {
    const digit = idx + 1;

    return {
      imgSrc: `/gallery/gallery_${digit}_850x600@3x.jpg`,
      subText: `GalleryName${digit}`,
      number: `${digit}`,
    };
  });

export default detailsImgGallery;

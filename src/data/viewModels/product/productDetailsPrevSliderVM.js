function generateImagePath(dirname, id, num = 1) {
  return {
    largeImgSrc: `/${dirname}/${id}/${id}_${num}_460x580@3x.png`,
    smallImgSrc: `/${dirname}/${id}/${id}_${num}_115x120@3x.png`,
  };
}

const generateGalleryForProduct = (product) => {
  if (!product) return null;

  const { gallery, id, productKit } = product;
  const productsDir = 'products';
  const images = Array.from({ length: gallery }, (_, idx) => {
    const imgNumber = idx + 1;
    return generateImagePath(productsDir, id, imgNumber);
  });

  if (productKit) {
    images.push(generateImagePath(productsDir, productKit.id));
  }

  return images;
};

const productDetailsPrevSliderVM = (product) => ({
  gallery: generateGalleryForProduct(product),
});
export default productDetailsPrevSliderVM;

const isFooterVisible = () => {
  const heightOfScreen = document.documentElement.clientHeight;

  const footerInitialTop = document
    .querySelector('#footer')
    ?.getBoundingClientRect().top;

  let isFooterOnPage = false;
  if (footerInitialTop) {
    isFooterOnPage = footerInitialTop <= heightOfScreen;
  }

  return {
    heightOfScreen,
    footerInitialTop,
    isFooterOnPage,
  };
};

export default isFooterVisible;

const pageScrollService = {
  blockScroll() {
    document.documentElement.classList.add('is-locked'); // blocks page scrolling on iOS mobile phones
    document.body.style.overflow = 'hidden';
  },

  unblockScroll() {
    document.documentElement.classList.remove('is-locked');
    document.body.style.overflow = 'auto';
  },
};

export default pageScrollService;

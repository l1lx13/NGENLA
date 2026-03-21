document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.hero_image-ipad');
  if (!element) {
    return;
  }
  const MAX_MOVE = 200;
  const TRIGGER_SCROLL = 300;
  element.style.position = 'absolute';
  element.style.top = '0px';
  element.style.transition = 'top 0.1s ease-out';
  const onScroll = () => {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / TRIGGER_SCROLL, 1);
    const moveUp = progress * MAX_MOVE;
    element.style.top = `-${moveUp}px`;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.mobile__btn');
  const dropdown = document.querySelector('.header__dropdown');
  const animationDuration = '.5s'; 
  const closeDropdown = () => {
    if (dropdown && dropdown.classList.contains('active')) {
      dropdown.style.transition = `all ${animationDuration} ease`;
      dropdown.classList.remove('active');
      setTimeout(() => {
        dropdown.style.transition = '';
      }, parseFloat(animationDuration) * 1000);
    }
  };
  if (burgerBtn && dropdown) {
    burgerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = dropdown.classList.contains('active');
      if (!isActive) {
        dropdown.classList.add('active');
        dropdown.style.transition = `all ${animationDuration} ease`;
      } else {
        closeDropdown();
      }
    });
    document.addEventListener('click', (e) => {
      const isClickInsideDropdown = dropdown.contains(e.target);
      const isClickInsideBurger = burgerBtn.contains(e.target);
      if (!isClickInsideDropdown && !isClickInsideBurger) {
        closeDropdown();
      }
    });
  }
});
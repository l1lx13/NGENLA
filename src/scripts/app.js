window.addEventListener('load', () => {
  const element = document.querySelector('.hero_image-ipad');
  if (element) {
    const currentTop = parseInt(window.getComputedStyle(element).top) || 0;
    element.style.top = (currentTop - 50) + 'px';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.mobile__btn');
  const dropdown = document.querySelector('.header__dropdown');
  const animationDuration = '.5s'; 
  if (burgerBtn && dropdown) {
    burgerBtn.addEventListener('click', () => {
      const isActive = dropdown.classList.contains('active');
      if (!isActive) {
        dropdown.classList.add('active');
        dropdown.style.transition = `all ${animationDuration} ease`;
      } else {
        dropdown.style.transition = `all ${animationDuration} ease`;
        dropdown.classList.remove('active');
        setTimeout(() => {
            dropdown.style.transition = '';
        }, parseFloat(animationDuration) * 1000);
      }
    });
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const element = document.querySelector('.hero_image-ipad');
  
  if (!element) {
    console.warn('Элемент .hero_image-ipad не найден');
    return;
  }

  const MAX_MOVE = 200;        // Максимум движения вверх (в пикселях)
  const TRIGGER_SCROLL = 300; // На каком скролле достигается максимум

  // Инициализация: сбрасываем стили
  element.style.position = 'absolute';
  element.style.top = '0px';
  element.style.transition = 'top 0.1s ease-out';

  const onScroll = () => {
    const scrollY = window.scrollY;
    
    // Прогресс от 0 до 1
    const progress = Math.min(scrollY / TRIGGER_SCROLL, 1);
    
    // Двигаем ВВЕРХ при скролле ВНИЗ (отрицательное значение)
    const moveUp = progress * MAX_MOVE;
    
    // Применяем: чем больше скролл, тем больше отрицательное значение
    element.style.top = `-${moveUp}px`;
    
    // Для отладки (удалите потом)
    // console.log(`Scroll: ${scrollY}, Top: -${moveUp}px`);
  };

  // Слушатель скролла
  window.addEventListener('scroll', onScroll, { passive: true });
  
  // Запуск при загрузке (на случай, если страница загрузилась не с начала)
  onScroll();
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
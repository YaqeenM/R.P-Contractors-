document.querySelectorAll('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', () => {
    document.getElementById('modal').classList.add('open');
    swiper.slideTo(index);
  });
});

function closeModal() {
  document.getElementById('modal').classList.remove('open');
}

// Swiper setup
const swiper = new Swiper('.swiper', {
  loop: false,
  allowTouchMove: false,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
});

// Initialize sliders
window.addEventListener('load', () => {
  document.querySelectorAll('[data-slider]').forEach(slider => {
    new Slider(slider, {
      orientation: 'horizontal',
      handleText: '↔',
    });
  });
});

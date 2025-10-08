export default function scrollAnimation() {
  const fadeElements = document.querySelectorAll(
    '.fade-up, .hero__title, .cardItem, .content__inner'
  );

  const onScroll = () => {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  onScroll(); // trigger on page load
}

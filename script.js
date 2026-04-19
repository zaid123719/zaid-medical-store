const faders = document.querySelectorAll('.fade');
https://wa.me/7805833161
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});
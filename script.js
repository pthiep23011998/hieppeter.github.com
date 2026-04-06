// ============================
// Auto Scale (viewport fit)
// ============================
(function () {
  const BASE_WIDTH = 680; // chiều rộng thiết kế gốc (px)

  function scaleCard() {
    const card = document.querySelector('.card');
    if (!card) return;
    const vw = window.innerWidth;
    const scale = Math.min(1, (vw * 0.94) / BASE_WIDTH);
    card.style.transform = `scale(${scale})`;
    card.style.transformOrigin = 'top center';
    // Điều chỉnh chiều cao body để không bị scroll thừa
    const cardH = card.offsetHeight * scale;
    document.body.style.minHeight = cardH + 96 + 'px';
  }

  window.addEventListener('resize', scaleCard);
  window.addEventListener('load', scaleCard);
  scaleCard();
})();

// ============================
// Falling Petals
// ============================
(function () {
  const container = document.getElementById('petals');
  const PETAL_COUNT = 28;

  for (let i = 0; i < PETAL_COUNT; i++) {
    const petal = document.createElement('div');
    petal.classList.add('petal');

    const size    = 7 + Math.random() * 10;
    const left    = Math.random() * 110 - 5;
    const delay   = Math.random() * 18;
    const dur     = 10 + Math.random() * 14;
    const skew    = Math.random() * 40 - 20;
    const opacity = 0.45 + Math.random() * 0.4;

    petal.style.cssText = `
      left: ${left}%;
      width: ${size}px;
      height: ${size}px;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      opacity: ${opacity};
      border-radius: ${50 + skew}% ${50 - skew}% ${50 + skew}% ${50 - skew}%;
      transform: rotate(${Math.random() * 360}deg);
    `;

    container.appendChild(petal);
  }
})();

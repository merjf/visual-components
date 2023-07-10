$(document).ready(function () {
  const links = [...document.querySelectorAll('.card-tab-tab-item')];
  const cards = [...document.querySelectorAll('.card-tab-cards')];
  links.forEach(function (link, index) {
    link.addEventListener('click', function (e) {
      if (link.classList.contains('active')) {
        return;
      }
      links.map((link) => link.classList.remove('active'));
      cards.map((link) => link.classList.remove('active'));
      cards[index].classList.add('active');
      e.target.classList.add('active');
      const btn = document.getElementById('request-latest-mrt-btn');
      if (btn.textContent === 'Request latest CMRT') {
        btn.textContent = 'Request latest EMRT';
      } else {
        btn.textContent = 'Request latest CMRT';
      }
    });
  });
});

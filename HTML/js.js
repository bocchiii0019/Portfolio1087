var currentPage = location.pathname.split('/').pop() || 'Home.html';
document.querySelectorAll('.nav a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }
});

document.querySelectorAll('a[href="#work"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  });
});
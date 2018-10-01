var title = document.getElementsByClassName('title')[0];



title.addEventListener('mouseover', function() {
  title.style.transition = '1s';
  title.style.color = '#1D3942';
  title.innerHTML = 'hello world';
});

title.addEventListener('mouseout', function() {
  title.style.transition = '1s';
  title.style.color = '#92D5E6';
  title.innerHTML = 'the blueview';
});

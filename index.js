var title = document.getElementsByClassName('title')[0];

title.addEventListener('mouseover', function() {
  title.style.transition = '1s';
  title.style.color = '#1D3942';
  title.textContent = 'Hello World';
})
title.addEventListener('mouseout', function() {
  title.style.transition = '1s';
  title.style.color = '#009FDF';
  title.textContent = 'the blueview';
})

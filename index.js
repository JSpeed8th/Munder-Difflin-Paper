var title = document.getElementsByClassName('title')[0];

title.addEventListener('mouseover', function() {
  title.style.color = '#1D3942';
  title.style.transition = '1s';
})
title.addEventListener('mouseout', function() {
  title.style.color = '#009FDF';
})

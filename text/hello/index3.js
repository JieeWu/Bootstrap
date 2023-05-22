const fixedHeight = document.getElementById('fixed-height');
const hiddenContent = fixedHeight.querySelector('.hidden-content');

fixedHeight.addEventListener('mouseenter', function() {
  hiddenContent.style.opacity = '1'; // 显示隐藏的内容
});

fixedHeight.addEventListener('mouseleave', function() {
  hiddenContent.style.opacity = '0'; // 隐藏内容
});
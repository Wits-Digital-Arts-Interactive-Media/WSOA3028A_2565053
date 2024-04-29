function handleMouseEvents() {
    const text = document.getElementById('animated-Mouse-text');

    document.addEventListener('mouseover', () => {
        a.style.fontSize = '1.2em';
        });
        a.addEventListener('mouseout', () => {
        a.style.fontSize = '1em';
        });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    handleMouseEvents();
  });
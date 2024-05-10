function handleMouseEvents() {
  const anchors = document.querySelectorAll('.navList a');

  anchors.forEach(a => {
      a.addEventListener('mouseover', () => {
          a.style.fontSize = '1.2em';
          a.style.color = '#A6B9C8'; // Change color to red (#FF0000) when mouseover
      });

      a.addEventListener('mouseout', () => {
          a.style.fontSize = '1em';
          a.style.color = ''; // Reset color to default when mouseout
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleMouseEvents();
});
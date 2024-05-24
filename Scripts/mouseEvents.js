function handleMouseEvents() {
  const anchors = document.querySelectorAll('.navList a');

  anchors.forEach(a => {
      a.addEventListener('mouseover', () => {
          a.style.transform = 'scale(1.2)';
          //a.style.color = '#A6B9C8'; // Change color to desired color when mouseover
      });

      a.addEventListener('mouseout', () => {
          a.style.transform = 'scale(1)';
          //a.style.color = ''; // Reset color to default when mouseout
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleMouseEvents();
});
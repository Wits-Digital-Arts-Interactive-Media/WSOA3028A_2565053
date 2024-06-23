let currentWeek = 1; // Initialize current week to 1

function loadBlogPost(postUrl) {
  const container = document.getElementById('blog-posts-container');
  const timelines = document.querySelectorAll('.timeline'); // Select all elements with class "timeline"
  
  // Remove all timeline elements
  timelines.forEach(timeline => {
    timeline.remove();
  });
  
  container.innerHTML = ''; 
  
  fetch(postUrl)
   .then(response => response.text())
   .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const postContent = doc.body.innerHTML;
      container.innerHTML = postContent; 
      
      const weekNumber = postUrl.match(/week(\d+).html$/)[1];
      currentWeek = parseInt(weekNumber);
      
      // Wait for the content to be loaded and elements to be available in the DOM
      setTimeout(() => {
        const nextButton = document.querySelector('.Next');
        const previousButton = document.querySelector('.Previous');
        
        if (nextButton) {
          nextButton.addEventListener('click', () => {
            const weeks = ['week1', 'week2', 'week3', 'week4', 'week6', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13'];
            const currentIndex = weeks.indexOf(`week${currentWeek}`);
            if (currentIndex < weeks.length - 1) {
              currentWeek = parseInt(weeks[currentIndex + 1].replace('week', ''));
              loadBlogPost(`../../Pages/Blogposts/${weeks[currentIndex + 1]}.html`);
            }
          });
        }
        
        if (previousButton) {
          previousButton.addEventListener('click', () => {
            const weeks = ['week1', 'week2', 'week3', 'week4', 'week6', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13'];
            const currentIndex = weeks.indexOf(`week${currentWeek}`);
            if (currentIndex > 0) {
              currentWeek = parseInt(weeks[currentIndex - 1].replace('week', ''));
              loadBlogPost(`../../Pages/Blogposts/${weeks[currentIndex - 1]}.html`);
            }
          });
        }
      }, 0); // Use setTimeout to defer execution until after the content is loaded
    })
    .catch(error => {
      console.error('Error loading blog post:', error);
    });
}
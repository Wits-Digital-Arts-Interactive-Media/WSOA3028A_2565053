let currentWeek = 1; // Initialize current week to 1
let menuCreated = false;

function loadBlogPost(postUrl) {
  const container = document.getElementById('blog-posts-container');
  const timelines = document.querySelectorAll('.timeline'); // Select all elements with class "timeline"
  
  // Remove all timeline elements
  timelines.forEach(timeline => {
    timeline.remove();
  });
  
  container.innerHTML = ''; // Clear the container before loading new content
  
  fetch(postUrl)
   .then(response => response.text())
   .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const postContent = doc.body.innerHTML;
      container.innerHTML = postContent; // Replace the container content with the new post
      
      // Update current week
      const weekNumber = postUrl.match(/week(\d+).html$/)[1];
      currentWeek = parseInt(weekNumber);
      
      // Add event listeners to the next and previous buttons
      const nextButton = document.querySelector('.Next');
      const previousButton = document.querySelector('.Previous');
      
      nextButton.addEventListener('click', () => {
        const weeks = ['week1', 'week2', 'week3', 'week4', 'week6', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13', 'week14'];
        const currentIndex = weeks.indexOf(`week${currentWeek}`);
        if (currentIndex < weeks.length - 1) {
          currentWeek = parseInt(weeks[currentIndex + 1].replace('week', ''));
          loadBlogPost(`../../Pages/Blogposts/${weeks[currentIndex + 1]}.html`);
        }
      });
      
      previousButton.addEventListener('click', () => {
        const weeks = ['week1', 'week2', 'week3', 'week4', 'week6', 'week8', 'week9', 'week10', 'week11', 'week12', 'week13', 'week14'];
        const currentIndex = weeks.indexOf(`week${currentWeek}`);
        if (currentIndex > 0) {
          currentWeek = parseInt(weeks[currentIndex - 1].replace('week', ''));
          loadBlogPost(`../../Pages/Blogposts/${weeks[currentIndex - 1]}.html`);
        }
      });
      
      // Show the dropdown menu when the container loads a page
      if (!menuCreated) {
        document.querySelector('.week-dropdown').style.display = 'block';
        menuCreated = true;
      }
    });
}
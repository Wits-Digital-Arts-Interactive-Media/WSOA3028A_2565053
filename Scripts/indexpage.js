const root = "/WSOA3028A_2565053"

const pageItems = [
  {name: "Home", href: root + "/index.html"},
  {name: "Blogs", href: `${root}/Pages/Blogposts/blogposts.html`},
  {name: "Essays", href: `${root}/Pages/Essays/essays.html`},
  {name: "Portfolio", href: `${root}/Pages/Portfolio/portfolio.html`},
  {name: "Design", href: `${root}/Pages/Web Design/design.html`},
  {name: "About", href: `${root}/Pages/About me/about.html`},
];

function animateText() {
  const text = document.getElementById('animated-text');
  const originalText = text.textContent;
  text.textContent = '';

  let index = 0;

  function addLetter() {
    if (index < originalText.length) {
      text.textContent += originalText.charAt(index);
      index++;
      setTimeout(addLetter, 100); 
    }
  }

  addLetter();
}

document.addEventListener('DOMContentLoaded', function() {
  animateText();
});

function loadlatestBlogPage() {
  const nextPageUrl = root + "/Pages/Blogposts/week10.html";
  window.location.href = nextPageUrl;
}

function loadPortfolioPage() {
  const PortfolioUrl = root + "/Pages/Portfolio/portfolio.html";
  window.location.href = PortfolioUrl;
}

function loadEssayPage() {
  const EssayUrl = root + "/Pages/Essays/essays.html";
  window.location.href = EssayUrl;
}

function loadDesignPage() {
  const DesignUrl = root + "/Pages/Web Design/design.html";
  window.location.href = DesignUrl;
}


const root = "/WSOA3028A_2565053"

const menuItems = [
    {name: "Home", href: root + "/index.html"},
    {name: "Blogs", href: `${root}/Pages/Blogposts/blogposts.html`},
    {name: "Essays", href: `${root}/Pages/Essays/essays.html`},
    {name: "Portfolio", href: `${root}/Pages/Portfolio/portfolio.html`},
    {name: "About", href: `${root}/Pages/About me/about.html`},
    {name: "Design", href: `${root}/Pages/Web Design/design.html`}
];


export function initialise(currentPage){                   
    const nav = document.querySelector("header > nav")      
    const ul = document.createElement("ul")
    for(let menuItem of menuItems){                         
        const li = document.createElement("li")             
        if(currentPage != menuItem.name){                    
            const a = document.createElement("a")            
            a.innerText = menuItem.name                     
            a.setAttribute("href", menuItem.href)           
            li.appendChild(a)
        }else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)
}
function handleMouseEvents() {
  const anchors = document.querySelectorAll('.navList a');

  anchors.forEach(a => {
      a.addEventListener('mouseover', () => {
          a.style.transform = 'scale(1.2)';
      });

      a.addEventListener('mouseout', () => {
          a.style.transform = 'scale(1)';
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  handleMouseEvents();
});
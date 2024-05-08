const menuItems = [
    { name: "Home", href: "index.html" },
    { name: "Blogs", href: "/Pages/Blogposts/blogposts.html" },
    { name: "Essays", href: "/Pages/Essays/essays.html" },
    { name: "Portfolio", href: "/Pages/Portfolio/portfolio.html" },
    { name: "Web Design", href: "/Pages/Web%20Design/design.html" },
    { name: "About", href: "/Pages/About%20me/about.html" }
];

export function initialise(currentPage) {
    
    if (document.querySelector("header > nav > ul")) {
        return; 
    }

    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");
    for (let menuItem of menuItems) {
        const li = document.createElement("li");
        if (currentPage !== menuItem.name) {
            const a = document.createElement("a");
            a.innerText = menuItem.name;
            a.setAttribute("href", menuItem.href);
            li.appendChild(a);
        } else {
            li.innerText = menuItem.name;
        }
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}

document.addEventListener("DOMContentLoaded", function() {
   
    const currentPage = document.title;
    initialise(currentPage);
});
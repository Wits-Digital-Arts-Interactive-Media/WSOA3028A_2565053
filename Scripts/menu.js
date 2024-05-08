const menuItems = [
    {name:"Home", href: "index.html" },
    {name:"Blogs", href: "/WSOA3028A_2565053/Pages/Blogposts/blogposts.html"},
    {name:"Essays" , href: "/WSOA3028A_2565053/Pages/Essays/essays.html" },
    {name:"Portfolio" , href: "/WSOA3028A_2565053/Pages/Portfolio/portfolio.html"},
    {name:"Design", href:  "/WSOA3028A_2565053/Pages/Web Design/design.html"},
    {name:"About", href:  "/WSOA3028A_2565053/Pages/About me/about.html"}
];

export function initialise(currentPage) {
    const nav = document.querySelector("header > nav")       
    const ul = document.createElement("ul")                  
    for (let menuItem of menuItems) {                        
        const li = document.createElement("li")              
        if (currentPage != menuItem.name) {                  
            const a = document.createElement("a")            
            a.innerText = menuItem.name                      
            a.setAttribute("href", menuItem.href)                
            li.appendChild(a)                                
        } else { li.innerText = menuItem.name }
        ul.appendChild(li)                                   
    }
    nav.appendChild(ul)                                     
}
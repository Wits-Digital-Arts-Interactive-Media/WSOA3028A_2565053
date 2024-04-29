const root = "/WSOA3028A_2565053"

const menuItems = [
    { name: "Home", href: "/WSOA3028A_2565053/index.html" },    
    { name: "Blogs", href: "/WSOA3028A_2565053/Blogposts/blogposts.html" },
    { name: "Essays", href: "/WSOA3028A_2565053/Essays/essays.html" },
    { name: "Portfolio", href: "/WSOA3028A_2565053/Portfolio/portfolio.html" },
    { name: "Design", href: "/WSOA3028A_2565053/Web Design/design.html" },
];


export function initialise(currentPage){

    console.log("worked")
    const nav = document.querySelector("header > nav")
    const ul = document.createElement("ul")
    for(let menuItem of menuItems)
    {
        const li = document.createElement("li")
        if(currentPage != menuItem.name)
        {
            const a = document.createElement("a")
            a.innerText = menuItem.name
            a.setAttribute("href", menuItem.href)
            li.appendChild(a)
           
            a.addEventListener('mouseover', () => {
            a.style.fontSize = '1.2em';
            });
            a.addEventListener('mouseout', () => {
            a.style.fontSize = '1em';
            });
        }
        else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)

}
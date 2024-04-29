const menuItems = [
    {name: "Home", href: "WSOA3028A/index.html"},
    {name: "Blog", href: "WSOA3028A/Pages/Blogposts/blogposts.html"},
    {name: "Essays", href: "WSOA3028A/Pages/Essays/essays.html"},
    {name: "Portfolio", href: "WSOA3028A/Pages/Portfolio/portfolio.html"},
    {name: "Design", href: "WSOA3028A/Pages/Web Design/design.html"},
    {name: "About", href: "WSOA3028A/Pages/About me/about.html"},
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

        }
        else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)


}
const menuItems = [
    {name: "Home", href: "/index.html"},
    {name: "Blog", href: "/Pages/Blogposts/blogposts.html"},
    {name: "Essays", href: "/Pages/Essays/essays.html"},
    {name: "Portfolio", href: "/Pages/Portfolio/portfolio.html"},
    {name: "Design", href: "/Pages/Web Design/design.html"},
    {name: "About", href: "/Pages/About me/about.html"},
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
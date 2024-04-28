const menuItems = [
    {name: "Home", href:""},
    {name: "Blogposts", href: `${root} Pages/Blogposts/blogposts.html`},
    {name: "Essays", href: `${root} Pages/Essays/essays.html`},
    {name: "Portfolio", href: `${root} Pages/Portfolio/portfolio.html`},
    {name: "Web site Design", href: `${root} Pages/Web Design/design.html`},
    {name: "About Me", href: `${root} Pages/About Me/about.html`},
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

    console.log("Work");
    
}

const root = "/WSOA3028A_2583750"

const menuItems = [
    {name: "Home", href: root + "/index.html"},
    {name: "Blogs", href: `${root}/Pages/Blogposts/blogposts.html`},
    {name: "Essays", href: `${root}/Pages/Essays/essays.html`},
    {name: "Portfolio", href: `${root}/Pages/Portfolio/portfolio.html`},
    {name: "Design", href: `${root}/Pages/Web Design/design.html`},
    {name: "About", href: `${root}//Pages/About me/about.html`},
    
];
export function initialise(currentPage){                    //creates nav menu based on array. Param = currentPage

    console.log("worked")
    const nav = document.querySelector("header > nav")      //selects nav element in header
    const ul = document.createElement("ul")
    for(let menuItem of menuItems)                          //iterates over each menu item in menuItems array
    {
        const li = document.createElement("li")              //Within each iteration a list element is made for each item
        if(currentPage != menuItem.name)                     //Condition to check if currentPage name does not match menu item name
        {
            const a = document.createElement("a")            // if its true, an anchor element is made for each menu item
            a.innerText = menuItem.name                     // sets the text content of anchor to the menu item name
            a.setAttribute("href", menuItem.href)           // sets href attribute to the corresponding url
            li.appendChild(a)

        }
        else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)

    
}
const root = "/WSOA3028A_2565053"

const blogItems = [
    {name: "Week1", href: root + "/Pages/Blogposts/week1.html"},
    {name: "Week2", href: `${root}/Pages/Blogposts/week2.html`},
    {name: "Week3", href: `${root}/Pages/Blogposts/week3.html`},
    {name: "Week4", href: `${root}/Pages/Blogposts/week4.html`},
    {name: "Week6", href: `${root}/Pages/Blogposts/week6.html`},
    {name: "Week8", href: `${root}/Pages/Blogposts/week8.html`},
    {name: "Week9", href: `${root}/Pages/Blogposts/week9.html`},
    {name: "Week10", href: `${root}/Pages/Blogposts/week10.html`},
 
];

export function initialiseBlog(currentPage){                   
    console.log("worked blogs")
    const nav = document.querySelector("header > nav")    
    const ul = document.createElement("ol")           
    for(let blogItem of blogItems) {                    
        const li = document.createElement("li")           
        if(currentPage != blogItem.name) {                 
            const a = document.createElement("a")          
            a.innerText = blogItem.name                 
            a.setAttribute("href", blogItem.href)         
            li.appendChild(a)                      
        } else {
            li.innerText = blogItem.name                  
        }
        ul.appendChild(li)                                
    }
    nav.appendChild(ul)                                   
}
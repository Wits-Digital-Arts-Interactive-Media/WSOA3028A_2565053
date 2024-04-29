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

        }
        else{
            li.innerText = menuItem.name
        }
        ul.appendChild(li)
    }
    nav.appendChild(ul)


function animateHeading() {
    var heading = document.getElementById('animated-heading');
    heading.style.fontSize = '48px'; // Change font size
    setTimeout(function() {
    heading.style.fontSize = '36px'; // Restore original font size after 1 second
    }, 1000); // 1000 milliseconds = 1 second
    }

    // Call the function to start the animation
    animateHeading();
}
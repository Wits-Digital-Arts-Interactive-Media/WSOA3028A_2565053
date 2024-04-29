document.addEventListener('DOMContentLoaded', () => {
    console.log('domloaded');
    // Function to create and append navigation elements
    function createNavigation() {
        const nav = document.getElementById('navList');

        // Define navigation items
        const navItems = [
            { text: "Home", href: "index.html" },
            { text: "Blog", href: "Pages/Blogposts/blogposts.html" },
            { text: "Essays", href: "Pages/Essays/essays.html" },
            { text: "Portfolio", href: "Pages/Portfolio/portfolio.html" },
            { text: "Design", href: "Pages/Web Design/design.html" },
            { text: "About", href: "Pages/About me/about.html" }
        ];

        // Create and append navigation elements
        navItems.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.textContent = item.text;
            a.href = item.href;
            li.appendChild(a);
            nav.appendChild(li);

            a.addEventListener('mouseover', () => {
                a.style.fontSize = '1.2em';
            });
            a.addEventListener('mouseout', () => {
                a.style.fontSize = '1em';
            });
        });
    }

    // Call createNavigation function when DOM is loaded
    createNavigation();
});
function loadContent(url, containerId, btnId) {
    var container = document.getElementById(containerId);
    var btn = document.getElementById(btnId);

    if (container.classList.contains('hidden')) {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                container.innerHTML = data;
                container.classList.remove('hidden');
                btn.innerHTML = "Read less";
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
            });
    } else {
        collapseHTML(containerId, btnId);
    }
}

function collapseHTML(containerId, btnId) {
    var container = document.getElementById(containerId);
    var btn = document.getElementById(btnId);

    container.innerHTML = '';
    btn.innerHTML = "Read more";
    container.classList.add('hidden');
}

function collapseScripts() {
    var elementsToCollapse = document.querySelectorAll('.Collapse');
    elementsToCollapse.forEach(function(element) {
    element.style.display = 'none'; 
    });
}


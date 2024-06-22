document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('Download-Essay1');
    
    downloadButton.addEventListener('click', function() {
        // Replace the URL with the actual path to your essay PDF
        const essayUrl = 'collection/WSOA3028A_2565053_UI & UX Analysis.pdf';
        const link = document.createElement('a');
        link.href = essayUrl;
        link.download = 'WSOA3028A_2565053_UI & UX Analysis.pdf'; 
        link.click();
    });
});

document.getElementById('iframe-read').addEventListener('click', function() {
    openNewTab('collection/WSOA3028A_2565053_UI & UX Analysis.pdf');
});

function openNewTab(url) {
    window.open(url, '_blank');
}

//Essay 2
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('Download-Essay2');
    
    downloadButton.addEventListener('click', function() {
        // Replace the URL with the actual path to your essay PDF
        const essayUrl = 'collection/WSOA3028A_2565053_Essay2_Digital Colonialism.pdf';
        const link = document.createElement('a');
        link.href = essayUrl;
        link.download = 'WSOA3028A_2565053_Essay2_Digital Colonialism.pdf'; 
        link.click();
    });
});

document.getElementById('iframe-read2').addEventListener('click', function() {
    openNewTab('collection/WSOA3028A_2565053_Essay2_Digital Colonialism.pdf');
});

function openNewTab(url) {
    window.open(url, '_blank');
}



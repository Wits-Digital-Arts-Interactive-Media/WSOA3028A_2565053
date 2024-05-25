document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.querySelector('.btn-variation-2');
    
    downloadButton.addEventListener('click', function() {
        // Replace the URL with the actual path to your essay PDF
        const essayUrl = 'collection/WSOA3028A_2565053_UI & UX Analysis.pdf';
        const link = document.createElement('a');
        link.href = essayUrl;
        link.download = 'WSOA3028A_2565053_UI & UX Analysis.pdf'; // The name of the file to be downloaded
        link.click();
    });
});
document.getElementById('iframe-read').addEventListener('click', function() {
    openNewTab('/Pages/Essays/collection/WSOA3028A_2565053_UI & UX Analysis.pdf');
});

function openNewTab(url) {
    window.open(url, '_blank');
}
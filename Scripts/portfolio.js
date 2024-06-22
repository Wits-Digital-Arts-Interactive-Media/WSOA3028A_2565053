<<<<<<< HEAD
function downloadGame(url) {
=======
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Game-1').addEventListener('click', function() {
        downloadFile('WSOA3028A_2565053/Pages/Portfolio/Game Builds/WSOA3003A_2565053_FinalExam', 'WSOA3003A_2565053_FinalExam');
    });

    document.getElementById('Game-2').addEventListener('click', function() {
        downloadFile('path/to/Ancient_Egypt_Adventure.pdf', 'Ancient_Egypt_Adventure.pdf');
    });
});

function downloadFile(url, filename) {
>>>>>>> parent of 01fa41e (touched up my blogs page and added my game files)
    const link = document.createElement('a');
    link.href = url;
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
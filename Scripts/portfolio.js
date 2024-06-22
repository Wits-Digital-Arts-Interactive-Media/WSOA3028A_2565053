document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('Game-1-btn').addEventListener('click', function() {
        downloadFile('WSOA3028A_2565053/Pages/Portfolio/Game Builds/WSOA3003A_2565053_FinalExam.zip', 'WSOA3003A_2565053_FinalExam.zip');
    });

    document.getElementById('Game-2').addEventListener('click', function() {
        downloadFile('path/to/Ancient_Egypt_Adventure.pdf', 'Ancient_Egypt_Adventure.pdf');
    });
});

function downloadFile(url, filename) {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    console.log("worked");
}
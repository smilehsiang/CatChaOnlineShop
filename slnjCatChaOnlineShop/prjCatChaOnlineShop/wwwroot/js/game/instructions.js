var instructionsContainer = document.querySelector('.instructions-container');
var pagination = document.querySelector('.pagination');

//首先顯示a
document.addEventListener('DOMContentLoaded', function () {
    showPage('a');
});

//切換顯示
function showInstructions() {
    var instructionsContainer = document.querySelector('.instructions-container');
    var pagination = document.querySelector('.pagination');

    if (instructionsContainer.style.display === 'none') {
        instructionsContainer.style.display = 'flex';
        pagination.style.display = 'flex';
    } else {
        instructionsContainer.style.display = 'none';
        pagination.style.display = 'none';
    }
}

//內容開關
function showPage(page) {
    var instructions = document.querySelectorAll('.xx');
    var pagination = document.querySelector('.pagination');

    for (var i = 0; i < instructions.length; i++) {
        instructions[i].style.display = 'none';
    }

    if (page === 'a' || page === 'b' || page === 'c') {
        var targetPage = document.getElementById(page);
        targetPage.style.display = 'block';
    }
    pagination.scrollIntoView({ behavior: 'smooth' }); // 捲動至 pagination 元素位置
}
//右上角X的關閉
function hideInstructions() {
    var instructionsContainer = document.querySelector('.instructions-container');
    var pagination = document.querySelector('.pagination');
    popup.style.display = 'none';
    instructionsContainer.style.display = 'none';
    pagination.style.display = 'none';
}


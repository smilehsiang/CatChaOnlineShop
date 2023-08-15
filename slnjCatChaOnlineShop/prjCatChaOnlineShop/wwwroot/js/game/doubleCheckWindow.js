const CanvasDoubleCheck = document.getElementById("CanvasDoubleCheck");
const ctxrdoublecheck = CanvasDoubleCheck.getContext('2d');
ctxrdoublecheck.font = "37px monospace";

//按鈕
const yesBTNimg = new Image(); //是
const cancelBTNimg = new Image();//否

//視窗
const doublecheckWinImg = new Image();

const checkWinWidth = 350; //確認視窗寬度
const checkWinHeight = 350;//確認視窗高度
const winX = (406 / 2) - (checkWinWidth / 2) //確認視窗x值
// const winX = (innerWidth/2)-(checkWinWidth/2)+8 //確認視窗x值
const winY = (CanvasDoubleCheck.height / 2) - (checkWinHeight / 2)//確認視窗y值
const checkBTNy = 390;//是否兩個按鈕y值

class doubleCheckBTN {//按鈕類別
    constructor(x, y, image) {
        this.x = (checkWinWidth / 2) + x + 8;
        this.y = y;
        this.width = 120;
        this.height = 40;
        this.image = image;
    }
    load() {
        ctxrdoublecheck.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
}

const yesBTN = new doubleCheckBTN(40, checkBTNy, yesBTNimg);
const cancelBTN = new doubleCheckBTN(-120, checkBTNy, cancelBTNimg);
const yesBTN_Pause = new doubleCheckBTN(40, checkBTNy, yesBTNimg);
const cancelBTN_Pause = new doubleCheckBTN(-120, checkBTNy, cancelBTNimg);

function doubleCheckLoad() { //載入確認視窗方法

    requestAnimationFrame(doubleCheckLoad);

    CanvasDoubleCheck.style.border = "4px solid black";
    ctxrdoublecheck.drawImage(doublecheckWinImg, winX, winY, checkWinWidth, checkWinHeight)
    ctxrdoublecheck.fillStyle = "black";
    yesBTN.load();
    cancelBTN.load();
    ctxrdoublecheck.fillText(`Your Score:${userScore}`, winX + 60, winY + 120);
    ctxrdoublecheck.fillText('Again?', winX + 120, winY + 220);
}


function gamePause() { //載入確認視窗方法

    requestAnimationFrame(gamePause);

    CanvasDoubleCheck.style.border = "4px solid black";
    ctxrdoublecheck.drawImage(doublecheckWinImg, winX, winY, checkWinWidth, checkWinHeight)
    ctxrdoublecheck.fillStyle = "black";
    yesBTN_Pause.load();
    cancelBTN_Pause.load();
    ctxrdoublecheck.fillText('Continue?', winX + 85, winY + 150);
}

$('#page3').click(function () {
    //   console.log('test');
    //   $('#popup').css('height', '500px');

    //   var rectangle = $('<div></div>');

    //   rectangle.css({
    //     'width': '406px',
    //     'height': '100px',
    //     'background-color': 'transparent',
    //     'position': 'relative',  // 這個屬性可以使矩形相對於父元素的位置
    //     'left': '0px',
    //     'top': '500px'
    // });

    // // 將矩形添加到指定的範圍內（這裡使用 id 為 "container" 的元素作為範圍）
    // $('#popup').append(rectangle);
})
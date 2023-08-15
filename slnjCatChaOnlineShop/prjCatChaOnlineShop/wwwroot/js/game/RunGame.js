//畫布
const Canvasrungame = document.getElementById("Canvasrungame");
const ctxrungame = Canvasrungame.getContext('2d');

//參數
let isAnimationRunning = true; //遊戲停止與否
let checkmachine = false;//加分檢查點
const gravity = 0.5;
ctxrungame.font = "20px monospace";
const rungameBK = new Image();
const kittenRun = new Image();
const floorR = new Image();
const floorR2 = new Image();
const rock = new Image();
const pauseBTNimg = new Image();
const ScoreBK = new Image();



let isPause = false;//判斷遊戲暫停狀態


let hightestScore = 0
let userScore = 0
let blockCycle = 0;
const speedupPara = 5


class ScoreDisplay {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    loadHightestScore() {
        ctxrungame.fillStyle = "black";
        ctxrungame.drawImage(ScoreBK, 20, 20, 150, 40);
        ctxrungame.fillText(`Highest:${hightestScore}`, this.x, this.y);
    }
    loadCurrentScore() {
        ctxrungame.fillStyle = "black";
        ctxrungame.drawImage(ScoreBK, 190, 20, 150, 40);
        ctxrungame.fillText(`Score:${userScore}`, this.x + 170, this.y);
    }
    load() {
        this.loadHightestScore();
        this.loadCurrentScore();
    }
}
class block {
    constructor() {
        this.x = 400;
        // this.y = 447;
        this.y = 438;
        this.width = 50;
        this.height = 50;
        this.velocity = 4
        this.blockDistance = [400, 500, 600, 700, 800, 900] //障礙物隨機出生的位置(x值)
    }
    draw() {
        ctxrungame.drawImage(rock, this.x, this.y, this.width, this.height);
        // ctxrungame.fillStyle='blue'
        // ctxrungame.fillRect(this.x, this.y, this.width, this.height)
    }
    update() {
        if (blockCycle > speedupPara) {
            this.velocity++;
            blockCycle = 0;
        }

        this.draw()
        this.x -= this.velocity
        if (this.x + this.width < 0) {
            let index = Math.floor(Math.random() * this.blockDistance.length)
            this.x = this.blockDistance[index]; //讓障礙物重置
            blockCycle++;
        }
    }
}

class runCat {
    constructor(color) {
        this.x = 0; //貓初始x位置
        this.y = 310;//貓初始y位置
        this.width = 128;
        this.height = 128;
        this.velocity = 0 //跳躍速度
        this.frames = 0;
        this.jumpframes = 2;
        this.runGameframecount = 0;
        this.currentScore = 0
        this.catpicSize = 128;
        this.catcolor = color;
        this.catX = 36;
        this.catSize = 42;

    }
    setFrameCount() {
        this.runGameframecount++; //因為圖片切換頻率跟遊戲動畫需要不同步
    }
    draw() {
        if (this.y < 310)//當貓離開地面之後
        {
            kittenRun.src = RunCatData[this.catcolor]['jump'];//更換成跳躍的動畫
            // ctxrungame.fillStyle='red'
            // ctxrungame.fillRect(this.catX, this.y+84, 42, 42)
            ctxrungame.drawImage(kittenRun, 128 * this.jumpframes, 0, this.catpicSize, this.catpicSize, 0, this.y + 32, this.width, this.height);
        }
        if (this.velocity == 0)//當貓回到地板時(跳躍速度是0)
        {
            kittenRun.src = RunCatData[this.catcolor]['walk'];
            // ctxrungame.fillStyle='red'
            // ctxrungame.fillRect(this.catX, this.y+84, 42, 42)
            ctxrungame.drawImage(kittenRun, 128 * this.frames, 0, this.catpicSize, this.catpicSize, 0, this.y + 32, this.width, this.height);
        }
    }
    update() {
        this.draw();
        this.setFrameCount();
        this.y += this.velocity//在跳起時，貓會根據速度更新y軸位置
        if (this.y + this.height + this.velocity <= rfloor.y)//當貓在空中的時候
        {
            this.velocity += gravity//速度會被重力影響變慢
        }
        else {
            this.velocity = 0//沒有跳起時，速度為0
            checkmachine = false//貓一落地，就將計分機器關閉(確保不會觸發檢查條件機制)
            if (this.runGameframecount > 6)//跑步影片影格速度，數字越小貓的動畫越快
            {
                this.frames++;//把貓的動畫影格往前推一格
                if (this.frames > 7) this.frames = 0//到達最後一個影格之後，再回到第一個影格
                this.runGameframecount = 0;
            }
        }
    }
    jump() {
        if (this.y + this.height == rfloor.y + gravity)
            this.velocity = -11; // 負值表示向上移動

    }
}

class RFloor {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.velocity = 4
    }
    draw() {

        ctxrungame.drawImage(floorR, this.x, this.y, this.width, this.height);

    }
    update() {
        this.x -= this.velocity

        if (blockCycle > speedupPara)//循環次數到達預先設定的數值時
        {
            this.velocity++;//把移動速度加快
        }
        if (this.x + this.width < 0) {

            this.x = 406; //讓地板重置，回到畫面最右邊
            // this.x =innerWidth ; //讓地板重置，回到畫面最右邊
        }
        this.draw();
    }
}

class rungameBackgroud {
    constructor() {
        this.velocity = 1;
        this.update()
        this.x = 0
    }

    update() {
        this.x--;
        if (blockCycle > speedupPara) {
            this.velocity++;
        }
        ctxrungame.drawImage(rungameBK, 0, 390, 1920, 1080, this.x, 0, 1920, 1080);
        ctxrungame.drawImage(rungameBK, 0, 390, 1920, 1080, this.x + 1920, 0, 1920, 1080);
        if (this.x <= -1920) {
            this.x = 0;
        }
    }

}


class Pause {
    constructor() {
        this.x = 360;
        this.y = 25;
        this.width = 30;
        this.height = 30;

    }
    draw() {
        ctxrungame.drawImage(pauseBTNimg, this.x, this.y, this.width, this.height);
    }
    load() {
        this.draw();
    }

}
//---------------------------------------------------------------

function getRanNum(minNum, maxNum) { //取得隨機數字
    return Math.floor(Math.random() * maxNum) + minNum;
}

function checkPoint() {//檢查是否符合得分條件
    if (!checkmachine && rcat.velocity !== 0 && b1.x <= rcat.catX)//當確認機器狀態是false時才允許加分，貓跳起來的時候
    {

        rcat.currentScore++;
        userScore = rcat.currentScore;
        if (hightestScore <= userScore)//如果當前分數>最高分數，則兩個分數同步
        {
            hightestScore = userScore;
        }
        checkmachine = true;//檢查加過分之後，把機器設為true，確保在降落之前不會再觸發上面的加分機制，機器會在貓落地的時後再次關閉
    }
}




//---------------------------------------------------------------   
const rcat = new runCat('BK');
const rfloor = new RFloor(0, 480, 720, 30);//x座標，y座標，寬，高
const rfloor2 = new RFloor(720, 480, 720, 30);//x座標，y座標，寬，高
const scoredisplay = new ScoreDisplay(30, 46)
const b1 = new block();
const rungamebackground = new rungameBackgroud()
const pauseBTN = new Pause();
//---------------------------------------------------------------

function animateR() {
    if (!isAnimationRunning) { //當遊戲結束時，停止所有畫面更新
        return;
    }
    requestAnimationFrame(animateR);
    rungamebackground.update();
    Canvasrungame.style.border = "4px solid black";
    rfloor.update();//地面更新位置
    rfloor2.update();//地面2更新位置
    rcat.update();//貓更新位置跟動作
    scoredisplay.load();
    b1.update(); //障礙物更新位置
    pauseBTN.load();
    checkPoint()  //遊戲畫面進行時，隨時檢查腳色是否滿足得分條件    
    gameEnd()//遊戲畫面進行時，隨時檢查腳色是否滿足死亡條件    
}

//----------------------------------------------------------------

function restartRunGame() {//重新開始遊戲
    rcat.currentScore = 0; //重置當前分數
    userScore = rcat.currentScore; //面板當前分數歸零
    blockCycle = 0; //循環次數歸零
    b1.velocity = 4; //障礙物速度重置
    b1.x = 400//障礙物位置重置
    rungamebackground.x = 0;//遊戲背景重置
    rfloor.x = 0//遊戲地面位置重置
    rfloor2.x = 720//遊戲地面2位置重置
    rfloor.velocity = 4//遊戲地面速度重置
    rfloor2.velocity = 4//遊戲地面2速度重置
}

function resetRunGame() //初次進入跑步遊戲時觸發
{
    isAnimationRunning = false;//暫停遊戲所有畫面
    isAnimationRunning = true;//啟動遊戲所有畫面
    restartRunGame();//重置遊戲數值
    animateR();//重新啟動動畫

}

function recordCurrentPara() {
    pauseScore = rcat.currentScore; //重置當前分數
    userScore = pauseScore; //面板當前分數歸零
    pauseblockcycle = blockCycle; //循環次數歸零
    blockVelocoty = b1.velocity; //障礙物速度重置
    blockX = b1.x //障礙物位置重置
    pauseBGX = rungamebackground.x;//遊戲背景重置
    pausefloor1X = rfloor.x //遊戲地面位置重置
    pausefloor2X = rfloor2.x //遊戲地面2位置重置
    pauserfloorVel = rfloor.velocity//遊戲地面速度重置
    pauserfloorVel2 = rfloor2.velocity //遊戲地面2速度重置
}
function continueGame() {
    isAnimationRunning = false;//暫停遊戲所有畫面
    isAnimationRunning = true;//啟動遊戲所有畫面

    rcat.currentScore = pauseScore; //重置當前分數
    pauseScore = userScore; //面板當前分數歸零
    blockCycle = pauseblockcycle; //循環次數歸零
    b1.velocity = blockVelocoty; //障礙物速度重置
    b1.x = blockX; //障礙物位置重置
    rungamebackground.x = pauseBGX;//遊戲背景重置
    rfloor.x = pausefloor1X;//遊戲地面位置重置
    rfloor2.x = pausefloor2X;//遊戲地面2位置重置
    rfloor.velocity = pauserfloorVel //遊戲地面速度重置
    rfloor2.velocity = pauserfloorVel2 //遊戲地面2速度重置

    animateR();//重新啟動動畫
}



function gameEnd() {//腳色死亡時觸發此方法
    if ((rcat.y + 84 == 436.5 && b1.x < rcat.catX + rcat.catSize && b1.x > rcat.catX) ||//狀況一:貓在地面碰到障礙時遊戲結束
        (rcat.y + 84 > 436.5 && b1.y < rcat.y + rcat.catSize && b1.y > rcat.y))//狀況二:貓跳起來，但還是碰到障礙遊戲結束
    {
        CanvasDoubleCheck.style.display = "block"//顯示確認視窗面板
        doubleCheckLoad()//彈出確認視窗
        isAnimationRunning = false; //停止遊戲所有畫面
    }

}

function selectYourCat() {
    CanvasDoubleCheck.height = 500;


}

// window.addEventListener("keydown", function(event) {
//     if(event.keyCode==32){
//         rcat.jump();
//     }
// });

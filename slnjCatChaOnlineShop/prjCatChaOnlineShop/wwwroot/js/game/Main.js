////innerWidth改406
//畫布
const canvas = document.getElementById("Canvaslobby");
const c = canvas.getContext('2d');

//參數
const bagAndBtnWidth = 390; //背包寬度
const bagAndBtnHigh = 75.5; //背包高度
const bagAndBtnY = 515; //背包Y值
const bagX = (406 / 2) - (bagAndBtnWidth / 2); //背包X值
const fixedRange = 45;
// const bagX = (innerWidth/2)- (bagAndBtnWidth/2); //背包X值
const bagBtnWidth = 40; //背包按鈕寬度
const userInfoX = 20;  //使用者資訊x值
const userInfoY = 50; //使用者資訊y值
const itemWidthAndHeight = 40; //背包格子長寬

// 圖片
const ruby = new Image();
const ccoin = new Image();
const helpBTNimg = new Image();
const rankBTNimg = new Image();
const gotoGachaimg = new Image();
const gotoRunGameimg = new Image();

const kittenDefault = new Image();
const kittenBK = new Image();
const kittenOG = new Image();
const kittenGY = new Image();
const kittenBB = new Image();
const floorImg = new Image();
const lobbyBK = new Image();//TODO把圖片改成動態

// 背包
const bagbk = new Image();
const bagItem1 = new Image();
const bagItem2 = new Image();
const bagItem3 = new Image();
const bagItem4 = new Image();
const bagItem5 = new Image();
const bagItem6 = new Image();
const bagItem7 = new Image();
const bagItem8 = new Image();
const itemSelected = new Image();


//類別
class UserInfo {

    loadName() {
        c.font = "20px monospace";
        c.fillStyle = "black";
        c.fillText(`${UserName}`, this.x + 10, this.y);
    }
    loadCatCoin() {
        c.font = "25px monospace";
        c.fillStyle = "black";
        c.fillText(`${Ccoin}`, this.x + 180, this.y);
    }
    loadRuby() {
        c.font = "25px monospace";
        c.fillStyle = "black";
        c.fillText(`${Ruby}`, this.x + 300, this.y);
    }
    load() {
        this.loadName();
        this.loadCatCoin();
        this.loadRuby();
    }
    constructor() {
        this.x = userInfoX;
        this.y = userInfoY;
        this.load();
    }
}
class Cat {

    setHidden(hidden) {// 從背包設定貓是否隱藏
        this.isHidden = hidden; 
    }

    setFrameCount() {
        this.lobbyframecount++;
    }

    drawHeart() {
        if (this.foodSelected == false) //沒有選擇食物的時候，不會產生愛心
            return;
        if (this.foodSelected == true) {
            setTimeout(() => { //持續三秒後
                this.foodSelected = false;
            }, 3000);

            this.heart.src = '../../images/game/thought_bubble.png'
            c.drawImage(this.heart, 32 * this.heartframe, 0, 32, 32, this.x + 30, this.y, 60, 60)

            if (this.lobbyframecount > 11)//愛心動畫影格
            {
                this.heartframe++;
                if (this.heartframe > 2) this.heartframe = 0
            }

            //餵食後，取消背包食物選取
            if (itmMilk.isSelected) {
                itmMilk.setSelected(!itmMilk.isSelected);
            }
            if (itmCan.isSelected) {
                itmCan.setSelected(!itmCan.isSelected);
            }
        }
    }

    draw() {
        if (!this.isHidden) {
            return; // 如果貓被設為隱藏，則不執行繪製
        }
        this.drawHeart()
        if ((this.direction == 0 && !this.isMoving) || (this.direction > 0 && !this.isMoving)) {
            switch (this.catcolor) {
                case 'Default':
                    kittenDefault.src = lobbyCatData['Default']['stopR'];
                    c.drawImage(kittenDefault, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BK':
                    kittenBK.src = lobbyCatData['BK']['stopR'];
                    c.drawImage(kittenBK, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'OG':
                    kittenOG.src = lobbyCatData['OG']['stopR'];
                    c.drawImage(kittenOG, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'GY':
                    kittenGY.src = lobbyCatData['GY']['stopR'];
                    c.drawImage(kittenGY, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BB':
                    kittenBB.src = lobbyCatData['BB']['stopR'];
                    c.drawImage(kittenBB, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;
            }
        }
        if (this.direction < 0 && !this.isMoving) {
            switch (this.catcolor) {
                case 'Default':
                    kittenDefault.src = lobbyCatData['Default']['stopL'];
                    c.drawImage(kittenDefault, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BK':
                    kittenBK.src = lobbyCatData['BK']['stopL'];
                    c.drawImage(kittenBK, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'OG':
                    kittenOG.src = lobbyCatData['OG']['stopL'];
                    c.drawImage(kittenOG, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'GY':
                    kittenGY.src = lobbyCatData['GY']['stopL'];
                    c.drawImage(kittenGY, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BB':
                    kittenBB.src = lobbyCatData['BB']['stopL'];
                    c.drawImage(kittenBB, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;
            }
        }
        if (this.direction > 0 && this.isMoving) {
            switch (this.catcolor) {
                case 'Default':
                    kittenDefault.src = lobbyCatData['Default']['walkR'];
                    c.drawImage(kittenDefault, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BK':
                    kittenBK.src = lobbyCatData['BK']['walkR'];
                    c.drawImage(kittenBK, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'OG':
                    kittenOG.src = lobbyCatData['OG']['walkR'];
                    c.drawImage(kittenOG, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'GY':
                    kittenGY.src = lobbyCatData['GY']['walkR'];
                    c.drawImage(kittenGY, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BB':
                    kittenBB.src = lobbyCatData['BB']['walkR'];
                    c.drawImage(kittenBB, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;
            }
        }


        if (this.direction < 0 && this.isMoving) {
            switch (this.catcolor) {
                case 'Default':
                    kittenDefault.src = lobbyCatData['Default']['walkL'];
                    c.drawImage(kittenDefault, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BK':
                    kittenBK.src = lobbyCatData['BK']['walkL'];
                    c.drawImage(kittenBK, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'OG':
                    kittenOG.src = lobbyCatData['OG']['walkL'];
                    c.drawImage(kittenOG, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'GY':
                    kittenGY.src = lobbyCatData['GY']['walkL'];
                    c.drawImage(kittenGY, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;

                case 'BB':
                    kittenBB.src = lobbyCatData['BB']['walkL'];
                    c.drawImage(kittenBB, 128 * this.frames, 0, 128, 128, this.x, this.y, this.width, this.height);
                    break;
            }
        }
    }

    action() {
        if (!this.isMoving) {

            this.stopCount += 1;
            if (this.stopCount > Math.floor(Math.random() * 200) + 300) {
                this.isMoving = true;
                this.stopCount = 0;
                this.direction = Math.random() < 0.5 ? -0.5 : 0.5;
            }
        }
        if (this.isMoving) {
            this.walkCount += 1;
            this.stopCount = 0;
            this.x += this.direction;
            if (this.walkCount >= Math.floor(Math.random() * 5000) || this.x <= 0 || this.x + this.width >= canvas.width) {
                this.isMoving = false;
                this.isStop = true;
                this.walkCount = 0;
            }
        }
    }


    update() {


        this.draw();
        this.action();
        this.setFrameCount();
        if (this.lobbyframecount > 12)//貓動畫影格
        {
            this.frames++;
            if (this.frames > 7) this.frames = 0
            this.lobbyframecount = 0;
        }


    }
    getRanNum(maxNum) {
        return Math.floor(Math.random() * maxNum + 1);
    }
    constructor(color) {
        this.x = this.getRanNum(canvas.width - 60);
        this.y = 380;
        this.width = 128;
        this.height = 128;
        this.isMoving = false;
        this.walkCount = 0;
        this.stopCount = 0;
        this.direction = 0;
        this.frames = 0;
        this.lobbyframecount = 0;
        this.catcolor = color;
        this.heartframe = 0;
        this.foodSelected = false;
        this.heart = new Image();
    }


}
class Floor {
    draw() {
        c.drawImage(floorImg, this.x, this.y, this.width, this.height);
    }
    update() {
        this.draw();
    }
    constructor() {
        this.x = 0;
        this.y = 475;
        this.width = 720;
        this.height = 30;
        this.update();
    }
}
class Item {
    constructor(n, image, isItem) { //n代表第幾個物品，最小是0
        this.x = bagX + 18 + (n * fixedRange);
        this.y = bagAndBtnY + (bagAndBtnHigh / 2) - (itemWidthAndHeight / 2);
        this.width = itemWidthAndHeight;
        this.height = itemWidthAndHeight;
        this.image = image;
        this.isItem = isItem;
    }

    setSelected(selected) {
        this.isSelected = selected; // 設定物品是否被選擇
    }
    draw() {
        //加入新邏輯，如果使用者擁有的東西(資料表)沒有某隻貓，要把貓換成黑圖

        c.drawImage(this.image, this.x, this.y, this.width, this.height);
        if (this.isItem == 'food' && this.image == bagItem6)//牛奶數量
        {
            c.fillText(`${milkCount}`, this.x, this.y + 40);
            if (this.isSelected) {
                c.drawImage(itemSelected, this.x - 6, this.y - 5, 50, 50);
            }
        }
        if (this.isItem == 'food' && this.image == bagItem7)//罐罐數量
        {
            c.fillText(`${canCount}`, this.x, this.y + 40);
            if (this.isSelected) {
                c.drawImage(itemSelected, this.x - 6, this.y - 5, 50, 50);
            }
        }


    }

    load() {
        this.draw();
    }

}
class Bag {
    draw() {
        // c.fillStyle ='gray';
        c.fillRect(this.x, this.y, this.width, this.height);
        c.drawImage(bagbk, this.x, this.y, this.width, this.height);
    }
    update() {
        this.draw();
    }
    constructor() {
        this.x = bagX;
        this.y = bagAndBtnY;
        this.width = bagAndBtnWidth;
        this.height = bagAndBtnHigh;
        this.update();
    }
}
class mainpageButton {
    draw() {
        c.drawImage(this.image, this.x, this.y, this.width, this.height);

    }
    load() {
        this.draw();
    }
    constructor(x, y, width, height, image) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = image
    }
}
class Icon {
    drawCCoin() {
        c.drawImage(this.ccoinImg, this.x, this.y, this.width, this.height);
    }
    drawRuby() {
        c.drawImage(this.rubyImg, this.x + 120, this.y, this.width, this.height)
    }
    load() {
        this.drawCCoin();
        this.drawRuby();
    }
    constructor() {
        this.x = 164;
        this.y = userInfoY - 25;
        this.width = this.height = 30;
        this.ccoinImg = ccoin;
        this.rubyImg = ruby;
        this.load();
    }
}

//----------------------------------------------------------------


//貓
const catDefault = new Cat('Default');
const catBB = new Cat('BB');
const catBK = new Cat('BK');
const catGY = new Cat('GY');
const catOG = new Cat('OG');
//背包
const itm1 = new Item(0, bagItem1)
const itm2 = new Item(1, bagItem2)
const itm3 = new Item(2, bagItem3)
const itm4 = new Item(3, bagItem4)
const itm5 = new Item(4, bagItem5)
const itmMilk = new Item(5, bagItem6, 'food')
const itmCan = new Item(6, bagItem7, 'food')
const itm8 = new Item(7, bagItem8)
//左側按鈕
const helpBTN =  new mainpageButton(20, 70, 30, 40, helpBTNimg);
const gotoRunGame =  new mainpageButton(12, 140, 50, 50, gotoRunGameimg);
const rankBTN =  new mainpageButton(15, 210, 40, 40, rankBTNimg);
const gotoGacha =  new mainpageButton(15, 280, 40, 40, gotoGachaimg);



//大廳動畫
function animate() {
    requestAnimationFrame(animate);
    canvas.style.border = "4px solid black";
    c.drawImage(lobbyBK, 650, 650, canvas.width, canvas.height, 0, 0, canvas.width, canvas.height);

    //使用者資訊
    new UserInfo()

    //地板
    new Floor()
    new Icon();

    //貓
    catDefault.update();
    catBB.update();
    catBK.update();
    catGY.update();
    catOG.update();

    //背包
    new Bag();
    itm1.load();
    itm2.load();
    itm3.load();
    itm4.load();
    itm5.load();
    itmMilk.load();
    itmCan.load();
    itm8.load();

    helpBTN.load();
    gotoRunGame.load();
    rankBTN.load();
    gotoGacha.load();

    
}
animate();




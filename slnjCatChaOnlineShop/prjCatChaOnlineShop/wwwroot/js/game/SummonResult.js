//動畫畫面+獎品呈現
const CanvasSummonResult = document.getElementById('CanvasSummonResult');
const ctxSummonResult = CanvasSummonResult.getContext('2d');//畫布
ctxSummonResult.font = "25px monospace";
let isOneDraw = null; //布林值，true表示當次是單抽，false為十抽
let arr = [];//用來存放十抽的結果用陣列



function between(x, min, max) {
  return x >= min && x <= max;
}//執行機率分佈用功能


function getImageByNum(num){
  if (between(num, 1, 2)) {
    itemClass = 'SS'; // SS獎項
    imgPath = GachaData['coupon'];
    name = '實體折價券';
  } 
  else if (between(num, 3, 3)) {
    itemClass = 'SS'; // SS獎項
    // imgPath = GachaData['catDefault'];
    imgPath = GachaData['coupon'];
    name = '貓咪';
} 
  else if (between(num, 4, 4)) {
  itemClass = 'SS'; // SS獎項
  // imgPath = GachaData['catBK'];
  imgPath = GachaData['coupon'];
  name = '貓咪';
} 
  else if (between(num, 5, 5)) {
  itemClass = 'SS'; // SS獎項
  // imgPath=GachaData['catBB'];
  imgPath = GachaData['coupon'];
  name = '貓咪';
} 
  else if (between(num, 6, 6)) {
  itemClass = 'SS'; // SS獎項
  // imgPath=GachaData['catOG'];
  imgPath = GachaData['coupon'];
  name = '貓咪';
} 
else if (between(num, 7, 7)) {
  itemClass = 'SS'; // SS獎項
  // imgPath=GachaData['catGY'];
  imgPath = GachaData['coupon'];
  name = '貓咪';
} 
else if (between(num, 8, 12)) {
    itemClass = 'S'; // S獎項
    imgPath= GachaData['background'];
    name = '背景';
} 
else if (between(num, 13, 25)) {
    itemClass = 'S'; // A獎項
    imgPath= GachaData['bowl'];
    name = '飯盆';
} 
else if (between(num, 26, 30)) {
    itemClass = 'S'; // A獎項
    imgPath= GachaData['furniture'];
    name = '家具';
} 
else if (between(num, 31, 55)) {
    itemClass = 'A'; // A獎項
    imgPath= GachaData['food'];
    name = '飼料';
} 
else if (between(num, 56, 80)) {
    itemClass = 'A'; // A獎項
    imgPath= GachaData['water'];
    name = '水';
} 
else {
    itemClass = 'A'; // A獎項
    imgPath= GachaData['coin'];
    name = '貓幣';
}
const resultImg = new Image();
resultImg.src = imgPath;
return resultImg ;

}//執行顯示轉蛋獎品圖片功能
class Prize{
    constructor(state) {
        this.x = 20;
        this.y = 200;
        this.width = 66;
        this.bigWidth = 260
        this.betweenrange = 10
        this.state = state
        // this.bigX = (innerWidth/2)-(this.bigWidth/2)+8
        this.bigX = (406/2)-(this.bigWidth/2)+8
        this.bigY = (CanvasSummonResult.height/2)-(this.bigWidth/2)-50        
      }   
    showTenPic() {
        let count = 1;
        let index = 0;
        for (let i = 0; i < 2; i++) { //共需要兩列
          for (let j = 0; j < 5; j++) { //每列五格
            const x = j * (this.width+ this.betweenrange);//決定格子位置
            const y =  i * (this.width + this.betweenrange);//決定格子位置
            //決定本次要放哪一個圖片，一共十張
            ctxSummonResult.drawImage(getImageByNum(arr[index]),this.x+x, this.y+y, this.width, this.width);
          count++;
          index++;
          
        }
      } 
      console.log(GachaData)
      console.log(arr);
      console.log(getImageByNum(arr[index])) 
    }

    showOnePic() {
      //決定本次要放哪一個圖片，只需要一張
        ctxSummonResult.drawImage(getImageByNum(arr[0]),this.bigX, this.bigY, this.bigWidth,  this.bigWidth);
    }
    load() {
        if(this.state==true)
        {
            this.showOnePic();
        }
        if(this.state==false)
        {
            this.showTenPic();  
        }
      }
      
}

class SummonCheckBTN{
    constructor() {
        // this.x = (innerWidth/2)-60;
        this.x = (406/2)-60;
        this.y = 420 ;
        this.width = 120;
        this.height = 40;
        
      }
    load(){
        ctxSummonResult.fillStyle='white'
        ctxSummonResult.fillRect( this.x, this.y, this.width, this.height)
        // ctxSummonResult.drawImage(this.image, this.x,this.y,this.width,this.height);
      }
   
}
const btn = new SummonCheckBTN();

function showResult(){
    // ctxSummonResult.clearRect(0, 0, innerWidth, innerHeight);
    ctxSummonResult.clearRect(0, 0, 406, 600);
    const prize= new Prize(isOneDraw);//利用傳入的布林值，決定話面要顯示單抽還是十抽
    prize.load();
    btn.load();
}

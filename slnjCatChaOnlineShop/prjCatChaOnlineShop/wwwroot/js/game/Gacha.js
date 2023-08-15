const CanvasGatcha = document.getElementById("CanvasGatcha");
const ctxgatcha = CanvasGatcha.getContext('2d');//畫布
//決定單抽or十抽=>看isOneDraw


ctxgatcha.font = "25px monospace";
//轉蛋畫面icon載入
const rubyG = new Image();
const ccoinG = new Image();
//四種轉蛋按鈕圖片載入
const rubySingleBTN = new Image();
const ccoinSingleBTN = new Image();
const rubyTenBTN = new Image();
const ccoinTenBTN = new Image();


class IconG{
      drawCCoin() {
        ctxgatcha.drawImage(ccoinG,this.x, this.y, this.width, this.height);
    }
      drawRuby() {
        ctxgatcha.drawImage(rubyG,120+this.x, this.y, this.width, this.height)
    }
        load() {
        this.drawCCoin();
        this.drawRuby();
      }
      constructor() {
        this.x = 164;
        this.y = userInfoY-25;
        this.width = 30;
        this.height = 30;
        this.load();
      }
}
class UserInfoG{
    loadName(){
        ctxgatcha.fillStyle = "black";
        ctxgatcha.fillText(`${99} ${UserName}`,this.x,this.y);
      }
    loadCatCoin(){
        ctxgatcha.fillStyle = "black";
        ctxgatcha.fillText(`${Ccoin}`,this.x+180,this.y);
      }
    loadRuby(){
        ctxgatcha.fillStyle = "black";
        ctxgatcha.fillText(`${Ruby}`,this.x+300,this.y);
      }
    load(){
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
class GatchaBTN{
    constructor(x,y,image) {
      this.x = (406/2)- (135) +6+x  ;
        // this.x = (innerWidth/2)- (135) +6+x  ;
        this.y = y+400;
        this.width = 120;
        this.height = 40;
        this.image = image;
      }
    load(){
        ctxgatcha.drawImage(this.image,this.x,this.y,this.width,this.height);
      }
   
}

//四種轉蛋按鈕功能載入
const ccoinSingle = new GatchaBTN(0,30,ccoinSingleBTN);//左上
const ccoinTen= new GatchaBTN(150,30,ccoinTenBTN);//右上
const rubySingle= new GatchaBTN(0,100,rubySingleBTN);//左下
const rubyTen= new GatchaBTN(150,100,rubyTenBTN);//右下

//按鈕點擊事件
CanvasGatcha.addEventListener('click', (event) => {
  const rect = CanvasGatcha.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  function draw(count){
    if(count===1){
      isOneDraw = true;
      CanvasSummonResult.style.display ='block';
      const rand = Math.floor(Math.random()*100)+1;  
      arr.push(rand);
      console.log(`${arr}`); 
      showResult() 
    }
    if(count===10){
      isOneDraw = false;
      CanvasSummonResult.style.display ='block';
      for (let i = 0; i < 10; i++) {
        // 產生隨機整數(1~100)
        const rand = Math.floor(Math.random() * 100) + 1;
        arr.push(rand);
        showResult()
    }
  }
  }



  if (isInBtnRange(rubySingle,x,y)) {//紅利單抽
    draw(1);
    consumeRuby(1)
  }  

  if (isInBtnRange(ccoinSingle,x,y)) {//貓幣單抽
    draw(1);
    consumeCCoint(1)
   } 

  if (isInBtnRange(rubyTen,x,y)) {//紅利10抽
    draw(10);
    consumeRuby(10)
  } 

   if (isInBtnRange(ccoinTen,x,y)) {//貓幣10抽
    draw(10);
    consumeCCoint(10)
   } 
});



  //TODO 改成非同步執行(部分刷新畫面)
function consumeCCoint(count){//決定單抽或10抽，參數只能帶1或10
    if(count===1){ //如果是單抽的狀況
      if(Ccoin<1000)return false; 
      Ccoin-=1000;
      return true;
    }
    if(count===10){//如果是十抽的狀況
      if(Ccoin<9000)return false;
      Ccoin-=9000
      return true;
    }
  }
function consumeRuby(count){//決定單抽或10抽，參數只能帶1或s10
    if(count===1){
      if(Ruby<200)return false; 
      Ruby-=200
      return true;
    }
    if(count===10){
      if(Ruby<1800)return false; 
      Ruby-=1800
      return true;
  }
  }
function gatchaload(){
  requestAnimationFrame(gatchaload);
  ctxgatcha.fillStyle = "blanchedalmond";
  CanvasGatcha.style.border = "4px solid black";
  ctxgatcha.fillRect(0,0,CanvasGatcha.width, CanvasGatcha.height);
  new UserInfoG();
  new IconG();
  rubySingle.load();
  rubyTen.load();
  ccoinSingle.load();
  ccoinTen.load();

}

gatchaload()

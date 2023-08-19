//定義初始變數
let UserName = "未登入"
let Ccoin = "N/A";
let Ruby = "N/A";
let milkCount = 0;
let canCount = 0;
let hightestScore = 0;

//模擬資料庫資料
let userInfo = {
    name: "小貓貓貓貓",
    CCoin: 11000,
    Ruby: 5000,
    runGameHighestScore: 61
}
let userBagData = {
    catDefault: true,
    catBB: true,
    catBK: true,
    catGY: false,
    catOG: false,
    milk: 66,
    can: 40
}

let gachaTextCCoin = document.getElementById('gachaTextCCoin')
let gachaTextRuby = document.getElementById('gachaTextRuby')

//載入資料庫資訊
function initialize() {
    UserName = userInfo.name;
    Ccoin = gachaTextCCoin.innerHTML =   userInfo.CCoin;
    Ruby = gachaTextRuby.innerHTML =  userInfo.Ruby;
    milkCount = userBagData.milk;
    canCount = userBagData.can;
    hightestScore = userInfo.runGameHighestScore
    loadUserBagCatInfo();
}

//使用者背包貓咪資訊
function loadUserBagCatInfo() {
    if (userBagData.catDefault != true) {
        bagItem1.src = '../../images/game/staticCats/kitten_lock.png'
    }
    if (userBagData.catBB != true) {
        bagItem2.src = '../../images/game/staticCats/kitten_lock.png'
    }
    if (userBagData.catBK != true) {
        bagItem3.src = '../../images/game/staticCats/kitten_lock.png'
    }
    if (userBagData.catGY != true) {
        bagItem4.src = '../../images/game/staticCats/kitten_lock.png'
    }
    if (userBagData.catOG != true) {
        bagItem5.src = '../../images/game/staticCats/kitten_lock.png'
    }
}

//遊戲本體RWD方法
function resizeCanvas() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // 設定只在特定螢幕尺寸下套用
  // if (screenWidth <= 767 ) {
  //   canvas.width = 
  //   Canvasrungame.width = 
  //   CanvasGatcha.width= 
  //   CanvasCheckIn.width =  
  //   CanvasRank.width =
  //   CanvasDoubleCheck.width=
  //   CanvasSummonResult.width= 406;

  //   canvas.height = 
  //   Canvasrungame.height = 
  //   CanvasGatcha.height = 
  //   CanvasCheckIn.height =  
  //   CanvasRank.height = 
  //   CanvasDoubleCheck.height =
  //   CanvasSummonResult.height=600;
  //   c.font = "25px monospace";
    
  // } else {
  //     // 在其他螢幕尺寸下套用不同的寬高
  //     canvas.width = 1280;
  //     canvas.height = 600;
  //     Canvasrungame.width = 1280;
  //     Canvasrungame.height = 600;
  // }
  canvas.width = 
  Canvasrungame.width = 
  CanvasGatcha.width= 
  CanvasCheckIn.width =  
  CanvasRank.width =
  CanvasDoubleCheck.width=
  CanvasSummonResult.width= 406;

  canvas.height = 
  Canvasrungame.height = 
  CanvasGatcha.height = 
  CanvasCheckIn.height =  
  CanvasRank.height = 
  CanvasDoubleCheck.height =
  CanvasSummonResult.height=600;
   

}

// 初始化時設置 canvas 寬高和縮放比例
resizeCanvas();

// 監聽視窗大小改變事件，重新調整 canvas 寬高和縮放比例
window.addEventListener('resize', resizeCanvas);





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
    catGY: true,
    catOG: true,
    milk: 66,
    can: 40
}

let gachaTextCCoin = document.getElementById('gachaTextCCoin')
let gachaTextRuby = document.getElementById('gachaTextRuby')

//載入資料庫資訊
function initialize() {
    //UserName = userInfo.name;
    
    /*Ccoin = gachaTextCCoin.innerHTML =   userInfo.CCoin;*/
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


//把確認視窗按鈕功能跟文字換掉的方法
function alterConfirmWinBTN(text,func) {
    confirmWinBTN.innerHTML = text;
    confirmWinBTN.onclick = func; 
}

//確認視窗關閉方法
function closeConfirmWin() {
    confirmWin.style.display = 'none';//關閉確認視窗
    initialize();//初始化使用者資料
}

// 初始化目前被選擇的貓咪
let selectedCatName = null;
//選擇完貓貓之後開始遊戲的方法
function startGame() {
    if (selectedCatName === null) { //如果使用者沒有選擇貓貓
        confirmWin_title.innerHTML = '尚未選擇貓貓'
        return;
    }
    else   
    confirmWin.style.display = 'none';//關閉確認視窗
    selectedCatName = null //開始遊戲之後把選擇的貓貓清空
    resetRunGame(); //重設小遊戲設定
    pagesControl(Canvasrungame);//開啟小遊戲畫面
    showPage('a'); //說明視窗下次開啟時從第一頁開始
    alterConfirmWinBTN('確認', closeConfirmWin)//變更確認視窗按鈕內容
}
function chooseCatBeforeGame() {

    alterConfirmWinBTN('開始', startGame);//變更確認視窗按鈕內容
    //先根據使用者擁有的貓貓載入圖片
    let userCats = `<div id="catSelectWin"  style="display:flex;  justify-content: center;">`;
    let allCat = ['catDefault', 'catBB', 'catBK', 'catGY', 'catOG']; //先列出全部的貓貓種類
    let catNames = [];//把使用者有的貓貓加來這邊
    allCat.forEach(catName => {
        if (userBagData[catName] === true) {
            catNames.push(catName);
        }
    });
    catNames.forEach(catName => {
        if (userBagData[catName] === true) {
            userCats +=
                `<div id='${catName}_select' style="position: relative; flex-direction: column; width:50px;">
          <img src="../../images/game/staticCats/kitten${catName.substr(3)}_stopR.png" style="width: 50px; cursor: pointer;"/> 
          <img id='${catName}_arrow' src="../../images/game/Icon_Up.png" style="width: 30px; position:relative; display:none; "/>
          </div>`;
        }
    });

    userCats += `</div>`;
    confirmWin_title.innerHTML = '選擇進行遊戲的貓貓'
    confirmWin_text.innerHTML = userCats;
    confirmWin.style.display = 'block';


    

    // 貓貓點擊事件
    catNames.forEach(catName => {
        const cat = document.getElementById(`${catName}_select`);
        const catArrow = document.getElementById(`${catName}_arrow`);

        cat.addEventListener('click', () => {

            //三種狀況: 一、沒有選過貓貓
            //二、選了一隻貓而且下一次還選同一隻
            //三、選了一隻貓下一次選另外一隻
            if (selectedCatName === catName) {//狀況二
                catArrow.style.display = 'none';
                selectedCatName = null;
            }
            else {
                if (selectedCatName !== null) {//狀況三
                    const selectedCatArrow = document.getElementById(`${selectedCatName}_arrow`);
                    selectedCatArrow.style.display = 'none';
                }
                catArrow.style.display = 'inline';//狀況一
                selectedCatName = catName;
            }
            rcat.catcolor = selectedCatName
            console.log(selectedCatName);
            console.log(rcat);
        });
    });

}


//遊戲本體RWD方法
function resizeCanvas() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

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
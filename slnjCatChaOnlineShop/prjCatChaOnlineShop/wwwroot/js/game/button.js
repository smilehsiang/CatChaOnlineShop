//這邊放的是HTML製作的按鈕的功能


const commonbackBTN = document.getElementById('commonbackBTN');//轉蛋返回按鈕
const CatchaGatCha = document.getElementById('CatchaGatCha');//開轉蛋畫面
const CanvasRank = document.getElementById("CanvasRank");//排行榜頁面
const startRunGameBTN = document.getElementById('startRunGameBTN');//遊戲說明最後一頁的開始遊戲按鈕
const closeinstruction = document.getElementById('closeinstruction');//遊戲說明右上角叉叉
const popup = document.getElementById('popup');//開啟跑步遊戲說明視窗
const allPages = [Canvaslobby, Canvasrungame, CatchaGatCha, CanvasRank]//主要遊戲畫面存放區
const testlogin = document.getElementById('testlogin');


function pagesControl(blockpage)//參數blockpage填入當前需要顯示的畫面，並隱藏其他頁面
{
  for(const p of allPages)
  {
    p.style.display = "none"
  }
  blockpage.style.display = "block"
}

//==========================


//回首頁功能
commonbackBTN.addEventListener("click", () => { 
  pagesControl(Canvaslobby);
  });

//跑步遊戲說明
startRunGameBTN.addEventListener("click", () => {
    chooseCatBeforeGame()
    hideInstructions()
});


closeinstruction.addEventListener("click", () => {
    showPage('a'); //下次開啟時從第一頁開始
    pagesControl(Canvaslobby); //畫面返回大廳
});


//測試連動資料庫登入
testlogin.addEventListener("click", () => {

    // 使用 AJAX 請求呼叫 API
    $.ajax({
        url: '/Api/Api/TestDBLogin',
        type: 'GET',
        success: function (data) {
            if (data.length > 0) {
                UserName = data[0].characterName; //登入時載入使用者名稱
                Ccoin = gachaTextCCoin.innerHTML = data[0].catCoinQuantity; //貓幣數量
                Ruby = gachaTextRuby.innerHTML = data[0].loyaltyPoints; //紅利數量
                milkCount = data[0]["gameItemInfo"][6]["quantityOfInGameItems"]; //牛奶數量productID7
                canCount = data[0]["gameItemInfo"][7]["quantityOfInGameItems"];//罐罐數量productID8
                hightestScore = data[0].runGameHighestScore
                //載入使用者貓貓資訊
                if (data[0]["gameItemInfo"][0]["quantityOfInGameItems"] > 0) //productID1 catGY
                    userBagData.catGY = true; 
                if (data[0]["gameItemInfo"][1]["quantityOfInGameItems"] > 0) //productID2 catOG
                    userBagData.catOG = true;  
                if (data[0]["gameItemInfo"][2]["quantityOfInGameItems"] > 0) //productID3 catBB
                    userBagData.catBB = true; 
                if (data[0]["gameItemInfo"][10]["quantityOfInGameItems"] > 0) //productID14 catBK
                    userBagData.catBK = true; 
                loadUserBagCatInfo();
                //console.log(userBagData.catGY)
                //console.log(userBagData.catOG)
                //console.log(userBagData.catBB)
                //console.log(userBagData.catBK)
            }
        },
        error: function () {
            console.error('載入資料失敗');
        }
    });

});
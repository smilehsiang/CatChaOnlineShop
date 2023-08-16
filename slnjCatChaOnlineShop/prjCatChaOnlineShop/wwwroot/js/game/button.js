//遊戲畫面外的六個按鈕

const gachaBack = document.getElementById('gachaBack');//轉蛋返回按鈕
const CatchaGatCha = document.getElementById('CatchaGatCha');//開轉蛋畫面
const startRunGameBTN = document.getElementById('startRunGameBTN');//遊戲說明最後一頁的開始遊戲
const closeinstruction = document.getElementById('closeinstruction');//遊戲說明右上角叉叉
const popup = document.getElementById('popup');//開啟跑步遊戲說明視窗
const allPages = [Canvaslobby, Canvasrungame, CatchaGatCha,CanvasRank]//主要遊戲畫面存放區


function pagesControl(blockpage)//參數blockpage填入當前需要顯示的畫面，其他隱藏
{
  for(const p of allPages)
  {
    p.style.display = "none"
  }
  blockpage.style.display = "block"
}


//==========================

gachaBack.addEventListener("click", () => { //回首頁
  pagesControl(Canvaslobby);
  });

//跑步遊戲說明

startRunGameBTN.addEventListener("click", () => {
    hideInstructions()
    resetRunGame();
    pagesControl(Canvasrungame);
    showPage('a'); //下次開啟時從第一頁開始
});


closeinstruction.addEventListener("click", () => {
    showPage('a'); //下次開啟時從第一頁開始
    pagesControl(Canvaslobby); //畫面返回大廳
});
 

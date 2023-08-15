//遊戲畫面外的六個按鈕
const rungameBTN = document.getElementById('rungameBTN');//開啟跑步遊戲
const checkinBTN = document.getElementById('checkinBTN');//開啟簽到畫面
const rankBTN = document.getElementById('rankBTN');//開啟遊戲排行
const storeBTN = document.getElementById('storeBTN');//開啟遊戲商店
const gatchaBTN = document.getElementById('gatchaBTN');//開啟轉蛋畫面
const lobbynBTN = document.getElementById('lobbynBTN');//開啟大廳畫面
const CatchaGatCha = document.getElementById('CatchaGatCha');//開轉蛋畫面
const startRunGameBTN = document.getElementById('startRunGameBTN');//遊戲說明最後一頁的開始遊戲
const closeinstruction = document.getElementById('closeinstruction');//遊戲說明右上角叉叉
const popup = document.getElementById('popup');//開啟跑步遊戲說明視窗

const switchBTNs= [rungameBTN,checkinBTN,rankBTN,storeBTN,gatchaBTN,lobbynBTN] //上面六個按鈕存放區
const allPages = [Canvaslobby, Canvasrungame, CatchaGatCha,CanvasCheckIn,CanvasRank,CanvasStore]//主要遊戲畫面存放區


function pagesControl(blockpage)//參數blockpage填入當前需要顯示的畫面，其他隱藏
{
  for(const p of allPages)
  {
    p.style.display = "none"
  }
  blockpage.style.display = "block"
}


function btnsControl(thisBtn){ //按下thisBtn按鈕之後，thisBtn按鈕失效
  for(const b of switchBTNs)
  {
    b.disabled = false;
    thisBtn.disabled = true;
  }
}


function allBtnsDisabled(){//讓所有按鈕都失效
  for(const b of switchBTNs)
  {
    b.disabled = true;
  }
}
//==========================

lobbynBTN.addEventListener("click", () => {
  pagesControl(Canvaslobby);
    btnsControl(lobbynBTN);
  });

rungameBTN.addEventListener("click", () => {
    popup.style.display = "block"
    showInstructions();
    allBtnsDisabled();
});

gatchaBTN.addEventListener("click", () => {
    CatchaGatCha.style.display = "block";
    pagesControl(CatchaGatCha);
    btnsControl(gatchaBTN);
});

//checkinBTN.addEventListener("click", () => {
//    pagesControl(CanvasCheckIn);
//    btnsControl(checkinBTN);
//    Canvaslobby.style.display = "block"
//  });
//rankBTN.addEventListener("click", () => {
//  pagesControl(CanvasRank);
//  btnsControl(rankBTN);
//  Canvaslobby.style.display = "block"
//  });


    
//storeBTN.addEventListener("click", () => {
//   restartRunGame()
  
//   pagesControl(CanvasStore);
//   btnsControl(storeBTN);
//  });

startRunGameBTN.addEventListener("click", () => {
    hideInstructions()
    resetRunGame();
    pagesControl(Canvasrungame);
    showPage('a'); //下次開啟時從第一頁開始
});


closeinstruction.addEventListener("click", () => {
    showPage('a'); //下次開啟時從第一頁開始
    pagesControl(Canvaslobby); //畫面返回大廳
    btnsControl(lobbynBTN);//返回大廳按鈕關閉
});
 

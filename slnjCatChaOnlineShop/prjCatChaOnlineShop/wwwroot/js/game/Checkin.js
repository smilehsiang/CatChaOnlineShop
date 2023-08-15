const CanvasCheckIn = document.getElementById("CanvasCheckIn");
const ctxrcheckin = CanvasCheckIn.getContext('2d');

// 設置每日簽到方格的大小和間距
const gridSize = 40;
const gridSpacing = 12;

// 計算每日簽到表的行數和列數
const rows = 2
const cols = 7


// 繪製每日簽到表
function drawDailySignTable() {
    ctxrcheckin.fillRect(CanvasCheckIn.width/2-50, CanvasCheckIn.height/2-50,100, 100);
    
  let day = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const x = j * (gridSize + gridSpacing);
      const y =  i * (gridSize + gridSpacing);

      // 繪製方格
      ctxrcheckin.fillStyle = "lightblue";
      ctxrcheckin.fillRect(x, y, gridSize, gridSize);

    //   // 繪製簽到日期
    //   ctxrcheckin.fillStyle = "black";
    //   ctxrcheckin.font = "16px Arial";
    //   ctxrcheckin.fillText(day, x + gridSize / 2 - 5, y + gridSize / 2 + 5);

      day++;
    }
  }
  
}


//顯示簽到畫面功能
function showCheckin(){
    requestAnimationFrame(showCheckin);
    ctxrcheckin.clearRect(0,0,CanvasCheckIn.width,CanvasCheckIn.height);
    ctxrcheckin.fillStyle = "white";
    drawDailySignTable() 
    CanvasCheckIn.style.border = "4px solid black";
}
showCheckin()
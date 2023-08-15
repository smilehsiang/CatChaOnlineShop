let UserName = '喵咪貓咪貓貓'
let Ccoin = 12000
let Ruby = 10000
let milkCount = 3
let canCount = 2


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
  c.font = "25px monospace";

}

// 初始化時設置 canvas 寬高和縮放比例
resizeCanvas();

// 監聽視窗大小改變事件，重新調整 canvas 寬高和縮放比例
window.addEventListener('resize', resizeCanvas);



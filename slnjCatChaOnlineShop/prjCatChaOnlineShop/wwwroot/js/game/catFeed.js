//當使用者背包有食物(水 飼料)
//選擇後，點擊貓兩下
//貓頭上冒愛心，食物數量-1
//隨機獲得貓幣

canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    //點擊食物之後點擊貓咪

    let closestCat = findClosestCat(x, y);

    if (closestCat) {
        feedcat(closestCat, x, y);
        setTimeout(() => { // 計時器
            foodSelected = false;
            closestCat.selected = false;
            confirmWin.style.display = 'block';
        }, 3000);
    }
})

function findClosestCat(x, y) {//找到最接近滑鼠位置的貓
    let closestDistance = Infinity;
    let closestCat = null;

    // 遍歷所有貓，
    [catDefault, catBB, catBK, catOG, catGY].forEach(cat => {
        if (cat !== null) {
            const distance = Math.sqrt((x - cat.x) ** 2 + (y - cat.y) ** 2);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestCat = cat;
            }
        }
    });

    return closestCat;
}
function feedcat(cat, x, y) { //餵貓貓的方法     
    if (cat === null)
        return;
    if (isInBtnRange(cat, x, y)) {
        if (itmMilk.isSelected || itmCan.isSelected)//點擊食物之後點擊貓咪
        {

            cat.selected = true;
            consumeFood()
        }
        return;
    }
}



function consumeFood() { //扣除食物數量邏輯，數量為0就不能被扣
    if (itmMilk.isSelected) {
        if (milkCount === 0) {
            return;
        }
        milkCount--;
    }
    if (itmCan.isSelected) {
        if (canCount === 0) {
            return;
        }
        canCount--;
    }
}

function getCCoin() {//隨機獲得貓幣方法

}


 
 
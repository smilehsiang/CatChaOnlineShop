//當使用者背包有食物(水 飼料)
//選擇後，點擊貓兩下
//貓頭上冒愛心，食物數量-1
//隨機獲得貓幣



function feedcat(cat){
    canvas.addEventListener('click', (event) => { 
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        //點擊食物之後點擊貓咪
        if (isInBtnRange(cat,x,y)) { 
            if(itmMilk.isSelected||itmCan.isSelected)
            {
                cat.foodSelected=true;
                selectFood()
            }     
          }   
           
    })

}
feedcat(catDefault);
feedcat(catBB);



function consumeFood(foodCount,selectedFood){
    if(selectedFood.isSelected)
    {
        if(foodCount===0)
        {
            return;
        }
        foodCount--;
    }
    
}


function selectFood(){ //選擇食物邏輯，如果數量是零就不能被選
    if(itmMilk.isSelected){
        if(milkCount===0)
        {
            return;
        }
        milkCount--;
    }
    if(itmCan.isSelected){
        if(canCount===0)
        {
            return;
        }
        canCount--;
    } 
}


 
 
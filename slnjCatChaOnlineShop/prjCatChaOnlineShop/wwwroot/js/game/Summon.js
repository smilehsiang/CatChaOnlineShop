const RubySingleDrow = document.getElementById("RubySingleDrow");
const RubyTenDrows = document.getElementById('RubyTenDrows');
const CatPointSingleDrow = document.getElementById("CatPointSingleDrow");
const CatPointTenDrows = document.getElementById("CatPointTenDrows");
const result = document.getElementById('result');
const gachaContainer = document.querySelector('.gacha-container');
const animationContainer = document.querySelector('.animation-container');
const animationImages = animationContainer.querySelectorAll('.catcha');
const summonbuttons = document.getElementById('summon-buttons');

let processedData = []; //建立一個空陣列接Data資料

async function fetchData()
{ 
    try {
        const response = await fetch('Api/gameapi');
        if (!response.ok) {
            throw new Error('網絡錯誤');
        }
        const data = await response.json(); // 解析 JSON 格式的回應內容

        // 計算總概率
        const totalProbability = data.reduce((sum, item) => sum + item.lotteryProbability, 0);

        // 計算縮放因子
        const scalingFactor = totalProbability <= 100 ? 100 / totalProbability : 1;

        // 創建一個空陣列來儲存處理後的資料
        const processedData = [];

        // 對每個項目進行處理
        data.forEach(item => {
            const { productName, productId, productImage, lotteryProbability } = item;

            // 將原始機率乘以縮放因子，得到縮放後的機率
            const scaledProbability = lotteryProbability * scalingFactor;

            // 將處理後的資料添加到 processedData 陣列中
            processedData.push({
                productName,
                productId,
                productImage,
                scaledProbability
            });
        });
        return processedData; // 返回處理後的資料
    } catch (error) {
        console.error('錯誤:', error);
    }
}

CatPointTenDrows.addEventListener('click', async function () {
    try {
        const gachaData = await fetchData(); // 取得轉蛋資料
        const numDraws = 10;
        const drawResults = [];
        const allImages = [];
        const allItemName = [];
        let TenOrSingle = 0;
            for (let i = 0; i < numDraws; i++) {
                const randomValue = Math.floor(Math.random() * 100) + 1; // 生成1到100之間的隨機數

                // 初始化索引和臨時總數
                let randomIndex = -1;
                let tempSum = 0;

                // 遍歷資料以找到對應的索引
                for (let j = 0; j < gachaData.length; j++) {
                    tempSum += gachaData[j].scaledProbability; // 累積縮放後的機率

                    if (randomValue <= tempSum) {
                        randomIndex = j;
                        break;
                    }
                }
                const drawnItem = gachaData[randomIndex];
                if (drawnItem && drawnItem.productName) {
                    // 將抽獎結果儲存在陣列中
                    drawResults.push(drawnItem);
                    allImages.push(drawnItem.productImage);
                    allItemName.push(drawnItem.productName);
                    console.log(`第 ${i + 1} 次轉蛋：你獲得了 ${drawnItem.productName},${drawnItem.scaledProbability},${drawnItem.productImage}`);
                } else {
                    W
                    i--; // 減少i以重新執行本次抽獎
                }
            }

            // 計算最高等級的抽獎結果
            let maxScaledProbability = 100; // 初始設為100，確保每個機率都比它大
            let maxResult = null;
            for (const result of drawResults) {
                if (result.scaledProbability < maxScaledProbability) {
                    maxScaledProbability = result.scaledProbability;
                    maxResult = result;
                }
            }

            // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
            if (maxResult) {
                showGachaResult(maxResult.scaledProbability, allImages, allItemName);
                console.log(maxResult.productName);
            }
    } catch (error) {
        console.error('轉蛋時發生錯誤:', error);
    }
});

RubyTenDrows.addEventListener('click', async function () {
    try {
        const gachaData = await fetchData(); // 取得轉蛋資料
        const numDraws = 10;
        const drawResults = [];
        const allImages = [];
        const allItemName = [];
        let TenOrSingle = 0;
        for (let i = 0; i < numDraws; i++) {
            const randomValue = Math.floor(Math.random() * 100) + 1; // 生成1到100之間的隨機數

            // 初始化索引和臨時總數
            let randomIndex = -1;
            let tempSum = 0;

            // 遍歷資料以找到對應的索引
            for (let j = 0; j < gachaData.length; j++) {
                tempSum += gachaData[j].scaledProbability; // 累積縮放後的機率

                if (randomValue <= tempSum) {
                    randomIndex = j;
                    break;
                }
            }
            const drawnItem = gachaData[randomIndex];
            if (drawnItem && drawnItem.productName) {
                // 將抽獎結果儲存在陣列中
                drawResults.push(drawnItem);
                allImages.push(drawnItem.productImage);
                allItemName.push(drawnItem.productName);
                console.log(`第 ${i + 1} 次轉蛋：你獲得了 ${drawnItem.productName},${drawnItem.scaledProbability},${drawnItem.productImage}`);
            } else {
                i--; // 減少i以重新執行本次抽獎
            }
        }

        // 計算最高等級的抽獎結果
        let maxScaledProbability = 100; // 初始設為100，確保每個機率都比它大
        let maxResult = null;
        for (const result of drawResults) {
            if (result.scaledProbability < maxScaledProbability) {
                maxScaledProbability = result.scaledProbability;
                maxResult = result;
            }
        }

        // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
        if (maxResult) {
            showGachaResult(maxResult.scaledProbability, allImages, allItemName);
            console.log(maxResult.productName);
        }
    } catch (error) {
        console.error('轉蛋時發生錯誤:', error);
    }
});

CatPointSingleDrow.addEventListener('click', async function () {
    try {
        const gachaData = await fetchData(); // 取得轉蛋資料
        const numDraws = 1;
        const drawResults = [];
        const allImages = [];
        const allItemName = [];
        let TenOrSingle = 1;
        for (let i = 0; i < numDraws; i++) {
            const randomValue = Math.floor(Math.random() * 100) + 1; // 生成1到100之間的隨機數

            // 初始化索引和臨時總數
            let randomIndex = -1;
            let tempSum = 0;

            // 遍歷資料以找到對應的索引
            for (let j = 0; j < gachaData.length; j++) {
                tempSum += gachaData[j].scaledProbability; // 累積縮放後的機率

                if (randomValue <= tempSum) {
                    randomIndex = j;
                    break;
                }
            }
            const drawnItem = gachaData[randomIndex];
            if (drawnItem && drawnItem.productName) {
                // 將抽獎結果儲存在陣列中
                drawResults.push(drawnItem);
                allImages.push(drawnItem.productImage);
                allItemName.push(drawnItem.productName);
                console.log(`第 ${i + 1} 次轉蛋：你獲得了 ${drawnItem.productName},${drawnItem.scaledProbability},${drawnItem.productImage}`);
            } else {
                i--; // 減少i以重新執行本次抽獎
            }
        }

        // 計算最高等級的抽獎結果
        let maxScaledProbability = 100; // 初始設為100，確保每個機率都比它大
        let maxResult = null;
        for (const result of drawResults) {
            if (result.scaledProbability < maxScaledProbability) {
                maxScaledProbability = result.scaledProbability;
                maxResult = result;
            }
        }

        // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
        if (maxResult) {
            showGachaResult(maxResult.scaledProbability, allImages, allItemName, TenOrSingle);
            console.log(maxResult.productName);
        }
    } catch (error) {
        console.error('轉蛋時發生錯誤:', error);
    }
});

RubySingleDrow.addEventListener('click', async function () {
    try {
        const gachaData = await fetchData(); // 取得轉蛋資料
        const numDraws = 1;
        const drawResults = [];
        const allImages = [];
        const allItemName = [];
        let TenOrSingle = 1;
        for (let i = 0; i < numDraws; i++) {
            const randomValue = Math.floor(Math.random() * 100) + 1; // 生成1到100之間的隨機數

            // 初始化索引和臨時總數
            let randomIndex = -1;
            let tempSum = 0;

            // 遍歷資料以找到對應的索引
            for (let j = 0; j < gachaData.length; j++) {
                tempSum += gachaData[j].scaledProbability; // 累積縮放後的機率

                if (randomValue <= tempSum) {
                    randomIndex = j;
                    break;
                }
            }
            const drawnItem = gachaData[randomIndex];
            if (drawnItem && drawnItem.productName) {
                // 將抽獎結果儲存在陣列中
                drawResults.push(drawnItem);
                allImages.push(drawnItem.productImage);
                allItemName.push(drawnItem.productName);
                console.log(`第 ${i + 1} 次轉蛋：你獲得了 ${drawnItem.productName},${drawnItem.scaledProbability},${drawnItem.productImage}`);
            } else {
                i--; // 減少i以重新執行本次抽獎
            }
        }

        // 計算最高等級的抽獎結果
        let maxScaledProbability = 100; // 初始設為100，確保每個機率都比它大
        let maxResult = null;
        for (const result of drawResults) {
            if (result.scaledProbability < maxScaledProbability) {
                maxScaledProbability = result.scaledProbability;
                maxResult = result;
            }
        }

        // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
        if (maxResult) {
            showGachaResult(maxResult.scaledProbability, allImages, allItemName, TenOrSingle);
            console.log(maxResult.productName);
     
        }
    } catch (error) {
        console.error('轉蛋時發生錯誤:', error);
    }
});

function showGachaResult(scaledProbability, allImages, allItemName, TenOrSingle) {
    result.innerHTML = '';
    // 創建 ItemNameContainer 變數並初始化
    const ItemNameContainer = document.createElement('div');
    ItemNameContainer.classList.add('item-container');

    // 將四個button關掉顯示
    summonbuttons.style.display = 'none';
    // 用於儲存要顯示的動畫等級
    let animationLevel = '';

    // 檢查是否有SS等級的獎項，如果有則設置動畫等級為'SS'
    if (scaledProbability <= 5) {
        animationLevel = 'SS';
    } else if (scaledProbability <= 10) {
        animationLevel = 'S';
    } else {
        animationLevel = 'A';
    }

    // 根據動畫等級顯示相應的動畫
    if (animationLevel === 'SS') {
        animationContainer.querySelector('.SS').style.display = 'inline';
    } else if (animationLevel === 'S') {
        animationContainer.querySelector('.S').style.display = 'inline';
    } else {
        animationContainer.querySelector('.A').style.display = 'inline';
    }

    // 創建一個空的容器用於儲存所有的物品容器
    const allItemContainers = [];   

    allImages.forEach((imageSrc, index) => {
        // 創建包含圖片和文字的容器
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('item-container'); // 可以添加額外的 CSS 類名或樣式

        // 創建圖片元素
        const itemImage = document.createElement('img');
        itemImage.src = imageSrc; // 這裡需要提供正確的圖片 URL
        itemImage.style.width = '48px';
        itemImage.style.height = '48px';
        // 創建文字元素
        const itemNameElement = document.createElement('p');
        itemNameElement.textContent = allItemName[index]; // 使用相同的索引以取得相應的文字

        // 將圖片和文字添加到容器中
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemNameElement);

        // 儲存此容器到 allItemContainers 陣列中
        allItemContainers.push(itemContainer);

        // 將容器添加到 ItemNameContainer 中
        result.appendChild(itemContainer);  
        // 判斷是進行十抽還是單抽，並調整版型

    });


    setTimeout(() => {
        animationImages.forEach(image => {
            image.style.display = 'none';
        });

        // 插入抽獎物品的圖片到抽獎格子中
        const resultContainer = document.querySelector('.result-container');
        resultContainer.style.display = 'display';

        const confirmButton = document.createElement('button');
        confirmButton.id = 'Btn_itemOk';
        confirmButton.textContent = '確認';
        confirmButton.style.fontSize = '20px';
        confirmButton.style.width = '70px';
        confirmButton.style.height = '50px';


        confirmButton.addEventListener('click', () => {
            // 點擊確認按鈕後，關閉獎項顯示，並顯示四個button
            result.innerHTML = '';
            result.style.display = 'none';
            summonbuttons.style.display = 'block';
        });

        // 將確認按鈕添加到獎項後面
        result.appendChild(confirmButton);
        result.style.display = 'grid';
    }, 5000); // 5000毫秒等於5秒
}



    // Button 4 點擊事件處理
    //button4.addEventListener('click', () => {
    //    // 顯示轉蛋頁面
    //    gachaContainer.style.display = 'block';
    ////});
    //console.log(RubySingleDrow, RubyTenDrows, CatPointSingleDrow, CatPointTenDrows, result);

    //function between(x, min, max) {
    //    return x >= min && x <= max;
    //}
    //function checkPrizeTake(rand) {
    //    let itemClass = ''; // 獎項等級的CSS類
    //    let image = ''; // 圖片的路徑
    //    let name = ''; // 獎項名稱

    //    // 根據機率判斷獲得的獎項
    //    if (between(rand, 1, 2)) {
    //        itemClass = 'SS'; // SS獎項
    //        image = '../../images/game/gacha/P_coupon.png';
    //        name = '實體折價券';
    //    } else if (between(rand, 3, 7)) {
    //        itemClass = 'SS'; // SS獎項
    //        image = '../../images/game/gacha/kittenBB.png';
    //        name = '貓咪';
    //    } else if (between(rand, 8, 12)) {
    //        itemClass = 'S'; // S獎項
    //        image = '../../images/game/gacha/P_background.png';
    //        name = '背景';
    //    } else if (between(rand, 13, 25)) {
    //        itemClass = 'S'; // A獎項
    //        image = '../../images/game/gacha/P_bowl.png';
    //        name = '飯盆';
    //    } else if (between(rand, 26, 30)) {
    //        itemClass = 'S'; // A獎項
    //        image = '../../images/game/gacha/P_lamp.png';
    //        name = '家具';
    //    } else if (between(rand, 31, 55)) {
    //        itemClass = 'A'; // A獎項
    //        image = '../../images/game/gacha/P_food.png';
    //        name = '罐罐';
    //    } else if (between(rand, 56, 80)) {
    //        itemClass = 'A'; // A獎項
    //        image = '../../images/game/gacha/P_water.png';
    //        name = '牛奶';
    //    } else {
    //        itemClass = 'A'; // A獎項
    //        image = '../../images/game/gacha/_catcoin.png';
    //        name = '貓幣';
    //    }

    //    return `
    //    <div class="item ${itemClass}">
    //        <img src="${image}" class="img" style="height: 40px; width: 40px;">
    //        <div style="color: white; font-size: 20px; width: 70px;">${name}</div>
    //    </div>
    //`;
    //}

    //紅利十連抽
    //RubyTenDrows.addEventListener('click', function () {
    //    // 先將所有動畫隱藏
    //    animationImages.forEach(image => {
    //        image.style.display = 'none';
    //    });
    //    let display = '';

    //    for (let i = 0; i < 10; i++) {
    //        // 產生隨機整數(1~100)
    //        // Math.floor(Math.random() * (max - min + 1)) + min
    //        const rand = Math.floor(Math.random() * 100) + 1;

    //        // 以下判斷是落於哪個區間，以此決定抽中何種卡別
    //        display += `<div class="item-container" style=" margin-left=5px;">${checkPrizeTake(rand)}</div>`;
    //    }

    //    showGachaResult(display);
    //});

    //貓幣十連抽
    //CatPointTenDrows.addEventListener('click', function () {
    //    // 先將所有動畫隱藏
    //    animationImages.forEach(image => {
    //        image.style.display = 'none';
    //    });
    //    let display = '';
    //    let tenorsingle = 0;

    //    for (let i = 0; i < 10; i++) {
    //        // 產生隨機整數(1~100)
    //        // Math.floor(Math.random() * (max - min + 1)) + min
    //        const rand = Math.floor(Math.random() * 100) + 1;

    //        // 以下判斷是落於哪個區間，以此決定抽中何種卡別
    //        display += `<div class="item-container"style=" margin-left=5px;" >${checkPrizeTake(rand)}</div>`;
    //    }
    //    showGachaResult(display, tenorsingle);
    //});
    ////紅利單抽
    //RubySingleDrow.addEventListener('click', function () {
    //    animationImages.forEach(image => {
    //        image.style.display = 'none';
    //    })
    //    let display = '';
    //    let tenorsingle = 1;
    //    const rand = Math.floor(Math.random() * 100) + 1;
    //    display = `<div class="item-container" style="margin-left:320px;">${checkPrizeTake(rand)}</div>`;
    //    showGachaResult(display, tenorsingle);
    //})
    ////貓幣單抽
    //CatPointSingleDrow.addEventListener('click', function () {
    //    animationImages.forEach(image => {
    //        image.style.display = 'none';
    //    })
    //    let display = '';
    //    let tenorsingle = 1;
    //    const rand = Math.floor(Math.random() * 100) + 1;
    //    display = `<div class="item-container" style="margin-left:320px;">${checkPrizeTake(rand)}</div>`;
    //    showGachaResult(display, tenorsingle);
    //})



    // 可重複使用的開關動畫&開關按鍵，專門用來控制顯示的部分
    //function showGachaResult(display/*, tenorsingle*/) {
    //    // 將四個button關掉顯示
    //    summonbuttons.style.display = 'none';
    //    // 檢查是否有SS等級的獎項，如果有則顯示SS動畫
    //    const hasSSItem = display.includes('SS');
    //    if (hasSSItem) {
    //        animationContainer.querySelector('.SS').style.display = 'inline';
    //    } else {
    //        // 檢查是否有S等級的獎項，如果有則顯示S動畫
    //        const hasSItem = display.includes('S');
    //        if (hasSItem) {
    //            animationContainer.querySelector('.S').style.display = 'inline';
    //        } else {
    //            // 沒有SS和S等級的獎項，顯示A動畫
    //            animationContainer.querySelector('.A').style.display = 'inline';
    //        }
    //    }
    //    setTimeout(() => {
    //        animationImages.forEach(image => {
    //            image.style.display = 'none';
    //        });

    //        // 顯示獎項
    //        result.innerHTML = display;

    //        // 生成確認按鈕
    //        const confirmButton = document.createElement('button');
    //        //x = tenorsingle;
    //        ////判斷10抽或1抽 調整版型

    //        //if (x == 0 | x == 0) {
    //        //    confirmButton.textContent = '確認'
    //        //    confirmButton.style.fontSize = '20px'; // 設定文字大小為20px
    //        //    confirmButton.style.width = '70px'; // 設定寬度為70px
    //        //    confirmButton.style.height = '50px'; // 設定高度為50px
    //        //    confirmButton.style.marginLeft = '320px';
    //        //    confirmButton.style.marginBottom = '250px';
    //        //} else if (x == 1 | x == 1) {
    //        //    confirmButton.textContent = '確認';
    //        //    confirmButton.style.fontSize = '20px'; // 設定文字大小為20px
    //        //    confirmButton.style.width = '70px'; // 設定寬度為70px
    //        //    confirmButton.style.height = '50px'; // 設定高度為50px
    //        //    confirmButton.style.marginTop = '200px'; // 
    //        //    confirmButton.style.marginLeft = '160px'; //
    //        //}


    //        // 如果需要共用的 margin-left 設定，可以將這行代碼放在 if-else 外面
    //        // confirmButton


    //        /*     confirmButton.style.marginTop = '50px';*/
    //        // 將確認按鈕添加到確認容器內



    //        confirmButton.addEventListener('click', () => {
    //            // 點擊確認按鈕後，關閉獎項顯示
    //            // 將四個button打開
    //            result.innerHTML = '結果:';
    //            result.style.display = 'none';
    //            summonbuttons.style.display = 'block';
    //        });



    //        // 將確認按鈕添加到獎項後面
    //        result.appendChild(confirmButton);
    //        result.style.display = 'grid';
    //    }, 5000); // 5000毫秒等於5秒
    //}

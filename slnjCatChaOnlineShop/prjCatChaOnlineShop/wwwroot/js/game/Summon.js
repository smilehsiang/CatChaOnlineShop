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
//連接使用者的資料庫數據
let 使用者ID;
let 角色名稱;
let 貓幣數量;
let 紅利數量;
let 道具ID = [];
// 初始化 playerDataArray 為一個空陣列
const playerDataArray = [];

// 當使用者進行抽獎時，將抽獎數據添加到 playerDataArray
function SAVEDATA(使用者ID, 貓幣數量, 紅利數量, 道具ID, isTenDraw = false, allItemName) {
    const apiUrl = '/api/Api/TestDBLogin';

    // 確保道具ID是陣列
    const 道具ID陣列 = Array.isArray(道具ID) ? 道具ID : [道具ID];

    // 遍歷道具ID陣列，每次處理一個ProductId
    道具ID陣列.forEach(id => {
        const userData = {
/*            ItemName: allItemName,*/
            MemberId: 使用者ID,
            ProductId: parseInt(id),
            CatCoinQuantity: 貓幣數量,
            LoyaltyPoints: 紅利數量,
        };

        // 發送 POST 請求
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('發送數據時發生錯誤GGGGGG');
                }
                return response.json();
            })
            .then(responseData => {
                console.log('數據已成功發送:', responseData);
            })
            .catch(error => {
                console.error('發送數據時發生錯誤:', error);
            });
    });
}

CatPointTenDrows.addEventListener('click', async function () {
    if (貓幣數量 >= 9000) {
        try {
            const gachaData = await fetchData(); // 取得轉蛋資料
            const numDraws = 100;
            const drawResults = [];
            const allImages = [];
            const allItemName = [];
            const allproductid = [];
            貓幣數量 -= 9000;
            console.log(貓幣數量);


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
                    allproductid.push(drawnItem.productId);
                    道具ID = allproductid.join(','); 
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
            SAVEDATA(使用者ID, 貓幣數量, 紅利數量, 道具ID, true, allItemName)
            // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
            if (maxResult) {
                showGachaResult(maxResult.scaledProbability, allImages, allItemName);
                console.log(maxResult.productName, 使用者ID, 角色名稱, 貓幣數量, 紅利數量);
            }
        } catch (error) {
            console.error('轉蛋時發生錯誤:', error);
        }
    }
    else {
        console.log("貓幣不足");
    }
});

RubyTenDrows.addEventListener('click', async function () {
    if (紅利數量 >= 1800) {
        try {
            const gachaData = await fetchData(); // 取得轉蛋資料
            const numDraws = 10;
            const drawResults = [];
            const allImages = [];
            const allItemName = [];
            const allproductid = [];
            紅利數量 -= 1800;
            console.log(紅利數量);

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
                    allproductid.push(drawnItem.productId);
                    道具ID = allproductid.join(','); 
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
            SAVEDATA(使用者ID, 貓幣數量, 紅利數量, 道具ID,true);
            // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
            if (maxResult) {
                showGachaResult(maxResult.scaledProbability, allImages, allItemName,);
                console.log(maxResult.productName);
            }
        } catch (error) {
            console.error('轉蛋時發生錯誤:', error);
        }
    }
    else {
        console.log("紅利不足");
    }
});

CatPointSingleDrow.addEventListener('click', async function () {
    if (貓幣數量 >= 1000) {
        try {
            const gachaData = await fetchData(); // 取得轉蛋資料
            const numDraws = 1;
            const drawResults = [];
            const allImages = [];
            const allItemName = [];
            const allproductid = [];
            let TenOrSingle = 1;
            貓幣數量 -= 1000;
            console.log(貓幣數量);

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
                    allproductid.push(drawnItem.productId);
                    道具ID = allproductid.join(','); 
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
            SAVEDATA(使用者ID, 貓幣數量, 紅利數量, 道具ID);
            // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
            if (maxResult) {
                showGachaResult(maxResult.scaledProbability, allImages, allItemName, TenOrSingle);
                console.log(maxResult.productName);
            }
        } catch (error) {
            console.error('轉蛋時發生錯誤:', error);
        }
    }
    else {
        console.log("貓幣不足");
    }
});

RubySingleDrow.addEventListener('click', async function () {
    if (紅利數量 >= 200) {
        try {
            const gachaData = await fetchData(); // 取得轉蛋資料
            const numDraws = 1;
            const drawResults = [];
            const allImages = [];
            const allItemName = [];
            const allproductid = [];
            let TenOrSingle = 1;
            紅利數量 -= 200;
            console.log(紅利數量);

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
                    allproductid.push(drawnItem.productId);
                    道具ID = allproductid.join(','); 
                    console.log(`第 ${i + 1} 次轉蛋：你獲得了${drawnItem.productName},${drawnItem.scaledProbability},${drawnItem.productImage},${drawnItem.productId}`);
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
            SAVEDATA(使用者ID, 貓幣數量, 紅利數量, 道具ID);
            // 顯示最高等級的動畫和結果，並傳遞所有物品的圖片
            if (maxResult) {
                showGachaResult(maxResult.scaledProbability, allImages, allItemName, TenOrSingle, 道具ID);
                console.log(maxResult.productName);
            }
        } catch (error) {
            console.error('轉蛋時發生錯誤:', error);
        }
    }
    else {
        console.log("紅利不足");
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

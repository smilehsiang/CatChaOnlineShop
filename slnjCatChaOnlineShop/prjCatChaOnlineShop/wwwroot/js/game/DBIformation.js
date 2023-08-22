const testDBlogin = document.getElementById('testDBlogin');

async function fetchData() {
    try {
        const response = await fetch('/api/Api/Gameapi');
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
async function fetchDBData() {
    try {
        const response = await fetch('/api/Api/TestDBLogin');
        if (!response.ok) {
            console.error('網路錯誤'); // 在拋出錯誤之前印出錯誤訊息
            throw new Error('網路錯誤');
        }

        const data = await response.json(); // 解析 JSON 格式的回應內容

        // 創建一個空陣列來儲存處理後的資料
        const processedData = [];

        const firstItem = data[0];
        if (!firstItem) {
            console.error('網路錯誤：沒有資料'); // 如果沒有資料，印出錯誤訊息
            throw new Error('網路錯誤：沒有資料');
        }

        firstItem.gameItemInfo.forEach(itemInfo => {
            const { productId, quantityOfInGameItems, itemName } = itemInfo;

            processedData.push({
                MemberId: firstItem.memberId,
                CharacterName: firstItem.characterName,
                CatCoinQuantity: firstItem.catCoinQuantity,
                LoyaltyPoints: firstItem.loyaltyPoints,
                RunGameHighestScore: firstItem.runGameHighestScore,
                ProductId: productId,
                QuantityOfInGameItems: quantityOfInGameItems,
                ItemName: itemName
            });
        });

        return processedData; // 返回處理後的資料
    } catch (error) {
        console.error('錯誤:', error);
    }
}

testDBlogin.addEventListener('click', async function () {
    try {
        const gachaData = await fetchData(); // 取得轉蛋資料
        const information = await fetchDBData();
        information.forEach(IFM => {
            console.log(
                'ProductId:', IFM.ProductId,
                'QuantityOfInGameItems:', IFM.QuantityOfInGameItems,
                'ItemName:', IFM.ItemName
            )
        },
            使用者ID = information[0].MemberId,
            角色名稱=information[0].CharacterName,
            貓幣數量=information[0].CatCoinQuantity,
            紅利數量=information[0].LoyaltyPoints,
            console.log(
            information[0].MemberId,
            information[0].CharacterName,
            information[0].CatCoinQuantity,
            information[0].LoyaltyPoints,
            information[0].RunGameHighestScore
            )
        )
    } catch (error) {
        console.error('錯誤:', error);
    }
});

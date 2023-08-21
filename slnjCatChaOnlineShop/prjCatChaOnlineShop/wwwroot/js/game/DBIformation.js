const testDBlogin = document.getElementById('testDBlogin');

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
        const information = await fetchDBData();
        information.forEach(IFM => {
            console.log(
                'ProductId:', IFM.ProductId,
                'QuantityOfInGameItems:', IFM.QuantityOfInGameItems,
                'ItemName:', IFM.ItemName
            )
        }, console.log(information[0].MemberId,
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

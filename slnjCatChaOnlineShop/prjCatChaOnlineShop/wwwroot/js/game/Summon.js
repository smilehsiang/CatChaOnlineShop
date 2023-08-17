const RubySingleDrow = document.getElementById("RubySingleDrow");
const RubyTenDrows = document.getElementById('RubyTenDrows');
const CatPointSingleDrow = document.getElementById("CatPointSingleDrow");
const CatPointTenDrows = document.getElementById("CatPointTenDrows");
const result = document.getElementById('result');
const gachaContainer = document.querySelector('.gacha-container');
/*const button4 = document.querySelector('.extra-buttons .button:last-child'); // Button 4*/
const animationContainer = document.querySelector('.animation-container');
const animationImages = animationContainer.querySelectorAll('.catcha');
const summonbuttons = document.getElementById('summon-buttons');
// 發起 GET 請求並處理 JSON 數據
fetch('Api/gameapi')
    .then(response => {
        if (!response.ok) {
            throw new Error('網絡錯誤');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // 在控制台輸出 JSON 數據
        // 在這裡進行數據處理

        // 假設 data 是你從 API 獲取的 JSON 數據陣列
        data.forEach(item => {
            const { productName, productId, productCategoryId, lotteryProbability } = item;
            // 在這裡使用解構賦值獲取數據的各個屬性值

            // 進行你的數據處理，例如計算、顯示等
            console.log(`Product Name: ${productName}`);
            console.log(`Product ID: ${productId}`);
            console.log(`Product Category ID: ${productCategoryId}`);
            console.log(`Lottery Probability: ${lotteryProbability}`);
        });
    })
    .catch(error => {
        console.error('無法獲取 JSON 數據', error);
    });


    // Button 4 點擊事件處理
    //button4.addEventListener('click', () => {
    //    // 顯示轉蛋頁面
    //    gachaContainer.style.display = 'block';
    ////});
    //console.log(RubySingleDrow, RubyTenDrows, CatPointSingleDrow, CatPointTenDrows, result);

    function between(x, min, max) {
        return x >= min && x <= max;
    }
    function checkPrizeTake(rand) {
        let itemClass = ''; // 獎項等級的CSS類
        let image = ''; // 圖片的路徑
        let name = ''; // 獎項名稱

        // 根據機率判斷獲得的獎項
        if (between(rand, 1, 2)) {
            itemClass = 'SS'; // SS獎項
            image = '../../images/game/gacha/P_coupon.png';
            name = '實體折價券';
        } else if (between(rand, 3, 7)) {
            itemClass = 'SS'; // SS獎項
            image = '../../images/game/gacha/kittenBB.png';
            name = '貓咪';
        } else if (between(rand, 8, 12)) {
            itemClass = 'S'; // S獎項
            image = '../../images/game/gacha/P_background.png';
            name = '背景';
        } else if (between(rand, 13, 25)) {
            itemClass = 'S'; // A獎項
            image = '../../images/game/gacha/P_bowl.png';
            name = '飯盆';
        } else if (between(rand, 26, 30)) {
            itemClass = 'S'; // A獎項
            image = '../../images/game/gacha/P_lamp.png';
            name = '家具';
        } else if (between(rand, 31, 55)) {
            itemClass = 'A'; // A獎項
            image = '../../images/game/gacha/P_food.png';
            name = '罐罐';
        } else if (between(rand, 56, 80)) {
            itemClass = 'A'; // A獎項
            image = '../../images/game/gacha/P_water.png';
            name = '牛奶';
        } else {
            itemClass = 'A'; // A獎項
            image = '../../images/game/gacha/_catcoin.png';
            name = '貓幣';
        }

        return `
        <div class="item ${itemClass}">
            <img src="${image}" class="img" style="height: 40px; width: 40px;">
            <div style="color: white; font-size: 20px; width: 70px;">${name}</div>
        </div>
    `;
    }

    //紅利十連抽
    RubyTenDrows.addEventListener('click', function () {
        // 先將所有動畫隱藏
        animationImages.forEach(image => {
            image.style.display = 'none';
        });
        let display = '';
        let tenorsingle = 0;

        for (let i = 0; i < 10; i++) {
            // 產生隨機整數(1~100)
            // Math.floor(Math.random() * (max - min + 1)) + min
            const rand = Math.floor(Math.random() * 100) + 1;

            // 以下判斷是落於哪個區間，以此決定抽中何種卡別
            display += `<div class="item-container" style=" margin-left=5px;">${checkPrizeTake(rand)}</div>`;
        }

        showGachaResult(display, tenorsingle);
    });

    //貓幣十連抽
    CatPointTenDrows.addEventListener('click', function () {
        // 先將所有動畫隱藏
        animationImages.forEach(image => {
            image.style.display = 'none';
        });
        let display = '';
        let tenorsingle = 0;

        for (let i = 0; i < 10; i++) {
            // 產生隨機整數(1~100)
            // Math.floor(Math.random() * (max - min + 1)) + min
            const rand = Math.floor(Math.random() * 100) + 1;

            // 以下判斷是落於哪個區間，以此決定抽中何種卡別
            display += `<div class="item-container"style=" margin-left=5px;" >${checkPrizeTake(rand)}</div>`;
        }
        showGachaResult(display, tenorsingle);
    });
    //紅利單抽
    RubySingleDrow.addEventListener('click', function () {
        animationImages.forEach(image => {
            image.style.display = 'none';
        })
        let display = '';
        let tenorsingle = 1;
        const rand = Math.floor(Math.random() * 100) + 1;
        display = `<div class="item-container" style="margin-left:320px;">${checkPrizeTake(rand)}</div>`;
        showGachaResult(display, tenorsingle);
    })
    //貓幣單抽
    CatPointSingleDrow.addEventListener('click', function () {
        animationImages.forEach(image => {
            image.style.display = 'none';
        })
        let display = '';
        let tenorsingle = 1;
        const rand = Math.floor(Math.random() * 100) + 1;
        display = `<div class="item-container" style="margin-left:320px;">${checkPrizeTake(rand)}</div>`;
        showGachaResult(display, tenorsingle);
    })



    // 可重複使用的開關動畫&開關按鍵，專門用來控制顯示的部分
    function showGachaResult(display, tenorsingle) {
        // 將四個button關掉顯示
        summonbuttons.style.display = 'none';
        // 檢查是否有SS等級的獎項，如果有則顯示SS動畫
        const hasSSItem = display.includes('SS');
        if (hasSSItem) {
            animationContainer.querySelector('.SS').style.display = 'inline';
        } else {
            // 檢查是否有S等級的獎項，如果有則顯示S動畫
            const hasSItem = display.includes('S');
            if (hasSItem) {
                animationContainer.querySelector('.S').style.display = 'inline';
            } else {
                // 沒有SS和S等級的獎項，顯示A動畫
                animationContainer.querySelector('.A').style.display = 'inline';
            }
        }
        setTimeout(() => {
            animationImages.forEach(image => {
                image.style.display = 'none';
            });

            // 顯示獎項
            result.innerHTML = display;

            // 生成確認按鈕
            const confirmButton = document.createElement('button');
            x = tenorsingle;
            //判斷10抽或1抽 調整版型

            if (x == 0 | x == 0) {
                confirmButton.textContent = '確認'
                confirmButton.style.fontSize = '20px'; // 設定文字大小為20px
                confirmButton.style.width = '70px'; // 設定寬度為70px
                confirmButton.style.height = '50px'; // 設定高度為50px
                confirmButton.style.marginLeft = '320px';
                confirmButton.style.marginBottom = '250px';
            } else if (x == 1 | x == 1) {
                confirmButton.textContent = '確認';
                confirmButton.style.fontSize = '20px'; // 設定文字大小為20px
                confirmButton.style.width = '70px'; // 設定寬度為70px
                confirmButton.style.height = '50px'; // 設定高度為50px
                confirmButton.style.marginTop = '200px'; // 
                confirmButton.style.marginLeft = '160px'; //
            }


            // 如果需要共用的 margin-left 設定，可以將這行代碼放在 if-else 外面
            // confirmButton


            /*     confirmButton.style.marginTop = '50px';*/
            // 將確認按鈕添加到確認容器內



            confirmButton.addEventListener('click', () => {
                // 點擊確認按鈕後，關閉獎項顯示
                // 將四個button打開
                result.innerHTML = '結果:';
                result.style.display = 'none';
                summonbuttons.style.display = 'block';
            });



            // 將確認按鈕添加到獎項後面
            result.appendChild(confirmButton);
            result.style.display = 'grid';
        }, 5000); // 5000毫秒等於5秒
    }

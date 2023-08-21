// 用來修改預設的規則的錯誤文字;
jQuery.extend(jQuery.validator.messages, {
    required: "此欄位必填",
    remote: "Please fix this field",
    email: "請輸入正確的電子信箱",
    url: "請輸入正確的網址",
    date: "請輸入正確的日期",
    dateISO: "請輸入正確的 (ISO) 日期格式",
    number: "本欄位請填入數字",
    digits: "本欄位請填入數字",
    creditcard: "請輸入正確的信用卡號",
    equalTo: "請再次輸入相同的值.",
    maxlength: $.validator.format("最多輸入 {0} 個字"),
    minlength: $.validator.format("至少輸入 {0} 個字"),
    rangelength: $.validator.format("請輸入 {0} 到 {1} 個字"),
    range: $.validator.format("請輸入 {0} 到 {1} 的數字"),
    max: $.validator.format("請輸入小於等於 {0} 的值"),
    min: $.validator.format("請輸入大於等於 {0} 的值")
});

// 基本上 pattern 就是
//jQuery.validator.addMethod("規則名稱英文", function (value, element) {
//    var str = value;
//    var result = false;
//    if (驗證通過) {
//        result = true;
//    } else {
//        result = false;
//    }
//    return result;
//      "驗證不通過的訊息");}

//驗證手機號碼
jQuery.validator.addMethod("memberPhoneNum", function (value, element) {
    var str = value;
    var result = false;
    if (str.length > 0) {
        //是否只有數字;
        var patt_mobile = /^[\d]{1,}$/;
        result = patt_mobile.test(str);

        if (result) {
            //檢查前兩個字是否為 09
            //檢查前四個字是否為 8869
            var firstTwo = str.substr(0, 2);
            var firstFour = str.substr(0, 4);
            var afterFour = str.substr(4, str.length - 1);
            if (firstFour == '8869') {
                $(element).val('09' + afterFour);
                if (afterFour.length == 8) {
                    result = true;
                } else {
                    result = false;
                }
            } else if (firstTwo == '09') {
                if (str.length == 10) {
                    result = true;
                } else {
                    result = false;
                }
            } else {
                result = false;
            }
        }
    } else {
        result = true;
    }
    return result;
}, "手機號碼不符合格式，僅允許09開頭的10碼數字");

//驗證密碼
jQuery.validator.addMethod("memberPassword", function (value, element) {
    var str = value;
    var result = false;

    if (str.length > 0) {
        //測試有沒有在6~15個字
        var patt = /^[a-zA-z0-9]{6,15}$/;
        var result = patt.test(str);
        //測試有沒有英文字母
        var pattEn = /[a-zA-Z]{1,}/;
        resultEn = pattEn.test(str);
        //測試有沒有數字
        var pattDigit = /[0-9]{1,}/;
        resultNum = pattDigit.test(str);

        //三個條件都符合才對
        if (result == true && resultEn == true && resultNum == true) {
            result = true;
        }
        else {
            result = false;
        }
    } else {
        result = true;
    }
    return result;
}, "密碼為 6～15個字元的英文字母、數字混合，但不含空白鍵及標點符號。")

////驗證第二次的密碼是否與第一次輸入相符
//jQuery.validator.addMethod("memberPasswordCheck", function (value, element) {
//    var str = value;
//    var result = false;

//    if (str.value == 第一次輸入的密碼) {
//        result = true;
//    }
//    else {
//        result = false;
//    }
//    return result;
//},"密碼不相符，請再重新輸入一次")

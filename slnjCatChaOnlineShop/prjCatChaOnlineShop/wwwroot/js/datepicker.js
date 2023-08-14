$("input.dateRange").daterangepicker({
    "alwaysShowCalendars": true,
    opens: "left",
    ranges: {
    "今天": [moment(), moment()],
    "過去 7 天": [moment().subtract(6, "days"), moment()],
    "本月": [moment().startOf("month"), moment().endOf("month")],
    "上個月": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
    },
    locale: {
    format: "YYYY-MM-DD",
    separator: " ~ ",
    applyLabel: "確定",
    cancelLabel: "清除",
    fromLabel: "開始日期",
    toLabel: "結束日期",
    customRangeLabel: "自訂日期區間",
    daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
    monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月"
    ],
    firstDay: 1
    }
    });
    $("input.dateRange").on("cancel.daterangepicker", function(ev, picker) {
    $(this).val("");
    });
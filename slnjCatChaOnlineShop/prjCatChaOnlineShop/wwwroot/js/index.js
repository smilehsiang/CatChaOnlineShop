$(document).ready(function () {
    //======================= sidebar tab 切換狀態
    var currentCollapse = null;

    $(".nav-item .nav-link").click(function () {

        var targetCollapse = $($(this).data('target'));

        if (currentCollapse && currentCollapse.attr('id') !== targetCollapse.attr('id')) {
            currentCollapse.removeClass('show-content');
        }

        targetCollapse.toggleClass('show-content');//collapsed
        currentCollapse = targetCollapse.hasClass('show-content') ? targetCollapse : null;

        //---------------------------------------------------------------------------
        //======================= font-awasome click - icon切換
        var targetLink = $(this);

        // 如果目前點擊的link已經有collapsed class，則移除
        if (targetLink.hasClass('collapsed')) {
            targetLink.removeClass('collapsed');
        } else {
            // 否則新增collapsed class
            targetLink.addClass('collapsed');
        }
    });
});

//======================sidebar 手機板
function showSideBar() {
    $('.SideBar').addClass('show_sidebar');
    $('.SideBar').removeClass('hide_sidebar');
    $('#bg-hide').addClass('maxBG');
}

function closeSideBar() {
    $('.SideBar').addClass('hide_sidebar')
    $('#bg-hide').removeClass('maxBG');
    $('.SideBar').removeClass('show_sidebar');
}
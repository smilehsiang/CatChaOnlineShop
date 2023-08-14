// 開始預約服務介紹
$(document).ready(function () {
	var title = [
		"提供最頂級美容場域",
		"專業寵物美容師",
		"服務內容"
	];
	var descriptions = [
		"歡迎來到「愛犬美容宮殿」，我們的場所不只是一個寵物美容的工作室，而是一個專屬於您寶貝寵物的專業護理中心。在這裡，我們專注於提供最高品質的寵物護理服務，讓您的寵物可以在我們的專業團隊手中獲得最佳的照顧。愛犬美容宮殿是一個充滿溫馨氣氛的空間，由經驗豐富的獸醫和專業寵物美容師組成的團隊管理。我們提供全面的寵物美容服務，包括剪毛、洗澡、指甲修剪、耳朵清潔，以及專門的護膚療程等。我們不僅專注於寵物的外在美，我們更關注他們的身心健康。因此，我們的團隊會根據每一隻寵物的個體差異和需要，提供量身定制的護理方案。我們用心聆聽每個主人的需求，並與您一起為寵物設計最適合他的護理計劃。愛犬美容宮殿裡充滿了愛與關懷，我們深信只有在充滿愛的環境中，寵物才能得到真正的放鬆與享受。我們尊重每一隻寵物的感受，讓他們在這裡就像在家一樣舒適自在。我們相信，寵物美容不只是為了讓他們看起來更漂亮，更是為了他們的健康與幸福。在愛犬美容宮殿，我們承諾提供最專業、最溫馨的服務，讓您的寵物在享受美容的同時，也能獲得最佳的護理。讓我們一起為寵物創造一個更美好的生活！",
		"在「愛犬美容宮殿」，我們擁有一支專業且富有愛心的寵物美容師團隊。每位美容師都擁有國家認可的專業證照，不僅具備專業的技能，同時也有著深厚的寵物護理知識。我們的寵物美容師們都有豐富的經驗，熟知各種不同品種的寵物需要什麼樣的護理。他們善於溝通，不僅能夠與您充分討論寵物的護理需求，也懂得如何用心與寵物建立信任關係，讓寵物在接受服務時感到放鬆舒適。每位美容師都承諾將他們的熱情和專業投入到每一次的護理過程中，無論是一次簡單的洗澡，還是一次全面的美容療程，他們都會精心呵護每一位寵物客人，確保他們在美容過程中感到愉快且放鬆。「愛犬美容宮殿」的寵物美容師團隊，以其優質的服務、專業的技能與對寵物的愛護，獲得了眾多客人的高度讚賞和信任。我們期待著給您的寵物提供最好的服務，並與您一起讓他們的生活更加美好。"
	];
	var serviers = [
		"洗澡小美容服務項目：",
		"剪指甲／剃腳底毛／剃肛門毛／剃肚子毛／清耳朵／擠肛門腺",
		"剃毛大美容服務項目：",
		"同洗澡小美容項目 + 全身剃毛或造型修剪",
		"※ 全身打結不剃毛恕無法提供服務，拆結過程易導致皮膚發炎",
		"※ 全身嚴重跳蚤壁蝨／嚴重皮膚病恕無法提供服務，請先尋求獸醫治療",
		"※ 全台皆服務"
	]
	

	$('#carouselExample').on('slid.bs.carousel', function (event) {
		var index = $('.carousel-inner .carousel-item.active').index();
		$('.noo-sh-title-top').text(title[index]);
		$('.noo-sh-content').text(descriptions[index]);
		
		$('.noo-sh-servies').empty();

		if (index === 2) {
			$('.noo-sh-content').text(descriptions[2]).empty();
			$.each(serviers, function(index, value){
				$('.noo-sh-servies').append($('<li>').text(value));
			});
		}
	});

	  // Bootstrap Star Rating
	  $('.kv-ltr-theme-fas-star').rating({
		hoverOnClear: false,
		theme: 'krajee-fas',
		containerClass: 'is-star',
		disabled: true
	  });
	
	  // Slick Slider
	  $(".slider-nav").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		focusOnSelect: true,
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false
			}
		  },
      {
        breakpoint: 960, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 2,
        dots: false
			}
		  },
      {
        breakpoint: 540, // 將斷點改為540px
        settings: {
          slidesToShow: 1, // 在540px的寬度下顯示2張輪播
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
        dots: false
			}
		  }
		]
	  });
});
// 結束預約服務介紹

//開始預約服務行事曆
const pickDate = document.querySelector("#pickDate");
const countCat = document.querySelector("#countCat");
const bookingForm = document.querySelector(".bookingForm");
let dt = new Date();
let dd = dt.getDate()

const booking = {
  "2023-07-01": ["上午9點", "下午2點", "下午5點"],
  "2023-07-02": ["上午10點", "下午3點", "下午6點"],
  "2023-07-03": ["上午11點", "下午4點", "下午7點"]
};

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: true
});

function updateDateDisplay(dt) {
  const monthDisplay = document.querySelector(".date h1");
  const dayDisplay = document.querySelector(".date p");
  const months = [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ];

  let chineseDate = `${dt.getFullYear()}年${dt.getMonth() + 1}月${dd}日`;
  monthDisplay.innerHTML = months[date.getMonth()];
  dayDisplay.innerHTML = chineseDate; 
}



function renderCalendar(date, monthDays) {
  date.setDate(1);
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();
  const nextDays = 7 - lastDayIndex - 1;

  updateDateDisplay(date);

  let days = "";
  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date"></div>`;
  }
  for (let i = 1; i <= lastDay; i++) {
    let dayNumber = i <= 9 ? `0${i}` : i; // 將日期格式化，若小於等於 9，前面補上 0
    let timeSlots = booking[`2023-07-${dayNumber}`];
    if (i === new Date().getDate()) {
      days += `<div class="today">
      ${i}
      <p>${timeSlots && timeSlots.length > 0 ? "可預約" : "已約滿"}
      </p></div>`;
    } else {
      days += `<div >${i}<p>${
        timeSlots && timeSlots.length > 0 ? "可預約" : "已約滿"
      }</p></div>`;
    }
  }

  monthDays.innerHTML = days;

  addClickListenerToDays(date, monthDays);
}

function addClickListenerToDays(date, monthDays) {
  const allDays = monthDays.querySelectorAll("div");
  allDays.forEach((day) => {
    day.addEventListener("click", (event) => {
      const clickedYear = date.getFullYear();
      const clickedMonth = date.getMonth() + 1;
      const clickedText = event.currentTarget.textContent.trim();
      if (clickedText.includes("已約滿")) {
        event.currentTarget.style.pointerEvents = "none";
        return;
      }
      const startIndex = 0;
      let clickedDay;
      const endIndex =
        clickedText.indexOf("可預約") !== -1
          ? clickedText.indexOf("可預約")
          : clickedText.indexOf("已約滿");

      if (startIndex !== -1 && endIndex !== -1) {
        clickedDay = clickedText
          .substr(startIndex, endIndex - startIndex)
          .trim();
        console.log(clickedDay);
      } else {
        console.log("No valid date found in the clicked text.");
      }
      const formattedDay = `${clickedDay}`.padStart(2, "0");
      const formattedMonth = `${clickedMonth}`.padStart(2, "0");

      const previousSelectedDay = document.querySelector(".selected-day");
      if (previousSelectedDay) {
        previousSelectedDay.classList.remove("selected-day");
        previousSelectedDay.style.backgroundColor = "";
      }
      if (event.target.nodeName === "DIV") {
        event.target.classList.add("selected-day");
        event.target.style.backgroundColor = "#ff2b85";
      } else if (event.target.nodeName === "P") {
        event.target.parentNode.classList.add("selected-day");
        event.target.parentNode.style.backgroundColor = "#ff2b85";
      }

      const timeSlots =
        booking[`${clickedYear}-${formattedMonth}-${formattedDay}`];
      console.log(timeSlots);

      swalWithBootstrapButtons
        .fire({
          title: "請選擇您要預約的時間",
          icon: "warning",
          padding: "3em",
          showCancelButton: true,
          confirmButtonText: "送出",
          cancelButtonText: "取消",
          color: "#716add",
          input: "select",
          inputOptions: timeSlots.reduce((acc, slot) => {
            acc[slot] = slot;
            return acc;
          }, {}),
          inputPlaceholder: "請選擇時段",
          reverseButtons: false
        })
        .then((result) => {
          if (result.isConfirmed) {
            let selectedTime = result.value;
            let selectedDate = `${clickedYear}-${formattedMonth}-${formattedDay} ${selectedTime}`;
            pickDate.value = selectedDate;
            swalWithBootstrapButtons.fire(
              "預約",
              `您選擇的日期是：${clickedYear}/${clickedMonth}/${clickedDay} ${selectedTime}`
            );
          }
        });

      event.stopPropagation();
    });
  });
}

bookingForm.addEventListener("submit", (event) => {
  if (
    countCat.value === null ||
    pickDate.value === null ||
    countCat.value === "" ||
    pickDate.value === ""
  ) {
    event.preventDefault();
    Swal.fire({
      icon: "error",
      title: "錯誤",
      text: "您有地方沒有填寫"
    });
  }else{
     Swal.fire({
    icon: "success",
    title: "成功",
    text: "請到購物車裡面進行結帳喔!"
  }); 
  }
});

const formcontrol = document.querySelector(".form-control");
const date = new Date();
const monthDays = document.querySelector(".days");
renderCalendar(date, monthDays);

/* ..............................................
//結束預約服務行事曆
   ................................................. */

/* ..............................................
//開始評論
   ................................................. */
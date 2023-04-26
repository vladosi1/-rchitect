console.log("Vlad HI!");

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

// var swiper = new Swiper(".swiper-container", {
// 	slidesPerView: 1,
// 	spaceBetween: 20,
// 	loop: true,
// 	navigation: {
// 	  nextEl: ".swiper-button-next",
// 	  prevEl: ".swiper-button-prev",
// 	},
// 	breakpoints: {
// 	  768: {
// 		 slidesPerView: 2,
// 	  },
// 	  1024: {
// 		 slidesPerView: 3,
// 		 spaceBetween: 30,
// 	  },
// 	},
//  });
var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 20,
	direction: "horizontal",
	loop: true,
	loopAdditionalSlides: 1,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	  320: {
		 slidesPerView: 1,
		 spaceBetween: 5,
	  },
	  480: {
		 slidesPerView: 2,
		 spaceBetween: 20,
	  },
	  800: {
		 slidesPerView: 3,
		 spaceBetween: 25,
	  },
	  1024: {
		 slidesPerView: 3,
		 spaceBetween: 35,
	  },
	},
	on: {
	  reachEnd: function () {
		 document.querySelector(".swiper-button-next").classList.toggle("hidden", true);
	  },
	  reachBeginning: function () {
		 document.querySelector(".swiper-button-next").classList.toggle("hidden", false);
	  },
	},
 });
 




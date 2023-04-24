console.log("Vlad HI!");

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	breakpoints: {
	  768: {
		 slidesPerView: 2,
	  },
	  1024: {
		 slidesPerView: 3,
		 spaceBetween: 30,
	  },
	},
 });
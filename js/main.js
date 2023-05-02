console.log("Vlad HI!");

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

var swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	loop: true,                         
    pagination: {                      
        el: '.swiper-pagination',
        type: 'progressbar', 
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

 const gototopButton = document.getElementById('gototop');

 gototopButton.addEventListener('click', () => {
   window.scrollTo({
	 top: 0,
	 behavior: 'smooth'
   });
 });
 


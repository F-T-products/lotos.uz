const myObj = {
    queue: [],
    init: function () {
        let queue = this.queue;

        for (key in queue) {
            let f = queue[key];
            if (typeof f == 'function') {
                f();
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    myObj.init();
});


myObj.queue = {
	
	siteUpward: function() {
    	
    	window.addEventListener('scroll', function () {
    		var scroll = document.querySelector('.up-button');
    		
    		scroll.classList.toggle('active', window.scrollY>300);
    	});
    	
		const goTopBtn = document.querySelector('.up-button');
		
		goTopBtn.addEventListener('click', goTop);
		
		function goTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		};
    },

	sitePopap: function() {

		const popapOpem = document.querySelector('.popap');
		
		const popapClose = document.querySelector('.popap-close');

		const openForm = document.querySelector('.form-open');

		const bodyOver = document.querySelector('body');

		openForm.addEventListener("click", function() {
			let popapIn = document.querySelector('.popap-in');
			bodyOver.classList.add('overflo');
			popapOpem.classList.add("active");
			popapIn.classList.add("active");
		});

		popapClose.addEventListener("click", function() {
			let popapIn = document.querySelector('.popap-in');
			bodyOver.classList.remove('overflo');
			popapOpem.classList.remove("active");
			popapIn.classList.remove("active");
		});
	},

	servicesList: function() {

		const serviceList = document.querySelectorAll('.services-info__list');

		serviceList.forEach(function (item) {

			let serviceIcon = item.querySelector('.services-info__icon');
			let serviceWrap = item.querySelector('.services-popap__list');
			serviceIcon.addEventListener("click", function() {
				serviceIcon.classList.toggle('open');
				serviceWrap.classList.toggle('open-list');
			})

		});
	},

	employeesSlider: function() {

		new Swiper('.employees-wrap', {

			slidesPerView: 3,

			centeredSlides: true,

			loop: true,

			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				dynamicBullets: true,
			},

			breakpoints: {
				1024: {
					slidesPerView: 3,
				},
				768: {
					centeredSlides: false,
					slidesPerView: 1,
				},
				480: {
					centeredSlides: false,
					slidesPerView: 1,
				},
				320: {
					centeredSlides: false,
					slidesPerView: 1,
				},
			},
		});
	},

	gallerySlider: function() {

		new Swiper('.gallery-wrap__bottom', {

			slidesPerView: 3,

			centeredSlides: true,

			spaceBetween: 24,

			loop: true,

			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},

			pagination: {
				el: ".swiper-pagination",
				clickable: true,
				dynamicBullets: true,
			},

			// breakpoints: {
			// 	480: {
			// 		slidesPerView: 1,
			// 	},
			// },
		});
	},

	siteBurgerPanel: function() {

		const burgerClick = document.querySelector('.header-burger__menu');
		const burgerWrap = document.querySelector('.header-menu');
		const burgerBodyOver = document.querySelector('body');

		burgerClick.addEventListener('click', function() {
			burgerClick.classList.toggle('open');
			burgerWrap.classList.toggle('open');
			burgerBodyOver.classList.toggle('overflo')
		});

		const burgerContactClick = document.querySelector('.header-burger__contact');
		const burgerContactWrap = document.querySelector('.header-info');
		const burgerContactOver = document.querySelector('body');

		burgerContactClick.addEventListener('click', function() {
			burgerContactWrap.classList.toggle('open');
			burgerContactOver.classList.toggle('overflo');
		});

	},
}

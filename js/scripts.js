// Accordion
let accordions;
const accordionWrapper = document.querySelector('.accordion-wrapper');
const contentData = [
	{
		id: 1,
		title: 'Для чего нужен QR-код и как им воспользоваться?',
		content: 'Подключение бесплатно. Платформа «нетмонет» удерживает комиссию 5% от суммы чаевых. Больше никаких скрытых комиссий и минимальных сумм у нас нет.',
	},
	{
		id: 2,
		title: 'Можно ли не оплачивать чаевые, а просто оставить отзыв через «нетмонет»?',
		content: 'Подключение бесплатно. Платформа «нетмонет» удерживает комиссию 5% от суммы чаевых. Больше никаких скрытых комиссий и минимальных сумм у нас нет.',
	},
	{
		id: 3,
		title: 'Куда попадают чаевые, оплаченные через «нетмонет»?',
		content: 'Подключение бесплатно. Платформа «нетмонет» удерживает комиссию 5% от суммы чаевых. Больше никаких скрытых комиссий и минимальных сумм у нас нет.',
	},
	{
		id: 4,
		title: 'Как происходит подключение к платформе «нетмонет»?',
		content: 'Подключение бесплатно. Платформа «нетмонет» удерживает комиссию 5% от суммы чаевых. Больше никаких скрытых комиссий и минимальных сумм у нас нет.',
	},
	{
		id: 5,
		title: 'Какие условия сотрудничества? Сколько стоит подключение?',
		content: 'Подключение бесплатно. Платформа «нетмонет» удерживает комиссию 5% от суммы чаевых. Больше никаких скрытых комиссий и минимальных сумм у нас нет.',
	},
];

const createTemplate = item => {
	return `
		<div class="accordion-item">
			<div class="accordion-item-title">${item.title}</div>
			<div class="accordion-item-content">${item.content}</div>
		</div>
	`
}

const fillHtmlList = () => {
	contentData.forEach(item => {
		accordionWrapper.innerHTML += createTemplate(item);
	});
	accordions = document.querySelectorAll('.accordion-item');
}

fillHtmlList();

if (accordions) {
	for(const item of accordions) {
		item.addEventListener('click', function () {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
			} else {
				for (const elem of accordions) {
					elem.classList.remove('active');
				}
				this.classList.add('active');
			}
		})
	}
}

// Smooth Scroll
const smoothLinks = document.querySelectorAll('a[href$="smooth"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();

		mainNavigation.classList.remove('active');
		showScroll();

        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Swiper
new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 2,
	// spaceBetween: 0,
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 0,
		},

		320: {
			slidesPerSlide: 'auto',
			slidesPerView: 'auto',
			spaceBetween: 15,
		}
	},
});

// Burger
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.burger').addEventListener('click', () => {
	mainNavigation.classList.add('active');
	hideScroll();
});

document.querySelector('.burger-close').addEventListener('click', () => {
	mainNavigation.classList.remove('active');
	showScroll();
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	mainNavigation.classList.remove('active');
	showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px'; 
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
}

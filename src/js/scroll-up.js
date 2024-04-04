const button = document.querySelector('.scroll-up-btn');

const displayButton = () => {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 100) {
			button.style.opacity = "1";
		} else {
			button.style.opacity = "0";
		}
	});
};

const scrollToTop = () => {
	button.addEventListener("click", () => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
	});
};

displayButton();
scrollToTop();
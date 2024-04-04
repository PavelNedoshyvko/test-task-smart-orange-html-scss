document.addEventListener('DOMContentLoaded', () => {
	const navLinks = document.querySelectorAll('.nav-link');

	navLinks.forEach(link => {
		link.addEventListener('click', (event) => {
			navLinks.forEach(link => {
				link.classList.remove('active');
			});
			event.target.classList.add('active');
		});
	});
});
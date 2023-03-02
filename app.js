const sections = document.querySelectorAll('.section');

const options = {
	rootMargin: '0px',
	threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
		} else {
			if (entry.target.classList.contains('active'))
				observer.unobserve(entry.target);
			entry.target.classList.remove('active');
		}
	});
}, options);

sections.forEach((section) => {
	observer.observe(section);
});

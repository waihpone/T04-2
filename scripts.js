// Function to set the active class on the current nav link
function setActiveNavLink() {
	var navLinks = document.querySelectorAll('.nav-link');
	var current = window.location.pathname.split('/').pop();
	if (current === "" || current === "index.html") current = "index.html";
	navLinks.forEach(function(link) {
		var href = link.getAttribute('href');
		// For home page, handle both index.html and empty string
		if ((current === "index.html" && href === "index.html") || (current === href)) {
			link.classList.add('active');
		} else {
			link.classList.remove('active');
		}
	});
}

document.addEventListener('DOMContentLoaded', function() {
	var navLinks = document.querySelectorAll('.nav-link');
	navLinks.forEach(function(link) {
		link.addEventListener('mouseover', function() {
			this.classList.add('hovered');
		});
		link.addEventListener('mouseout', function() {
			this.classList.remove('hovered');
		});
	});

	setActiveNavLink();
});

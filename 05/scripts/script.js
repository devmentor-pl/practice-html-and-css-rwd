
document.getElementById('header__nav-menu').addEventListener('change', function() {
	if (this.checked) {
		document.getElementById('header__nav-hamburger').style.display = 'none';
		document.getElementById('header__nav-x').style.display = 'block';
	} else {
		document.getElementById('header__nav-hamburger').style.display = 'block';
		document.getElementById('header__nav-x').style.display = 'none';
	}
});

//reportWindowSize

function reportWindowSize() {
	console.log(window.innerWidth, window.innerHeight)
	if (window.innerWidth > 599) {
		document.getElementById('header__nav-hamburger').style.display = 'none';
		document.getElementById('header__nav-x').style.display = 'none';
	} else {
		document.getElementById('header__nav-menu').checked = false;
		document.getElementById('header__nav-hamburger').style.display = 'block';
	}
};

window.onresize = reportWindowSize;


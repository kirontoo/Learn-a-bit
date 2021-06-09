const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener( 'click', () => {
	// if( navLinks.style.display != 'none' ) {
	// 	navLinks.style.display = 'none';
	// } else {
	// 	navLinks.style.display = 'block';
	// }

	console.log(navLinks.style.display)
	navLinks.style.display = ( navLinks.style.display == 'none' ) ? 'block' : 'none';
});

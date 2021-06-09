const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener( 'click', () => {
	if( navLinks.classList.contains( 'display-none' ) ) {
		navLinks.classList.remove( 'display-none' );
		navLinks.classList.add( 'display-block' );
	} else {
		navLinks.classList.add( 'display-none' );
		navLinks.classList.remove( 'display-block' );
	}
});

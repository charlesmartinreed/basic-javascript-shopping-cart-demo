// show cart

(function() {
	// targeting the cart, adding event listener to cart info button
	const cartInfo = document.querySelector('#cart-info');
	const cart = document.querySelector('#cart');
	cartInfo.addEventListener('click', () => {
		cart.classList.toggle('show-cart');
	})
})();

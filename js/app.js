
// why IIFEs? To prevent namespace issues in the global scope.

// show cart IIFE
(function() {
	// targeting the cart, adding event listener to cart info button
	const cartInfo = document.querySelector('#cart-info');
	const cart = document.querySelector('#cart');
	cartInfo.addEventListener('click', () => {
		cart.classList.toggle('show-cart');
	})
})();

// add items to the cart
(function() {
	// grab the store item icon
	const cartBtn = document.querySelectorAll('.store-item-icon');
	cartBtn.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			// we want to only work with the icon
			if(e.target.parentElement.classList.contains('store-item-icon')){
				//grab the item image
				let fullPath = event.target.parentElement.previousElementSibling.src;
				let pos = fullPath.indexOf('img') + 3;
				let partialPath = fullPath.slice(pos); //slice beginning with img,
				// console.log(partialPath); // returns /cake2.jpeg

				// grab the item name, price
				let cardBody = event.target.parentElement.parentElement.nextElementSibling;
				let name = cardBody.children[0].children[0].textContent;
				let price = cardBody.children[0].children[1].textContent.slice(2);

				//alternatively, you can trim whitespace with .trim method

				// construct item object; item should have image, name and price
				const item = {};
				item.img = `img-cart${partialPath}`
				item.name = name
				item.price = price

				console.log(item);
			}
		})
	})

})();

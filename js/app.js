
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

				const cartItem = document.createElement('div');
				cartItem.classList = 'cart-item d-flex justify-content-between text-capitalize my-3';
				cartItem.innerHTML = `
						<img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">

						<div class="item-text">
							<p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
							<span>$</span>
							<span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
						</div>
						<a href="#" id='cart-item-remove' class="cart-item-remove">
							<i class="fas fa-trash"></i>
						</a>
					</div>
				`;

				// select the cart, insert the item before the total
				const cart = document.querySelector('#cart');
				const total = document.querySelector('.cart-total-container');
				cart.insertBefore(cartItem, total);
				alert('item added to the cart');

				showTotals();
			}
		})
	});

	function showTotals() {
		// array holds the total of the items
		const total = [];

		const items = document.querySelectorAll('.cart-item-price');
		items.forEach((item) => {
			total.push(parseFloat(item.textContent));
		});

		let totalPrice = total.reduce((acc, nextVal) => {
			return acc + nextVal;
		}, 0).toFixed(2);

		console.log(totalPrice);
	}

})();

const cartInfo = document.querySelector('.cart-product');
const rowProduct = document.querySelector('.row-product');
const btnCart = document.querySelector('.container-cart-icon');
const containerCartProducts = document.querySelector('.container-cart-products');
const colors = document.querySelectorAll('.color');
const watchs = document.querySelectorAll('.img-product');
const activo = document.querySelector(".active")
const gradients = document.querySelectorAll('.gradient');
const cartButtons = document.querySelectorAll('.btn-add-cart');
const msj = document.querySelector(".container-notificacion-mobile");




btnCart.addEventListener('click', () => {
	containerCartProducts.classList.toggle('hidden-cart');
});


// Lista de todos los contenedores de productos
const productsList = document.querySelector('.container-items');

// Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar');

const countProducts = document.querySelector('#contador-productos');

const cartEmpty = document.querySelector('.cart-empty');
const cartTotal = document.querySelector('.cart-total');

productsList.addEventListener('click', e => {
	if (e.target.classList.contains('btn-add-cart')) {
		const product = e.target.parentElement;

		const infoProduct = {
			quantity: 1,
			title: product.querySelector('h2').textContent,
			price: product.querySelector('p').textContent,
		};

		const exits = allProducts.some(
			product => product.title === infoProduct.title
		);

		if (exits) {
			const products = allProducts.map(product => {
				if (product.title === infoProduct.title) {
					product.quantity++;
					return product;
				} else {
					return product;
				}
			});
			allProducts = [...products];
		} else {
			allProducts = [...allProducts, infoProduct];
		}

		showHTML();
	}
});

rowProduct.addEventListener('click', e => {
	if (e.target.classList.contains('icon-close')) {
		const product = e.target.parentElement;
		const title = product.querySelector('p').textContent;

		allProducts = allProducts.filter(
			product => product.title !== title
		);

		console.log(allProducts);

		showHTML();
	}
});

// Funcion para mostrar  HTML
const showHTML = () => {
	if (!allProducts.length) {
		cartEmpty.classList.remove('hidden');
		rowProduct.classList.add('hidden');
		cartTotal.classList.add('hidden');
	} else {
		cartEmpty.classList.add('hidden');
		rowProduct.classList.remove('hidden');
		cartTotal.classList.remove('hidden');
	}

	// Limpiar HTML
	rowProduct.innerHTML = '';

	let total = 0;
	let totalOfProducts = 0;

	allProducts.forEach(product => {
		const containerProduct = document.createElement('div');
		containerProduct.classList.add('cart-product');

		containerProduct.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${product.quantity}</span>
                <p class="titulo-producto-carrito">${product.title}</p>
                <span class="precio-producto-carrito">${product.price}</span>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="icon-close"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        `;

		rowProduct.append(containerProduct);

		total =
			total + parseInt(product.quantity * product.price.slice(1));
		totalOfProducts = totalOfProducts + product.quantity;
	});

	valorTotal.innerText = `$${total}`;
	countProducts.innerText = totalOfProducts;
};


colors.forEach((btn)=> {
    btn.addEventListener("click", ()=>{
        mostrarColores(btn);
    })


})

function mostrarColores(btn){
    watchs.forEach((e)=>{


			if(e.classList.contains(btn.id)){
				e.classList.add("show")
			
		   } else{
			   e.classList.remove("show")
			}
	})
}

Push.Permission.has()

cartButtons.forEach((e) => {
	e.addEventListener("click", ()=>{
		Push.create("Se Ha Registrado Un Producto",{
			body: "Muchas Gracias por su compra",
			icon: 'media/logo2.png',
			timeout: 20000,
			onClick: function () {
				window.focus();
				this.close();
			}
		});
	})
})

const displayMsg= () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(msj.style.display = "block");
        }, 1000);
    });
};

async function display() {
    const item = await displayMsg();
}

const closeMsg= () => {
    return new Promise((res, rej) => {
        setTimeout(()=> {
            res(msj.style.display = "none");
        }, 3000);
    });
};

async function close() {
    const item = await closeMsg();
}


if(window.innerWidth < 1024){
	cartButtons.forEach((e)=>{
		e.addEventListener("click",display)
		e.addEventListener("click",close)
	})

}







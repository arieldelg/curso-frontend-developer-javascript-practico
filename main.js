const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuNavBar = document.querySelector('.menu');
const menuHamburguesa = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart');
const cardsContainers = document.querySelector('.cards-container');


const productList = []

/* Creacion de Una Classe para usarlo con la iteracion de forEach y mejor control del codigo
class Productos {
    constructor(name, price, image) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}

const bike = new Productos ('Bike', 120, "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
const pantalla = new Productos ('Pantalla', 220, "https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
const computadora = new Productos ('Computadora', 500, "https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

productList.push(bike, pantalla, computadora);
*/

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

productList.push({
    name: 'Computadora',
    price: 500,
    image: 'https://images.pexels.com/photos/2399840/pexels-photo-2399840.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
})

const iniciar = () => {
    menuEmail.addEventListener('click', showOrHide);
    menuNavBar.addEventListener('click', menuMobile);
    navbarShoppingCart.addEventListener('click', shoppingList);
    divCardsContainers(productList)
}

const shoppingList = () => {
    const menuMobileClosed = menuHamburguesa.classList.contains('inactive');
    const desktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!menuMobileClosed) {
        menuHamburguesa.classList.add('inactive')
    } else if (!desktopMenuClosed) {
        desktopMenu.classList.add('inactive')
    }
        aside.classList.toggle('inactive')    
}

const menuMobile = () => { 
    const asideClosed = aside.classList.contains('inactive'); 
    if(!asideClosed) {
        aside.classList.add('inactive')
    }
    menuHamburguesa.classList.toggle('inactive');
}

const showOrHide = () => {
    const asideClosed = aside.classList.contains('inactive');
    if(!asideClosed) {
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive');

}

//Iteracion con un for..of
const divCardsContainers = (arr) => {
    for (arr of productList) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const imageProduct = document.createElement('img');
        imageProduct.setAttribute('src', arr.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const divParent = document.createElement('div');
        const priceProduct = document.createElement('p')
        priceProduct.innerHTML = `$${arr.price}`;
        const nameProduct = document.createElement('p');
        nameProduct.innerHTML = arr.name;
    
        const figure = document.createElement('figure');
        const imgCart = document.createElement('img');
        imgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        figure.append(imgCart);
    
        divParent.append(priceProduct, nameProduct);
        
        productInfo.append(divParent, figure);
       
        productCard.append(imageProduct, productInfo);
        
        cardsContainers.append(productCard);
    
    }
}

/* Iteracion con un forEach
const divCardsContainers = (arr) => {
    arr.forEach((Productos) => {
        cards = `<div class="product-card">
        <img src=${Productos.image} alt="">
        <div class="product-info">
          <div>
            <p>$${Productos.price}</p>
            <p>${Productos.name}</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
      </div>`

      cardsContainers.innerHTML += cards
    })
}
*/

// son 9 cards-containers
window.addEventListener('load', iniciar);

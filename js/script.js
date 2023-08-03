/*================ Navbar section ===================*/


/*================ Slider ===================*/ 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0:{
            slidesPerView: 1,
            spaceBetween: 20,
        },        
        640:{
            slidesPerView: 2,
            spaceBetween: 20,
        },
        824:{
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024:{
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1324:{
            slidesPerView: 5,
            spaceBetween: 30,
        },
    },
  });

  const products = [
    {
        id: 0,
        image: 'images/c_formal_gray_shirt.png',
        title: 'shirt',
        price: 29.99
    },
    {
        id: 1,
        image: 'images/c_pant_girl.png',
        title: 'pant',
        price: 29.99
    },
    {
        id: 2,
        image: 'images/c_polo-shirt.png',
        title: 'shirt',
        price: 29.99
    },
    {
        id: 3,
        image: 'images/c_shirt-girl.png',
        title: 'shirt',
        price: 29.99
    },
];

// Get unique product titles to use for search filtering
const categories = [...new Set(products.map(item => item.title))];

document.getElementById('searchbar').addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = products.filter((item) => {
        return item.title.toLowerCase().includes(searchData);
    });
    displayItem(filterData);
});

const displayItem = (items) => {
    document.getElementById('products').innerHTML = items.map((item) => {
        var { id, image, title, price } = item;
        return (
            `<div class='box'>
                <img class='images' src=${image}></img>
                <h5>${title}</h5>
                <span>${price}.00</span>
                <button onclick="addToCart(${id})">Add to Cart</button>
            </div>`
        );
    }).join('');
};

// Initially display all products
displayItem(products);

const cartItems = [];

// Function to add items to the cart
const addToCart = (productId) => {
    const selectedProduct = products.find(item => item.id === productId);
    if (selectedProduct) {
        cartItems.push(selectedProduct);
        displayCart();
    }
};

// Function to display cart items
const displayCart = () => {
    document.getElementById('cart').innerHTML = cartItems.map((item) => {
        var { id, image, title, price } = item;
        return (
            `<div class='box'>
                <img class='images' src=${image}></img>
                <h5>${title}</h5>
                <span>${price}.00</span>
            </div>`
        );
    }).join('');
};

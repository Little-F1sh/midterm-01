const showapi  = () =>{
    
    const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.append("apiKey", "<REQUIRED>");

const options = {
  method: 'POST',
  url: 'https://bestbuyraygorodskijv1.p.rapidapi.com/getAllCategories',
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'BestBuyraygorodskijV1.p.rapidapi.com'
  },
  data: encodedParams
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
}

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

let cart = document.querySelectorAll('.add-cart');

let products = [
    {
        name:'Black T-shirt',
        tag:'blacktshirt',
        price:15,
        inCart:0
    },
    {
        name:'Black Hoddie',
        tag:'blackhoddie',
        price:15,
        inCart:0
    },
    {
        name:'Black Shirt',
        tag:'blackshirt',
        price:15,
        inCart:0
    },
    {
        name:'Black Pant',
        tag:'blackpant',
        price:15,
        inCart:0
    }
]

for(let i = 0 ; i< cart.length; i++){
    cart[i].addEventListener('click', () => {
        cartNumber(products[i]);
    })
}

function onLoadCartNumber(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumber(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1)
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem("productinCart");
    console.log(JSON.parse(cartItems));

    if(cartItems != null){
        
        cartItems[product.tag].inCart += 1;
    }else{
        product.inCart = 1;   
        cartItems = {
            [product.tag] : product
        }
    }
    localStorage.setItem("productinCart", JSON.stringify(cartItems))
}

onLoadCartNumber();
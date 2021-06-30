
var nameLink = new URLSearchParams(window.location.pathname);
        
// function cart(){
//     var input = document.querySelector('.checkout input#order');
//     var cart = JSON.parse(localStorage.getItem('cart'));
//     var cartlength = cart.length;

//     // if(cartlength){
//     //     input.value = localStorage.getItem('cart');
//     //     // console.log(cartlength);
//     // } 

//     // if(cartlength <= 0){
//     //     input.value = '';
//     // } 

    
// }    

function Item(id, image, itemname, price, quantity, size){
    this.id = id; 
    this.image = image;
    this.itemname = itemname;
    this.price = price;
    this.quantity = quantity;
    this.size = size;
}
        
var storage = {
    AccessLocalStorage: {
        SetLocalStorage: function(para){
            localStorage.setItem("cart", JSON.stringify(para));
        },
        GetLocalStorage: function(){
            return JSON.parse(localStorage.getItem("cart"));
        },
        removeLocalStorage: function(){
            localStorage.removeItem("cart");
        }
    },

   

    addToCart: function(img, name, prx, qua, size){
        let addedItem, itemId, addtoStore, LocStore;
        
        if(this.AccessLocalStorage.GetLocalStorage().length > 0){
            itemId = this.AccessLocalStorage.GetLocalStorage()[this.AccessLocalStorage.GetLocalStorage().length - 1].id + 1;
        } else{
            itemId = 0;
        }
        
        addedItem = new Item(itemId, img, name, prx, qua, size);
        LocStore = this.AccessLocalStorage.GetLocalStorage();
        LocStore.push(addedItem);
        this.AccessLocalStorage.SetLocalStorage(LocStore);
        
        return true;
    }

};

if(storage.AccessLocalStorage.GetLocalStorage() === null){
    storage.AccessLocalStorage.SetLocalStorage([]);
}

var totalItems = Array.from(document.querySelectorAll(".item-container"));


var view = {
    menuBtns: Array.from(document.querySelectorAll(".bar-container")),
    sidenav: document.querySelector(".sidenav"),
    closeMenubtn: document.querySelector("#closebtn"),


    imgs: document.querySelectorAll(".img-containers"),
    picture: document.querySelector("#pic"),
    itemName: document.querySelector("#itemName"),
    prices: document.querySelector(".prices"),
    detail: document.querySelector(".product-details"),
    backBtn: document.querySelector(".backBtn"),
    sizeContainer: document.querySelector(".size"),
    alreadyincart:document.querySelector(".already-in-cart"),
    paragraphText: document.querySelector(".already-in-cart p"),


    baskets: Array.from(document.querySelectorAll(".cart")),
    cart: document.querySelector(".Shopping-cart"),
    barbacks: document.querySelector("#barbacks"),
    backBtn: document.querySelector(".home"),
    checkout: document.querySelector(".checkout"),


    numberText: function(){
        return parseInt( this.number.textContent);
        
    },
    add: document.querySelector("#add"),
    sub: document.querySelector("#sub"),
    number: document.querySelector("#numbers"),
    totalItems:document.querySelectorAll(".item-container"),
    digit: document.querySelector(".digit"),
   
    
    addLocalCart:document.querySelector(".add"),
    item :document.querySelector(".item"),
    
    products: [],

    updateCart: function(locs){
        let cart;
        view.item.innerHTML = "";
        
        for(var i=0;i<locs.length;i++){
            cart = locs[i];
            let itemCart = `
            <div class="item-container d-flex justify-content-between align-items-center" >
                <div class="imgContainer" id=" ${ cart.id } " >
                    <img src=" ${ cart.image } " alt=""  >
                </div>
                <div class="PriceTags" >
                    <span class="spans" >${ cart.itemname }</span>
                    <span class="spans 1">${ cart.price }</span>
                    <span class="spans 1">Size: ${ cart.size }</span>
                    <div class="quantity-container" >
                        <div class="Quantity" id=" ${ cart.id } ">
                            <a href="#" id="sub" class="subbtns" ><i class="fas fa-minus"></i></a>
                            <a href="#" id="add" class="addbtns"><i class="fas fa-plus" ></i></a>
                            <div id="numbers" > ${ parseInt(cart.quantity) } </div>
                        </div>
                    </div>
                    <div class="TotalCost">
                        Item Total: PHP 
                        <span> ${ (cart.price.slice(3) * cart.quantity).toFixed(2) } </span>
                    </div>
                </div>
                <div class="close-container">
                    <a href="#" id="${ cart.id }"  class="closed" >delete</a>
                </div>
            </div>`;
            view.item.insertAdjacentHTML("afterbegin", itemCart);
        }
    }


}
 
        
    

        
 
var controller = function(){



    function updateNumCart(){
        // let digits = Array.from(document.querySelectorAll(".digit")),   
        //     totalNumItems = document.querySelectorAll(".item-container");

        //     digits.forEach(function(digit){
        //         digit.textContent = Array.from(totalNumItems).length;
        // });

        if(Array.from(totalNumItems).length === 0){
            
            var emptycart = document.querySelector(".empty-cart"),
                cartRow = document.querySelector(".cart-row-container");
                
                
                emptycart.style.display = "block";
             
           
        } else {
            var emptycart = document.querySelector(".empty-cart"),
            cartRow = document.querySelector(".cart-row-container");
            emptycart.style.display = "none";
       
        }
     
     
        selectQuantity();

    }

    function selectQuantity(){
        
        var addbtns = document.querySelectorAll(".Shopping-cart .addbtns");
        var subbtns = document.querySelectorAll(".Shopping-cart .subbtns");

        Array.from(addbtns).forEach(function(btn){

            btn.addEventListener("click", function(e){
            e.preventDefault();
        
            let value = this.parentElement.parentElement.previousElementSibling.previousElementSibling;
            let numberText = this.nextElementSibling;
            // let cash = parseFloat(value.textContent.substring(1,6));
            let cash = parseInt(value.textContent.slice(3));
    
    
            let span = this.parentElement.parentElement.nextElementSibling.lastElementChild;
            
            let plus;
    
            var shopcart = storage.AccessLocalStorage.GetLocalStorage();
    
            var product = shopcart.find(item => item.id == this.parentElement.id );
    
    
            if(!(parseInt(numberText.textContent) >= 12)){
            plus =  parseInt(numberText.textContent) + 1;
            numberText.textContent = plus;
    
            product.quantity = parseInt(numberText.textContent);
            let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
    
            span.innerText = (cash * plus).toFixed(2);
    
    
            } 
    
            storage.AccessLocalStorage.SetLocalStorage(shopcart);
            cartSummary();
            });
        });
    
        Array.from(subbtns).forEach(function(btn){
    
            btn.addEventListener("click", function(e){
                e.preventDefault();
    
                let value = this.parentElement.parentElement.previousElementSibling.previousElementSibling;
                let numberText = this.nextElementSibling.nextElementSibling;
                let numberTextContent = parseInt(this.nextElementSibling.nextElementSibling.textContent);
                let cash = parseInt(value.textContent.slice(3));
    
                let span = this.parentElement.parentElement.nextElementSibling.lastElementChild;
    
    
                var shopcart = storage.AccessLocalStorage.GetLocalStorage();
    
                var product = shopcart.find(item => item.id == this.parentElement.id );
    
    
                if(!(numberTextContent <= 1)){
                    let minus =  parseInt(numberText.textContent) - 1;
                    numberText.textContent = minus;
    
                    product.quantity = parseInt(numberText.textContent);
    
                    let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
                    
    
                    span.innerText = (parseFloat(span.textContent) - cash).toFixed(2);
    
                } 
    
                storage.AccessLocalStorage.SetLocalStorage(shopcart);
    
                cartSummary();
            });
    
        });

       
       
    
    }

    selectQuantity();

    view.item.addEventListener("click", function(e){
        e.preventDefault();
           var elname = e.target, elid, cart = storage.AccessLocalStorage.GetLocalStorage();
          
       if(elname.className === "closed"){
           
           elid = elname.getAttribute("id");
           var position;
                
            cart = cart.filter((item) => item.id != elid );

    
           storage.AccessLocalStorage.SetLocalStorage(cart);
           view.updateCart(storage.AccessLocalStorage.GetLocalStorage());
           updateNumCart();
          

        }
        cartSummary();

   });


    view.menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", function(e){
            e.preventDefault();
            view.sidenav.classList.add("show");
        });
    });
    
    
    view.closeMenubtn.addEventListener("click", function(e){
        e.preventDefault();
        view.sidenav.classList.remove("show");
    });

 


    view.add.addEventListener("click", function(e){
        e.preventDefault();
        let value = view.numberText();
        if(!(value >= 12)){
            let plus = value + 1;
            view.number.textContent = plus;
        } else{
            value = 0;
            plus = value + 1;
            view.number.textContent = plus;
        }
        
    });
    
    view.sub.addEventListener("click", function(e){
        e.preventDefault();
        let value = view.numberText();
        if(!(value <= 1)){
            let minus = value - 1;
            view.number.textContent = minus;
        } else {
            value = 13;
            minus = value - 1;
            view.number.textContent = minus;
        }
    });

    view.baskets.forEach(function(basket){
        basket.addEventListener("click", function(e){
            e.preventDefault();
            view.cart.classList.add("showcart");
        });

    });
    
    
    view.barbacks.addEventListener("click", function(e){
        e.preventDefault();
        view.cart.classList.remove("showcart");
    });


    var products;

    window.onload = function(){
        products = JSON.parse(document.querySelector('.data').dataset.products);
        console.log(products);

        
    }
    

    
    

    var storedItems;
    storedItems = storage.AccessLocalStorage.GetLocalStorage();
    view.updateCart(storedItems);
    view.addLocalCart.addEventListener("click", function(e){
        // e.preventDefault();
        
        var name = view.itemName.textContent;
        var price = view.prices.textContent;
        var Quantitys = parseInt(view.number.textContent);
        var picdetails = view.picture.src;
        var size = document.querySelector('.size .color').textContent;


        
        var itemInLocalStorage = storage.AccessLocalStorage.GetLocalStorage();

        if(itemInLocalStorage.length === 0){

            var checkbooleans = storage.addToCart(picdetails, name, price, Quantitys, size);
            updateDom();
            cartSummary();
            
            view.alreadyincart.classList.add("block");
            view.paragraphText.textContent = "Item added to your cart";
            
            view.detail.scrollTo({
               top:0,
               lett:0,
               behavior: "smooth"
            });
            
            setTimeout(() => {
               view.alreadyincart.classList.remove("block");
            }, 3000);
            

        } 

        if(itemInLocalStorage.length > 0){
            function putToCart(){
                for(var i = 0; i<storage.AccessLocalStorage.GetLocalStorage().length; i++){
                    if(name === storage.AccessLocalStorage.GetLocalStorage()[i].itemname){
                        return true;
                    }      
                }
                return false;
            }

            var checkputtocart = putToCart();

            if(checkputtocart){
                // alert("already in cart");
                view.alreadyincart.classList.add("block");
                view.paragraphText.textContent = "Item is already in cart";
                window.scrollTo({
                  top:0,
                  lett:0,
                  behavior: "smooth"
                });
                setTimeout(() => {
                    view.alreadyincart.classList.remove("block");
                }, 3000);
                
            } else {
                var checkbooleans = storage.addToCart(picdetails, name, price, Quantitys, size);
                
                updateDom();
                cartSummary();
                
                view.alreadyincart.classList.add("block");
                view.paragraphText.textContent = "Item added to your cart";
                
                window.scrollTo({
                   top:0,
                   lett:0,
                   behavior: "smooth"
                });
                
                setTimeout(() => {
                   view.alreadyincart.classList.remove("block");
                }, 3000);
                
            }
    
        }
            
        
        function updateDom(){
            if(checkbooleans){
                view.updateCart(storage.AccessLocalStorage.GetLocalStorage());
                
            }
            updateNumCart();
            cartSummary();
      
            
        }

        this.href = `http://127.0.0.1:8000/add-to-cart?id=${view.picture.className}&Qty=${Quantitys}&size=${size}`;
        // http://127.0.0.1:8000/add-to-cart?id=1
        console.log(this.href);
        
        
                
    });

   

    var addbtns = document.querySelectorAll(".Shopping-cart .addbtns");
    var subbtns = document.querySelectorAll(".Shopping-cart .subbtns");


    Array.from(addbtns).forEach(function(btn){

        btn.addEventListener("click", function(e){
        e.preventDefault();
    
        let value = this.parentElement.parentElement.previousElementSibling.previousElementSibling;
        let numberText = this.nextElementSibling;
        // let cash = parseFloat(value.textContent.substring(1,6));
        let cash = parseInt(value.textContent.slice(3));


        let span = this.parentElement.parentElement.nextElementSibling.lastElementChild;
        
        let plus;

        var shopcart = storage.AccessLocalStorage.GetLocalStorage();

        var product = shopcart.find(item => item.id == this.parentElement.id );


        if(!(parseInt(numberText.textContent) >= 12)){
        plus =  parseInt(numberText.textContent) + 1;
        numberText.textContent = plus;

        product.quantity = parseInt(numberText.textContent);
        let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);

        span.innerText = (cash * plus).toFixed(2);


        } 

        storage.AccessLocalStorage.SetLocalStorage(shopcart);
        cartSummary();
        });
    });

    Array.from(subbtns).forEach(function(btn){

        btn.addEventListener("click", function(e){
            e.preventDefault();

            let value = this.parentElement.parentElement.previousElementSibling.previousElementSibling;
            let numberText = this.nextElementSibling.nextElementSibling;
            let numberTextContent = parseInt(this.nextElementSibling.nextElementSibling.textContent);
            let cash = parseInt(value.textContent.slice(3));

            let span = this.parentElement.parentElement.nextElementSibling.lastElementChild;


            var shopcart = storage.AccessLocalStorage.GetLocalStorage();

            var product = shopcart.find(item => item.id == this.parentElement.id );


            if(!(numberTextContent <= 1)){
                let minus =  parseInt(numberText.textContent) - 1;
                numberText.textContent = minus;

                product.quantity = parseInt(numberText.textContent);

                let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
                

                span.innerText = (parseFloat(span.textContent) - cash).toFixed(2);

            } 

            storage.AccessLocalStorage.SetLocalStorage(shopcart);

            cartSummary();
        });

    });

    cartSummary();
}

window.onload = controller;



var SizeBtns = document.querySelectorAll(".size ul li");

 
Array.from(SizeBtns).forEach(function(btn){   
    btn.addEventListener("click", function(e){
       Array.from(SizeBtns).forEach(function(btn){
             btn.classList.remove("color");
       });
       
        e.target.classList.add("color");
    });
});

function cartSummary(){
    var cart = storage.AccessLocalStorage.GetLocalStorage();
    var subtotal, total;
    subtotal = document.querySelector('.cart-level-summary .subTotal').lastElementChild;
    total = document.querySelector('.cart-level-summary .total').lastElementChild;
    cart = cart.map((item) => {
        return item.price.slice(3) * item.quantity;
    });

    var cartTotal = 0;
    cart.forEach((item) => {
        
        cartTotal += item;
      
    });

    // console.log(cart);
    // console.log(cartTotal);



    subtotal.textContent = 'PHP ' + cartTotal;
    total.textContent = 'PHP ' + parseInt(cartTotal + 50);
    

    var checkoutInfo = {
        subtotal: parseInt(subtotal.textContent),
        total: parseInt(total.textContent)
    }

    var proceedCheckout = document.querySelector('.checkout a#checkout');
    var proceedlogin = document.querySelector('.checkout a#login');
    if(proceedlogin) {
        proceedlogin.href = "http://127.0.0.1:8000/account/login?subtotal=" + cartTotal + "&total=" + parseInt(cartTotal + 50);
        // console.log(proceedlogin);
    }
    if(proceedCheckout) {
        proceedCheckout.href = "http://127.0.0.1:8000/cart/checkout?subtotal=" + cartTotal + "&total=" + parseInt(cartTotal + 50);
        // console.log(proceedCheckout);
    }
 
   
}

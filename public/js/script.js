


var localStorages = (function(){
    let AccessLocalStorage = {
        SetLocalStorage: function(para){
            localStorage.setItem("cart", JSON.stringify(para));
        },
        GetLocalStorage: function(){
            return JSON.parse(localStorage.getItem("cart"));
        },
        removeLocalStorage: function(){
            localStorage.removeItem("cart");
        }
    };
        
   
    if(AccessLocalStorage.GetLocalStorage() === null){
            AccessLocalStorage.SetLocalStorage([]);
    }
        
    return {
  
        store:AccessLocalStorage
    
    };
})();






var DomElements = (function(){

    let eachElement = {
        wrapper: document.querySelector(".wrapper"),
        
        productRow:document.querySelector(".products-row"),

        menuBtn: document.querySelector(".bar-container"),
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
        totalNumItems:document.querySelectorAll(".item-container"),
        digit: document.querySelector(".digit"),
       
        
        addLocalCart:document.querySelector(".add"),
        item :document.querySelector(".item")
    

    };
    return {
        hereEl: eachElement,
        
        updateCart: function(locs){
        let cart;
        eachElement.item.innerHTML = "";
        
        for(var i=0;i<locs.length;i++){
        cart = locs[i];
        let itemCart = '<div class="item-container d-flex justify-content-between align-items-center" ><div class="imgContainer" id="' + cart.id + '" ><img src="' + cart.image + '" alt=""  ></div><div class="PriceTags" ><span class="spans" >' + cart.itemname + '</span><span class="spans 1">' + cart.price + '</span><div class="quantity-container" ><div class="Quantity" id="' + cart.id+ '"><a href="#" id="sub" class="subbtns" ><i class="fas fa-minus"></i></a><a href="#" id="add" class="addbtns"><i class="fas fa-plus" ></i></a><div id="numbers" >' + cart.quantity + '</div></div></div><div class="TotalCost">Item Total: PHP <span>'+ (cart.price.slice(3) * cart.quantity).toFixed(2) +'</span></div></div><div class="close-container"><a href="#" id="' + cart.id + '"  class="closed" >delete</a></div></div>';
        eachElement.item.insertAdjacentHTML("afterbegin", itemCart);
        }

        }, 
        numofitemsIncart:function(){
            eachElement.digit.textContent = Array.from(eachElement.totalNumItems).length;
        }
    };
})();





var controller = (function(Dom, storage){
   
    if(document.querySelector('#opencart')){
        var opencart = document.querySelector('#opencart');
        Dom.hereEl.cart.classList.add("showcart");
        Dom.hereEl.wrapper.style.display = "none";
        console.log('yes sir');
    }
    function cartSummary(){
        var cart = storage.store.GetLocalStorage();
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
    
    
        subtotal.textContent = 'PHP ' + cartTotal;
        total.textContent = 'PHP ' + parseInt(cartTotal + 50);
        
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
 

     Dom.hereEl.item.addEventListener("click", function(e){
         e.preventDefault();
            var elname = e.target, elid, cart = storage.store.GetLocalStorage();
           
        if(elname.className === "closed"){
            
            elid = elname.getAttribute("id");
            var position;
                 
        
            for(var i = 0; i < cart.length; i++){
                if(elid == cart[i].id){
                    position = i;

                }
            }

            cart.splice(position, 1);
            storage.store.SetLocalStorage(cart);
            Dom.updateCart(storage.store.GetLocalStorage());
            updateNumCart();
            cartSummary();

        }

    });
    
   

    Dom.hereEl.menuBtn.addEventListener("click", function(e){
        e.preventDefault();
        Dom.hereEl.sidenav.classList.add("show");
    });
  
    
    
    Dom.hereEl.closeMenubtn.addEventListener("click", function(e){
        e.preventDefault();
        Dom.hereEl.sidenav.classList.remove("show");
    });

 
    


    Dom.hereEl.baskets.forEach(function(basket){
        basket.addEventListener("click", function(e){
            e.preventDefault();
            Dom.hereEl.cart.classList.add("showcart");
            Dom.hereEl.wrapper.style.display = "none";
        });

    });
    
    
    Dom.hereEl.barbacks.addEventListener("click", function(e){
        e.preventDefault();
        Dom.hereEl.cart.classList.remove("showcart");
        Dom.hereEl.wrapper.style.display = "block";
    });

    // for display number of items in the cart js disables to let server handle it
    // Dom.numofitemsIncart();

    var storedItems;

    storedItems = storage.store.GetLocalStorage();
    Dom.updateCart(storedItems);

    
    


    function updateNumCart(){
        // for display number of items in the cart js disables to let server handle it
        // let digits = Array.from(document.querySelectorAll(".digit")),   
        //     totalNumItems = document.querySelectorAll(".item-container");

        //     digits.forEach(function(digit){
        //         digit.textContent = Array.from(totalNumItems).length;
        // });

        // if(Array.from(totalNumItems).length === 0){
            
        //     var emptycart = document.querySelector(".empty-cart"),
        //         cartRow = document.querySelector(".cart-row-container");
                
                
        //         emptycart.style.display = "block";
              
           
        // } else {
        //     var emptycart = document.querySelector(".empty-cart"),
        //     cartRow = document.querySelector(".cart-row-container");
        //     emptycart.style.display = "none";
         
        // }
        
        addAndSub();

    }
    
    
    function addAndSub(){
         var addbtns = document.querySelectorAll(".Shopping-cart .addbtns");
         var subbtns = document.querySelectorAll(".Shopping-cart .subbtns");
         
         
         Array.from(addbtns).forEach(function(btn){
         
	         btn.addEventListener("click", function(e){
	         e.preventDefault();
	         
	         
	         
	         let value = this.parentElement.parentElement.previousElementSibling;
	         let numberText = this.nextElementSibling;
	         let cash = parseFloat(value.textContent.slice(3));

             
	         

	         
	         let span = this.parentElement.parentElement.nextElementSibling.lastChild;
	        
	         
	         let plus;
	         
	         var shopcart = storage.store.GetLocalStorage();
	         
	         var product = shopcart.find(item => item.id == this.parentElement.id );


	   
	        
	         if(!(parseInt(numberText.textContent) >= 12)){
	             plus =  parseInt(numberText.textContent) + 1;
	             numberText.textContent = plus;
	             
	             product.quantity = numberText.textContent;
	             let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
	             
	             span.innerText = (cash * plus).toFixed(2);
	             
	             
	         } 
	         
	         storage.store.SetLocalStorage(shopcart);
	         
	         cartSummary();
	         
	         
	       
	         

	         });
         });
     
         
         
         Array.from(subbtns).forEach(function(btn){
         
	         btn.addEventListener("click", function(e){
	         e.preventDefault();
	         
	         
	         
                let value = this.parentElement.parentElement.previousElementSibling;
                let numberText = this.parentElement.lastChild;
                let cash = parseFloat(value.textContent.slice(3));
                
                var shopcart = storage.store.GetLocalStorage();
                
                var product = shopcart.find(item => item.id == this.parentElement.id );
	
	        
                if(!(parseInt(numberText.textContent) <= 1)){
                    let minus =  parseInt(numberText.textContent) - 1;
                    numberText.textContent = minus;
                    
                    product.quantity = numberText.textContent;
                    
                    let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
                    let span = this.parentElement.parentElement.nextElementSibling.lastChild;
                    
                    span.innerText = (parseFloat(span.textContent) - cash).toFixed(2);
                    
      
                
                } 
	         

	         
	         
	             storage.store.SetLocalStorage(shopcart);
	         
	         
	             cartSummary();
	       
	         
	         });
         });
         
         
         
    
    }

    
window.onload = function(){
 
    // localStorage.setItem("hash", document.querySelector('.wrapper h3').id);

    var alphanumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var hash = '';
    var hashesString = JSON.parse(document.querySelector('.wrapper h3').id);
    console.log(hashesString.hashes.length );

    var clienthash = localStorage.getItem("hash");

    for(var i = 0; i < 64; i++){
        var randomChar = Math.floor(Math.random() * alphanumeric.length);
        hash += alphanumeric.substring(randomChar, randomChar+1);
    }

    var matchedhash = hashesString.hashes.find((hash) => {
        return hash == clienthash;
    });

    // console.log(hash);
    if(matchedhash){
        localStorage.setItem("hash", matchedhash);
        console.log(matchedhash);
    }else {
        localStorage.setItem("hash", hash);
    }
    
    

    // for(var i = 0; i < hashesString.hashes.length; i++){
    //     // console.log(hashesString.hashes[i]);
    //     if(hashesString.hashes[i] == clienthash){
    //         localStorage.setItem("hash", hashesString.hashes[i]);
    //         console.log(hashesString.hashes[i]);
    //         console.log('true');
    //         break;
    //     }
    //     // else {
    //     //     localStorage.setItem("hash", hash);
    //     // }
    // }
    
    // localStorage.setItem("hash", '7310d23b7eb3f0b818536d8543445d05d713fa739b94a6521cce1e3dffc1b947');
    
    //  localStorage.setItem("hash", 'Gv6NmtZBCKwPDWtuXoJY2GEp75538gN2QPzC8xKruBuwy0M1qOCLZ8FpMyCL8XyD');
    
    

    
    // if(localStorage.getItem('hash')){

    //     window.location.href = window.location.href + '?id=' + localStorage.getItem('hash');
    // }
    console.log(window.location.href);


    
  
    cartSummary();
    var imgContainers = document.querySelectorAll('.img-containers');
    Array.from(imgContainers).forEach(function(container){
        container.classList.remove('defaultHeight');
    });
   
    var products;
    products = JSON.parse(document.querySelector('.data').dataset.products);
    // data fetched for databasr
    // console.log(products);
    
    var search = document.querySelector(".search");
    var searchField = document.querySelector(".searches");
    var searchInput = document.querySelector(".searches form input");
    var close = document.querySelector('.searches span');
    var ul = document.querySelector('.searches ul');
    var form = document.querySelector(".searches form");

    search.addEventListener("click", function(e){
        e.preventDefault();
        searchField.classList.add("displaysearch");

        searchInput.focus();
    });

    close.addEventListener("click", function(){

        searchField.classList.remove("displaysearch");
        ul.innerHTML = "";
        
    });

    searchInput.addEventListener("keyup", function(e){
        var searchChar = e.target.value.toUpperCase();
        var template = "";
        

    
        var itemArray = [];
        for(var i=0 ; i<products.length;i++){

            if(products[i].product_name.toUpperCase().indexOf(searchChar) !== -1){

                itemArray.push(products[i]);
        
            
            }
        
        
        }

        itemArray.slice(0, 6).forEach(function(product){
            
            if(product.product_name.toUpperCase().indexOf(searchChar) !== -1){
                
                template += `
                    <li class="searchItem" id=${product.id}>${product.product_name}</li>
                `;
            }
        });

        ul.style.display = "block";

        ul.innerHTML = template;
        // console.log(itemArray.slice(0, 6));


        if(e.keyCode === 13){
            ul.innerHTML = "";
            return false;
        }
        
        
    });



    searchInput.addEventListener("keypress", function(e){
        let button = document.querySelector(".searches form button");
        if(e.keyCode === 13){
            button.click();
            searchField.classList.remove("displaysearch");
            ul.innerHTML = "";

            return false;
        }
    
    });

    var searchField = document.querySelector(".searches");
        
    

    ul.addEventListener("click", function(e){
        let searches = document.querySelector(".searches form input");
        let button = document.querySelector(".searches form button");

        if(e.target.className = "searchItem"){
            searches.value = e.target.textContent;
            searches.id = e.target.id;

            button.click();
            searchField.classList.remove("displaysearch");
            ul.innerHTML = "";
    
        }

    });



    var productRow = document.querySelector(".products-row");




    form.addEventListener("submit", function(e){
        e.preventDefault();
        let searches = document.querySelector(".searches form input");
        var template = "";

        if(searches.value !== ""){
            

            let items = products.filter(item => {
        
                return item.product_name.toUpperCase().indexOf(searches.value.toUpperCase()) !== -1;
            });
            
            if(items.length){
            items.forEach(function(product){
                template += `
                    <div class="itemsContainer col-6 col-md-6 col-lg-4">
                        <a href="/product/${product.product_name}">
                        <div class="img-containers" id="albumcovertshirt">
                            <img src=${product.product_image} class="homeimg"  alt="shirt1"    >
                        </div>
                        <div class="PriceTag" >
                            <a href="/product/${product.product_name}">${product.product_name} </a>
                            <span>PHP ${product.product_price}</span>
                        </div>
                        </a>
                    </div>`;
            
            });
            
            productRow.innerHTML = template;
            
            } else {
            template = `
                <div class="col-12 notFound">
                    <p>Sorry item ${searches.value} was not found... </p>
                </div>
            `;
            
            productRow.innerHTML = template;
            
            }
            

            // console.log(items);
    
            
        
        } 

        
        searchField.classList.remove("displaysearch");
        ul.innerHTML = "";

        // console.log(ul);
    

        searches.value = "";


    });



    ul.innerHTML = "";

    updateNumCart();

}
    

        
})(DomElements, localStorages);

var input = document.querySelector('.checkout input#order');
var cart = JSON.parse(localStorage.getItem('cart'));
var cartlength = cart.length;

if(cartlength){
    // input.value = localStorage.getItem('cart')
    // console.log(cartlength);
}











var nameLink = new URLSearchParams(window.location.pathname);
        
function cart(){
    var input = document.querySelector('.checkout input#order');
    var cart = JSON.parse(localStorage.getItem('cart'));
    var cartlength = cart.length;

    if(cartlength){
        input.value = localStorage.getItem('cart');
        // console.log(cartlength);
    } 

    if(cartlength <= 0){
        input.value = '';
    } 

    
}        
        

// var selectedItem = productItem.find(function(item){
//     return item.id == nameLink;
// });

// var productSection = document.querySelector(".product-section");

// var clothType = selectedItem.type;

// // console.log(clothType);


// var selectedItemClothType = productItem.filter(function(item){
//       return item.type === clothType && item.item !== selectedItem.item;
     
// });

// var relatedRow = document.querySelector(".relatedRow");
// var relatedContainer = document.querySelector(".related-container");
// var related = "";


// if(selectedItemClothType.length){
   
//    for(var i=0 ;i<selectedItemClothType.length;i++){
   
//           related += `
//           <div class="col-6 col-md-6 col-lg-4" >
//             <div class="img-containers" id="jumpsuits">
//                 <img src=${selectedItemClothType[i].img} class="homeimg"  alt="shirt1"    >
//             </div>
//             <div class="PriceTag" >
//                 <a href="details.html?name=${selectedItemClothType[i].item}">${selectedItemClothType[i].name}</a>
//                 <span>${selectedItemClothType[i].price}</span>
//             </div>
//           </div>
          
//           `;
          
   
//    }
   
//    relatedRow.innerHTML = related;

// }else{
//     relatedContainer.style.display = "none";
// }


// var template = `
//      <div class="row">
//         <div class="product-img col-12 col-md-6 col-lg-6" >
//             <img id="pic" src=${selectedItem.img} alt="tshirt" >
//         </div>
     
//         <div class="details col-12 col-md-6 col-lg-6" >
//             <a href="#" id="itemName" >${selectedItem.name}</a>
//             <span class="prices" >${selectedItem.price}</span>
//             <p></p>
//             <span class="more" >more details <i class="fas fa-angle-down" ></i></span>
            
//             ${selectedItem.size ? '<div class="size"><ul><li>XS</li><li class="color" >S</li><li>M</li><li>L</li><li>XL</li></ul><a href="#" style="display: block;">size chart</a></div>' : ""}
           
//            <div class="quantity-container">
//            <p>Quantity </p>
//            <div class="Quantity" >
//            <a href="#" id="sub"  ><i class="fas fa-minus"></i></a>
//            <a href="#" id="add" ><i class="fas fa-plus" ></i></a>
//            <div id="numbers"  >1</div>
//            </div>
//            </div>
           
//            <form action="" method="post">
//            <a href="#" class="add"  >add to cart</a>
//            <a href="#" class="add black"  >Buy now</a>
//            </form>
           
        
//         </div>
     
//      </div>
     
   


// `;

// productSection.innerHTML = template;




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
        
    function AddCart(id, image, itemname, price, quantity){
        this.id = id; 
        this.image = image;
        this.itemname = itemname;
        this.price = price;
        this.quantity = quantity;
    }
    
    if(AccessLocalStorage.GetLocalStorage() === null){
            AccessLocalStorage.SetLocalStorage([]);
    }
        
    return {
        addToCart:function(img, name, prx, qua){
        let addedItem, itemId, addtoStore, LocStore;
        
        if(AccessLocalStorage.GetLocalStorage().length > 0){
            itemId = AccessLocalStorage.GetLocalStorage()[AccessLocalStorage.GetLocalStorage().length - 1].id + 1;
        } else{
            itemId = 0;
        }
        
        addedItem = new AddCart(itemId, img, name, prx, qua);
        LocStore = AccessLocalStorage.GetLocalStorage();
        LocStore.push(addedItem);
        AccessLocalStorage.SetLocalStorage(LocStore);
        
        return true;
        },
    
        store:AccessLocalStorage
    
    };
})();

var DomElements = (function(){
    let eachElement = {
    
      //  wrapper: document.querySelector(".wrapper"),
        
      //  productRow:document.querySelector(".products-row"),

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
        totalNumItems:document.querySelectorAll(".item-container"),
        digits: Array.from(document.querySelectorAll(".digit")),
       
        
        addLocalCart:document.querySelector(".add"),
        item :document.querySelector(".item"),
        
        products: []
        

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
            eachElement.digits.forEach(function(digit){
                digit.textContent = Array.from(eachElement.totalNumItems).length;
            });
        }
    };
})();

var controller = (function(Dom, storage){

 
     Dom.hereEl.item.addEventListener("click", function(e){
         e.preventDefault();
            var elname = e.target, elid, cart = storage.store.GetLocalStorage();
           
        if(elname.className === "closed"){
            
            elid = elname.getAttribute("id");
            var position;
                 
        
            for(var i = 0; i < cart.length; i++){
                 
                if(elid == cart[i].id){
                    position = i;
                   // console.log(elid);
                  
                }

            }

            cart.splice(position, 1);
            storage.store.SetLocalStorage(cart);
            Dom.updateCart(storage.store.GetLocalStorage());
            updateNumCart();
            cart();

        }

    });
    
   
    Dom.hereEl.menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", function(e){
            e.preventDefault();
            Dom.hereEl.sidenav.classList.add("show");
        });
    });
    
    
    Dom.hereEl.closeMenubtn.addEventListener("click", function(e){
        e.preventDefault();
        Dom.hereEl.sidenav.classList.remove("show");
    });

    const getData = (resource, callback) => {
        const request = new XMLHttpRequest();
    
        request.addEventListener("readystatechange", function(){
            if(request.readyState === 4 && request.status === 200){
                var data = JSON.parse(request.responseText);
                callback(undefined, data)
            } else if(request.readyState === 4){
                callback("couldn't fetch the data", undefined);
            }
        });
    
        request.open("GET", resource);
        request.send(null);
    }
    
    /*

    Array.from(Dom.hereEl.imgs).forEach(function(img){
        img.addEventListener("click", function(){
    
             let targetID = this.id;
             
             
             var items = Dom.hereEl.products;
             
             for(var i = 0; i < items.length; i++) {
             
	             if(targetID === items[i].item){
		             Dom.hereEl.picture.src = items[i].img;
		             Dom.hereEl.itemName.textContent = items[i].name;
		             Dom.hereEl.prices.textContent = items[i].price;
		             
	             }
             
             }
             
             Dom.hereEl.wrapper.classList.add("opacity");
             Dom.hereEl.detail.classList.add("itemShow");
             
             
             Dom.hereEl.backBtn.addEventListener("click", function(e){
             e.preventDefault();
             Dom.hereEl.detail.classList.remove("itemShow");
             Dom.hereEl.wrapper.classList.remove("opacity");
             
             let value = Dom.hereEl.numberText();
             value = 1;
             Dom.hereEl.number.textContent = value;
             Dom.hereEl.picture.src = "";
             
             });
             
             

             /*
             
             getData("http://127.0.0.1:5500/products.json", (err, data) => {
                if(err){
                    console.log(err);
                } else {
                    var items = data;

                    for(var i = 0; i< items.length; i++) {

                        if(targetID === items[i].item){
                            Dom.hereEl.picture.src = items[i].img;
                            Dom.hereEl.itemName.textContent = items[i].name;
                            Dom.hereEl.prices.textContent = items[i].price;
                            
                        }
                        
                    }
        
                    Dom.hereEl.wrapper.classList.add("opacity");
                    Dom.hereEl.detail.classList.add("itemShow");
                    
                    
                    Dom.hereEl.backBtn.addEventListener("click", function(e){
                        e.preventDefault();
                        Dom.hereEl.detail.classList.remove("itemShow");
                        Dom.hereEl.wrapper.classList.remove("opacity");
                        
                        let value = Dom.hereEl.numberText();
                        value = 1;
                        Dom.hereEl.number.textContent = value;
                        Dom.hereEl.picture.src = "";
                        
                    });

                }
            });
            
            */
           /*
   
        });
    });
*/

    Dom.hereEl.add.addEventListener("click", function(e){
        e.preventDefault();
        let value = Dom.hereEl.numberText();
        if(!(value >= 12)){
            let plus = value + 1;
            Dom.hereEl.number.textContent = plus;
        } else{
            value = 0;
            plus = value + 1;
            Dom.hereEl.number.textContent = plus;
        }
        
    });
    
    Dom.hereEl.sub.addEventListener("click", function(e){
        e.preventDefault();
        let value = Dom.hereEl.numberText();
        if(!(value <= 1)){
            let minus = value - 1;
            Dom.hereEl.number.textContent = minus;
        } else {
            value = 13;
            minus = value - 1;
            Dom.hereEl.number.textContent = minus;
        }
    });

    Dom.hereEl.baskets.forEach(function(basket){
        basket.addEventListener("click", function(e){
            e.preventDefault();
            Dom.hereEl.cart.classList.add("showcart");
        });

    });
    
    
    Dom.hereEl.barbacks.addEventListener("click", function(e){
        e.preventDefault();
        Dom.hereEl.cart.classList.remove("showcart");
    });

    var products;
    window.onload = function(){
        
        products = JSON.parse(document.querySelector('.data').dataset.products);
        console.log(products);
    }
    Dom.numofitemsIncart();

    var storedItems;
    storedItems = storage.store.GetLocalStorage();
    Dom.updateCart(storedItems);
    Dom.hereEl.addLocalCart.addEventListener("click", function(e){
        e.preventDefault();
        
        var name = Dom.hereEl.itemName.textContent;
        var price = Dom.hereEl.prices.textContent;
        var Quantitys = Dom.hereEl.number.textContent;
        var picdetails = Dom.hereEl.picture.src;


        
        var itemInLocalStorage = storage.store.GetLocalStorage();

        if(itemInLocalStorage.length === 0){

            var checkbooleans = storage.addToCart(picdetails, name, price, Quantitys);
            updateDom();
            
            Dom.hereEl.alreadyincart.classList.add("block");
            Dom.hereEl.paragraphText.textContent = "Item added to your cart";
            
            Dom.hereEl.detail.scrollTo({
               top:0,
               lett:0,
               behavior: "smooth"
            });
            
            setTimeout(() => {
               Dom.hereEl.alreadyincart.classList.remove("block");
            }, 3000);
            

        } 

        if(itemInLocalStorage.length > 0){
            function putToCart(){
                for(var i = 0; i<storage.store.GetLocalStorage().length; i++){
                    if(name === storage.store.GetLocalStorage()[i].itemname){
                        return true;
                    }      
                }
                return false;
            }

            var checkputtocart = putToCart();

            if(checkputtocart){
                // alert("already in cart");
                Dom.hereEl.alreadyincart.classList.add("block");
                Dom.hereEl.paragraphText.textContent = "Item is already in cart";
                window.scrollTo({
                  top:0,
                  lett:0,
                  behavior: "smooth"
                });
                setTimeout(() => {
                    Dom.hereEl.alreadyincart.classList.remove("block");
                }, 3000);
                
            } else {
                var checkbooleans = storage.addToCart(picdetails, name, price, Quantitys);
                
                updateDom();
                
                Dom.hereEl.alreadyincart.classList.add("block");
                Dom.hereEl.paragraphText.textContent = "Item added to your cart";
                
                window.scrollTo({
                   top:0,
                   lett:0,
                   behavior: "smooth"
                });
                
                setTimeout(() => {
                   Dom.hereEl.alreadyincart.classList.remove("block");
                }, 3000);
                
            }
    
        }
            
        
        function updateDom(){
            if(checkbooleans){
                Dom.updateCart(storage.store.GetLocalStorage());
                
            }
            updateNumCart();
            addAndSub();
            cart();
        }
        
        
                
    });


    function updateNumCart(){
        let digits = Array.from(document.querySelectorAll(".digit")),   
            totalNumItems = document.querySelectorAll(".item-container");

            digits.forEach(function(digit){
                digit.textContent = Array.from(totalNumItems).length;
        });

        if(Array.from(totalNumItems).length === 0){
            
            var emptycart = document.querySelector(".empty-cart"),
                cartRow = document.querySelector(".cart-row-container");
                
                
                emptycart.style.display = "block";
             
           
        } else {
            var emptycart = document.querySelector(".empty-cart"),
            cartRow = document.querySelector(".cart-row-container");
            emptycart.style.display = "none";
       
        }
        cart();
        addAndSub();
        

    }
    
    
    function addAndSub(){
    var addbtns = document.querySelectorAll(".Shopping-cart .addbtns");
    var subbtns = document.querySelectorAll(".Shopping-cart .subbtns");
    
    
    Array.from(addbtns).forEach(function(btn){
    
    btn.addEventListener("click", function(e){
    e.preventDefault();
    console.log(e.target)
    
    
    
    let value = this.parentElement.parentElement.previousElementSibling;
    let numberText = this.nextElementSibling;
    // let cash = parseFloat(value.textContent.substring(1,6));
    let cash = parseInt(value.textContent.slice(3));
    
    
    
    let span = this.parentElement.parentElement.nextElementSibling.lastChild;
    
    
    let plus;
    
    var shopcart = storage.store.GetLocalStorage();
    
    var product = shopcart.find(item => item.id == this.parentElement.id );
    
    // console.log(product.itemname);
    // console.log(cash);
    
    
    if(!(parseInt(numberText.textContent) >= 12)){
    plus =  parseInt(numberText.textContent) + 1;
    // console.log(plus);
    numberText.textContent = plus;
    
    product.quantity = numberText.textContent;
    let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
    
    // span.innerText = (cash * plus).toFixed(2);
    span.innerText = (cash * plus).toFixed(2);
    
    
    } 
    
    storage.store.SetLocalStorage(shopcart);
    
    
    
    cart();
    
    
    
    });
    });
    
    
    
    Array.from(subbtns).forEach(function(btn){
    
    btn.addEventListener("click", function(e){
    e.preventDefault();
    
    
    
    let value = this.parentElement.parentElement.previousElementSibling;
    let numberText = this.parentElement.lastChild;
    let cash = parseInt(value.textContent.slice(3));
    
    var shopcart = storage.store.GetLocalStorage();
    
    var product = shopcart.find(item => item.id == this.parentElement.id );
    // console.log(product.id);
    // console.log(this.parentElement.id);
    
    if(!(parseInt(numberText.textContent) <= 1)){
    let minus =  parseInt(numberText.textContent) - 1;
    numberText.textContent = minus;
    
    product.quantity = numberText.textContent;
    
    let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
    let span = this.parentElement.parentElement.nextElementSibling.lastChild;
    
    span.innerText = (parseFloat(span.textContent) - cash).toFixed(2);
    
    
    // console.log(parseFloat(span.textContent));
    //  console.log(cash);
    
    } 
    
    // console.log(shopcart[this.parentElement.id].quantity);
    
    
    storage.store.SetLocalStorage(shopcart);
    
    
    
    cart();
    
    });
    });
    

    
    
    }
    
    
    
    
    
    
    
    /*
    
    
    function addAndSub(){
         var addbtns = document.querySelectorAll(".Shopping-cart .addbtns");
         var subbtns = document.querySelectorAll(".Shopping-cart .subbtns");
         
         
         Array.from(addbtns).forEach(function(btn){
         
	         btn.addEventListener("click", function(e){
	         e.preventDefault();
	         
	         
	         
	         let value = this.parentElement.parentElement.previousElementSibling;
	         let numberText = this.nextElementSibling;
	         let cash = parseFloat(value.textContent.substring(1,6));
	         
	         let index = parseInt(this.parentElement.id);
	         let placeInArray;
	         
	         let span = this.parentElement.parentElement.nextElementSibling.lastChild;
	         let name = value.previousElementSibling.textContent;
	         let image = value.parentElement.previousElementSibling.firstChild.src;
	         
	         let editedItem;
	         
	         
	         let plus;
	         
	         let id = parseInt(this.parentElement.parentElement.parentElement.previousElementSibling.id);
	         
	       
	         
	        // console.log(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
	       
	         
	   
	         
	        //  console.log(storage.store.GetLocalStorage()[index - 1].id);
	         
	         
	        
	         if(!(parseInt(numberText.textContent) >= 12)){
	             plus =  parseInt(numberText.textContent) + 1;
	             numberText.textContent = plus;
	             
	             let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
	             
	             span.innerText = (cash * plus).toFixed(2);
	             
	             
	         } 
	         
	         
	        // console.log(span.textContent);
	        // console.log(name);
	        // console.log(image);
	        
	         
	         
	         for(var i = 0; i < storage.store.GetLocalStorage().length ; i++){
		         if(storage.store.GetLocalStorage()[i].id === index){
		             placeInArray = i;
		             editedItem = storage.store.GetLocalStorage()[i];
			         // console.log(editedItem.id);
			         
		         }
	         
	         }
	         
	         
	         editedItem.id = id;
	         editedItem.itemname = name;
	         editedItem.price = parseFloat(span.textContent);
	         editedItem.image = image;
	         editedItem.quantity = plus;
	         
	         
	         /*
	         console.log(id);
	         console.log(editedItem.id);
	         console.log(editedItem.itemname);
	         console.log(name);
	         console.log(parseFloat(span.textContent))
	         console.log(placeInArray);
	         */
	         
	         
	         
	         
	         // console.log(editedItem.itemname);
	         /*
	         console.log(editedItem.itemname);
	         console.log(editedItem.price);
	         console.log(editedItem.quantity);
	         console.log(editedItem.image);
	         console.log(placeInArray);
	         */
	         
	        // console.log(editedItem);
	        
	         
	         
	         
	         // console.log(placeInArray);
	         // console.log(index);
	         // console.log(plus);
	         
	         /*
	            var cartList = storage.store.GetLocalStorage();
	                // cartList.splice(placeInArray, 1, editedItem);
	               // storage.store.SetLocalStorage(cartList);
	           //  console.log(cartList[placeInArray].itemname);
	          
	          
	          
	          
	          /*
	          Dom.updateCart(storage.store.GetLocalStorage());
	          
	          
	          addAndSub();
	         
	         */
	         
	         
	        // console.log(placeInArray);
	         
/*
	         });
         });
         
        //  Dom.updateCart(storage.store.GetLocalStorage());
         // addAndSub();
         
         
         
         Array.from(subbtns).forEach(function(btn){
         
	         btn.addEventListener("click", function(e){
	         e.preventDefault();
	         
	         
	         
	         let value = this.parentElement.parentElement.previousElementSibling;
	         let numberText = this.parentElement.lastChild;
	         let cash = parseFloat(value.textContent.substring(1, 9));
	         
	         
	         if(!(parseInt(numberText.textContent) <= 1)){
		         let minus =  parseInt(numberText.textContent) - 1;
		         numberText.textContent = minus;
		         
		         
		         let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
		         let span = this.parentElement.parentElement.nextElementSibling.lastChild;
		         
		         span.innerText = (parseFloat(span.textContent) - cash).toFixed(2);
		         
		         
		        // console.log(parseFloat(span.textContent));
		       //  console.log(cash);
		       
	         } 
	       
	         
	         });
         });
         
         
         
    
    }
    
    */
    

    
    window.onload = updateNumCart;
    
    
    /*
    var productItem = Dom.hereEl.products;
    
    var template = "";
    
    for(var i=0 ; i<productItem.length;i++){
    template += `
    <div class="itemsContainer col-6 col-md-6 col-lg-4">
    <div class="img-containers" id="albumcovertshirt">
    <img src=${productItem[i].img} class="homeimg"  alt="shirt1"    >
    </div>
    <div class="PriceTag" >
    <a href="details.html?name=${productItem[i].item}">${productItem[i].name} </a>
    <span>${productItem[i].price}</span>
    </div>
    </div>
    
    `;
    }
    
    
    
    
    
    Dom.hereEl.productRow.innerHTML = template;
    
    
    */
    
    
    
    
        
})(DomElements, localStorages);



var SizeBtns = document.querySelectorAll(".size ul li");

/*
       var labels = document.querySelectorAll("label");
   
       Array.from(radioBtns).forEach(function(btn){
           btn.addEventListener("click", function(e){
               Array.from(labels).forEach(function(label){
                       label.classList.remove("color");
               });
               
               e.target.previousElementSibling.classList.add("color");
           
           });
       });
       
  */     
Array.from(SizeBtns).forEach(function(btn){   
    btn.addEventListener("click", function(e){
       Array.from(SizeBtns).forEach(function(btn){
             btn.classList.remove("color");
       });
       
        e.target.classList.add("color");
    });
});



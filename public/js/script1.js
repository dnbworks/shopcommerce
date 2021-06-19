var items = [
   
    {"item":"albumcovertshirt", "img":"albumcovertshirt.jpg","name":"Album Covered Tshirt", "price":"$23.08", "details":"", "size": true, "type":"shirt"},
    {"item":"lilskiggytee","img":"lilskiggytee.jpg","name":"Mans Day out Tshirt", "price":"$21.10","details":"","size": true, "type":"tee"},
    {"item":"lightblue","img":"lightblue.jpg","name":"Light blue girl tee", "price":"$12.40","details":"","size": true, "type":"tee"},
    {"item":"albuminwhite","img":"albuminwhite.png","name":"Album covered in white tshirt", "price":"$7.34","details":"","size": true, "type":"shirt"},
   
    {"item":"nocluetshirt","img":"nocluetshirt.png","name":"No clue jersey", "price":"$11.34","details":{"heading": "Strfc sticker / sampaloc Tanay Rizal Football Club", "subhead": "You can stick on phone, fridge, room"},"size": true, "type":"shirt"},
    
    
   {"item":"outerspace","img":"outerspace.jpg","name":"Outerspace tee", "price":"$7.19","details":"","size": true, "type":"tee"}, 
    {"item":"jumpers","img":"jumpers.jpg","name":"Valentines hoodie", "price":"$12.67","details":"","size": true, "type":"hoodie"}, 
    {"item":"jumpsuits","img":"jumpsuits.jpg","name":"koozy swimsuit", "price":"$16.45","details":"","size": true, "type":"bottom"},
    {"item":"underwear","img":"underwear.jpg","name":"koozy underwear", "price":"$7.56","details":"","size": true, "type":"bottom"}, 
    {"item":"short","img":"short.jpg","name":"gigin short", "price":"$10.34","details":"","size": true, "type":"bottom"},
    {"item":"spacedrop","img":"spacedrop.jpg","name":"space drop pico de pino collab hoodie", "price":"$18.34","details":"","size": true, "type":"hoodie"},
    INSERT INTO `products`(`product_name`, `product_image`, `product_price`, `quantity_in_stock`, `product_description`) VALUES ('No clue jersey','http://127.0.0.1:8000/images/nocluetshirt.png','234','5','4');
  
    {"item":"love-you","img":"love-you.jpg","name":"love you tshirt", "price":"$18.34","details":"","size": true, "type":"tee"},
    {"item":"avamakebelieve1","img":"avamakebelieve1.jpg","name":"avamakebelieve mask", "price":"$8.34","details":"","size": true, "type":"headwear"},
    {"item":"monkey1","img":"monkey1.jpg","name":"Good love deaf people", "price":"$67.34","details":"","size": true,"type":"hoodie"},
    
    {"item":"avamakebelieve2","img":"avamakebelieve2.jpg","name":"avamakebelieve mask", "price":"$8.34","details":"","size": true, "type":"mask"},
    {"item":"junglesjungles1","img":"junglesjungles1.jpg","name":"The devil Triangle Safe Trip cap", "price":"$15.34","details":"","size": true, "type":"headwear"},
    {"item":"junglesjungles2","img":"junglesjungles2.jpg","name":"Sunges Subges Cap", "price":"$15.34","details":"","size": true, "type":"headwear"},
    {"item":"junglesjungles3","img":"junglesjungles3.jpg","name":"Reduce anxiety induce relaxation Give a feeling of calm cap", "price":"$15.34","details":"","size": true, "type":"headwear"},
    {"item":"junglesjungles4","img":"junglesjungles4.jpg","name":"Goodmorning Planet Earth Cap", "price":"$15.34","details":"","size": true, "type":"headwear"},
    {"item":"monkey2","img":"monkey2.jpg","name":"Piggy Monkey Hoodie", "price":"$15.34","details":"","size": true, "type":"hoodie"},
    {"item":"strfc sticker","img":"strfc-sticker.png","name":"strfc sticker", "price":"$1.50","details":"","size": true, "type":"sticker"} , 
    
    {"item":"strfc sticker","img":"sticker.jpg","name":"strfc sticker", "price":"$1.50","details":"","size": true, "type":"sticker"}
    
    
    
];
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
        
        products: [
     
            {"item":"nocluetshirt","img":"images/nocluetshirt.png","name":"No clue jersey", "price":"$11.34","details":{"heading": "Strfc sticker / sampaloc Tanay Rizal Football Club", "subhead": "You can stick on phone, fridge, room"},"size": true, "type":"shirt"},
            {"item":"short","img":"images/short.jpg","name":"vibing short", "price":"$10.34","details":"","size": true, "type":"bottom"},
            {"item":"spacedrop","img":"images/spacedrop.jpg","name":"space drop pico de pino collab hoodie", "price":"$18.34","details":"","size": true, "type":"hoodie"},
            {"item":"strfc sticker","img":"images/sticker.jpg","name":"strfc sticker", "price":"$1.50","details":"","size": true, "type":"sticker"}
 
        ]
        

    };
    return {
        hereEl: eachElement
        
        // updateCart: function(locs){
        // let cart;
        // eachElement.item.innerHTML = "";
        
        // for(var i=0;i<locs.length;i++){
        // cart = locs[i];
        // let itemCart = '<div class="item-container d-flex justify-content-between align-items-center" ><div class="imgContainer" id="' + cart.id + '" ><img src="' + cart.image + '" alt=""  ></div><div class="PriceTags" ><span class="spans" >' + cart.itemname + '</span><span class="spans 1">' + cart.price + '</span><div class="quantity-container" ><div class="Quantity" id="' + cart.id+ '"><a href="#" id="sub" class="subbtns" ><i class="fas fa-minus"></i></a><a href="#" id="add" class="addbtns"><i class="fas fa-plus" ></i></a><div id="numbers" >' + cart.quantity + '</div></div></div><div class="TotalCost">Item Total: $<span>'+ (cart.price.slice(1,6) * cart.quantity).toFixed(2) +'</span></div></div><div class="close-container"><a href="#" id="' + cart.id + '"  class="closed" >delete</a></div></div>';
        // eachElement.item.insertAdjacentHTML("afterbegin", itemCart);
        // }

        // }, 
        // numofitemsIncart:function(){
        //     eachElement.digits.forEach(function(digit){
        //         digit.textContent = Array.from(eachElement.totalNumItems).length;
        //     });
        // }
    };
})();

var controller = (function(Dom, storage){

 
    //  Dom.hereEl.item.addEventListener("click", function(e){
    //      e.preventDefault();
    //         var elname = e.target, elid, cart = storage.store.GetLocalStorage();
           
    //     if(elname.className === "closed"){
            
    //         elid = elname.getAttribute("id");
    //         var position;
                 
        
    //         for(var i = 0; i < cart.length; i++){
                 
    //             if(elid == cart[i].id){
    //                 position = i;
    //                // console.log(elid);
                  
    //             }

    //         }

    //         cart.splice(position, 1);
    //         storage.store.SetLocalStorage(cart);
    //         Dom.updateCart(storage.store.GetLocalStorage());
    //         updateNumCart();

    //     }

    // });
    
   
    Dom.hereEl.menuBtns.forEach((menuBtn) => {
        menuBtn.addEventListener("click", function(e){
            e.preventDefault();
            Dom.hereEl.sidenav.classList.add("show");
        });
    });
    
    
    // Dom.hereEl.closeMenubtn.addEventListener("click", function(e){
    //     e.preventDefault();
    //     Dom.hereEl.sidenav.classList.remove("show");
    // });

 
    


    Dom.hereEl.baskets.forEach(function(basket){
        basket.addEventListener("click", function(e){
            e.preventDefault();
            Dom.hereEl.cart.classList.add("showcart");
            Dom.hereEl.wrapper.style.display = "none";
        });

    });
    
    
    // Dom.hereEl.barbacks.addEventListener("click", function(e){
    //     e.preventDefault();
    //     Dom.hereEl.cart.classList.remove("showcart");
    //     Dom.hereEl.wrapper.style.display = "block";
    // });

    
    
    // Dom.numofitemsIncart();

    // var storedItems;
    // storedItems = storage.store.GetLocalStorage();
    // Dom.updateCart(storedItems);
    


    // function updateNumCart(){
    //     let digits = Array.from(document.querySelectorAll(".digit")),   
    //         totalNumItems = document.querySelectorAll(".item-container");

    //         digits.forEach(function(digit){
    //             digit.textContent = Array.from(totalNumItems).length;
    //     });

    //     if(Array.from(totalNumItems).length === 0){
            
    //         var emptycart = document.querySelector(".empty-cart"),
    //             cartRow = document.querySelector(".cart-row-container");
                
                
    //             emptycart.style.display = "block";
    //             cartRow.style.display = "none";
           
    //     } else {
    //         var emptycart = document.querySelector(".empty-cart"),
    //         cartRow = document.querySelector(".cart-row-container");
    //         emptycart.style.display = "none";
    //         cartRow.style.display = "block";
    //     }
        
    //     addAndSub();

    // }
    
    
    // function addAndSub(){
    //      var addbtns = document.querySelectorAll(".Shopping-cart .addbtns");
    //      var subbtns = document.querySelectorAll(".Shopping-cart .subbtns");
         
         
    //      Array.from(addbtns).forEach(function(btn){
         
	//          btn.addEventListener("click", function(e){
	//          e.preventDefault();
	         
	         
	         
	//          let value = this.parentElement.parentElement.previousElementSibling;
	//          let numberText = this.nextElementSibling;
	//          let cash = parseFloat(value.textContent.substring(1,6));
	         

	         
	//          let span = this.parentElement.parentElement.nextElementSibling.lastChild;
	        
	         
	//          let plus;
	         
	//          var shopcart = storage.store.GetLocalStorage();
	         
	//          var product = shopcart.find(item => item.id == this.parentElement.id );

	//          console.log(product.itemname);
	     
	   
	        
	//          if(!(parseInt(numberText.textContent) >= 12)){
	//              plus =  parseInt(numberText.textContent) + 1;
	//              numberText.textContent = plus;
	             
	//              product.quantity = numberText.textContent;
	//              let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
	             
	//              span.innerText = (cash * plus).toFixed(2);
	             
	             
	//          } 
	         
	//          storage.store.SetLocalStorage(shopcart);
	         
	         
	         
	         
	       
	         

	//          });
    //      });
     
         
         
    //      Array.from(subbtns).forEach(function(btn){
         
	//          btn.addEventListener("click", function(e){
	//          e.preventDefault();
	         
	         
	         
	//          let value = this.parentElement.parentElement.previousElementSibling;
	//          let numberText = this.parentElement.lastChild;
	//          let cash = parseFloat(value.textContent.substring(1, 9));
	         
	//          var shopcart = storage.store.GetLocalStorage();
	         
	//          var product = shopcart.find(item => item.id == this.parentElement.id );
	//         // console.log(product.id);
	//         // console.log(this.parentElement.id);
	        
	//          if(!(parseInt(numberText.textContent) <= 1)){
	// 	         let minus =  parseInt(numberText.textContent) - 1;
	// 	         numberText.textContent = minus;
		         
	// 	         product.quantity = numberText.textContent;
		         
	// 	         let TotalCost = parseFloat(this.parentElement.parentElement.nextElementSibling.lastChild.textContent);
	// 	         let span = this.parentElement.parentElement.nextElementSibling.lastChild;
		         
	// 	         span.innerText = (parseFloat(span.textContent) - cash).toFixed(2);
		         
		         
	// 	        // console.log(parseFloat(span.textContent));
	// 	       //  console.log(cash);
		       
	//          } 
	         
	//         // console.log(shopcart[this.parentElement.id].quantity);
	         
	         
	//          storage.store.SetLocalStorage(shopcart);
	         
	         
	         
	       
	         
	//          });
    //      });
         
         
         
    
    // }
    

    
    // window.onload = updateNumCart;
    
    var productItem = Dom.hereEl.products;
    
    var template = "";
    // inserting into dom
    // for(var i=0 ; i<productItem.length;i++){
    //     template += `
    //     <div class="itemsContainer col-6 col-md-6 col-lg-4">
    //       <a href="details.html?name=${productItem[i].item}">
    //         <div class="img-containers" id="albumcovertshirt">
    //             <img src=${productItem[i].img} class="homeimg"  alt="shirt1"    >
    //         </div>
    //         <div class="PriceTag" >
    //             <a href="details.html?name=${productItem[i].item}">${productItem[i].name} </a>
    //             <span>${productItem[i].price}</span>
    //         </div>
    //         </a>
    //     </div>
        
    //     `;
    // }
    
    
    
 /*   setTimeout(function(){ */
    //    Dom.hereEl.productRow.innerHTML = template;
       
 /*   }, 2000); */
 /*
 var imgs = document.querySelectorAll(".img-containers img");
 
 imgs.forEach(img => {
     img.onload = function(){
        // default.classList.remove("blur");
        
     }
 
 });
 
    
    */
    
    
    
   
    
    
    
    
    
    
        
})(DomElements, localStorages);

var radiobtns = document.querySelectorAll("input[type='radio']");

Array.from(radiobtns).forEach((btn) => {
    if(btn.checked){
       return true;
       // console.log(btn.value);
    }
});




var form = document.querySelector(".searches form");
var searches = document.querySelector(".searches form input");
var ul = document.querySelector(".searches ul");

var keywords = [{ item: "albumcovertshirt", name: "album cover tshirt"}, { item: "lilskiggytee", name: "lil skiggy tee"}, { item: "lightblue", name: "light blue"}, { item: "albuminwhite", name: "album in white Shirt"}, { item: "nocluetshirt", name: "no clue tshirt"}];

var products = [
    {"item":"nocluetshirt","img":"images/nocluetshirt.png","name":"No clue jersey", "price":"$11.34","details":{"heading": "Strfc sticker / sampaloc Tanay Rizal Football Club", "subhead": "You can stick on phone, fridge, room"},"size": true, "type":"shirt"},
    {"item":"short","img":"images/short.jpg","name":"gigin short", "price":"$10.34","details":"","size": true, "type":"bottom"},
    {"item":"spacedrop","img":"images/spacedrop.jpg","name":"space drop pico de pino collab hoodie", "price":"$18.34","details":"","size": true, "type":"hoodie"},
    {"item":"strfc sticker","img":"images/sticker.jpg","name":"strfc sticker", "price":"$1.50","details":"","size": true, "type":"sticker"}
];


searches.addEventListener("keyup", function(e){
    var searchChar = e.target.value.toUpperCase();
    var template = "";


   
    var itemArray = [];
    for(var i=0 ; i<products.length;i++){

        if(products[i].name.toUpperCase().indexOf(searchChar) !== -1){

            itemArray.push(products[i]);
       
          
        }
      
    }

     itemArray.slice(0, 6).forEach(function(product){
        
        if(product.name.toUpperCase().indexOf(searchChar) !== -1){
            
            template += `
                <li class="searchItem" id=${product.item}>${product.name}</li>
            `;
        }
    });

    // ul.style.display = "block";

    ul.innerHTML = template;
    // console.log(itemArray.slice(0, 6));


    if(e.keyCode === 13){
        ul.innerHTML = "";
        return false;
    }
    
    
});

searches.addEventListener("keypress", function(e){
    let button = document.querySelector(".searches form button");
    if(e.keyCode === 13){
        button.click();
        searchField.classList.remove("displaysearch");
        ul.innerHTML = "";
        console.log("hi");
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
        

        // let product = products.find(item => {
        //     return item.item === searches.id;
        // });

        let items = products.filter(item => {
            // return item.item === searches.id;
            return item.name.toUpperCase().indexOf(searches.value.toUpperCase()) !== -1;
        });
        
        if(items.length){
           items.forEach(function(product){
	           template += `
		           <div class="itemsContainer col-6 col-md-6 col-lg-4">
			           <div class="img-containers" id="albumcovertshirt">
				           <img src=${product.img} class="homeimg"  alt="shirt1"    >
			           </div>
			           <div class="PriceTag" >
				           <a href="details.html?name=${product.item}">${product.name} </a>
				           <span>${product.price}</span>
			           </div>
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
        

        



        console.log(items);
       // productRow.innerHTML = template;
    
       
          
        
     
    } 

    
    searchField.classList.remove("displaysearch");
    ul.innerHTML = "";

    console.log(ul);
 

    searches.value = "";


});



ul.innerHTML = "";















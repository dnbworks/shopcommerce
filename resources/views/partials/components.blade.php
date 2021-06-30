<div class="sidenav" >
    <div class="container">
         <div id="closebtn" >
           <img src="/images/close.png" width="27px" alt="" srcset="">
         </div>
         <div class="links" >
             <ul>  
                @guest
                 <li><a href="{{ route('login') }}" >Login</a></li>
                @endguest
                @auth
                 <li><a href="{{ route('login') }}" >Your Account</a></li>
                @endauth
                 <li><a href="spotify.html" >Blog</a></li>
             
             </ul>
         </div>
    </div>
</div>

<div class="Shopping-cart" >
    <div class="container shop-cart-container">
        <div class="row justify-content-around">
            <div class="col-12 col-md-6 col-lg-6">
                <div class="headers d-flex justify-content-between" >
                    <p>Shopping Basket </p>
                    <div class="bar-containerss" id="barbacks"   >
                        <img src="/images/close.png" alt="" srcset="" width="26px">
                    </div>
                </div>

                @if(!$cart)
                <div class="empty-cart">
                    <p>Your shopping Basket is currently empty! Sounds like a good time to</p>
                    <a href="{{ route('home') }}">Start Shopping</a>
                </div>
                @endif

                

                 

                

        

                <!-- <div class="cart-row-container" >
                    <div class="cart-row d-flex justify-content-between">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">QUANTITY</span>
                    </div>
                </div> -->
        
        
                <div class="item"  >
                    @if($cart)
                        <!-- <p>{{ session('cart') }}</p> -->
                            @foreach($cartItem->items as $item)
                            <div class="item-container d-flex justify-content-between" >
                                <div class="imgContainer" >
                                    <img src="{{ $item->item->product_image }}"  alt=""  >
                                </div>
                                <div class="PriceTags" >
                                    <span class="spans" >{{ $item->item->product_name }}</span>
                                    <span class="spans">PHP {{ $item->price }}</span>
                                    <span class="spans">Quantity: {{ $item->Qty }}</span>
                                </div>
                                <div class="close-container">
                                    <a href="#">Delete</a>
                                </div>
                                
                            </div> 
                            
                        @endforeach
                        
                    @endif
                
                    <!--
                        <div class="item-container d-flex justify-content-between" >
                            <div class="imgContainer" >
                                <img src="assests/albumcovertshirt.jpg"  alt=""  >
                            </div>
                            <div class="PriceTags" >
                                <span class="spans" >skiggy printed tshirt</span>
                                <span class="spans">$18.34</span>
                                <span class="spans">Quantity:1</span>
                            </div>
                            <div class="close-container">
                                <a href="#">Delete</a>
                            </div>
                            
                        </div> 
                    -->
                    
                    
                </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <div class="cart-level-summary">
                    <p>Cart summary</p>
                    <div class="subTotal">
                        <span>Sub Total: </span>
                        <span>PHP 50 </span>
                    </div>
                    <div class="shipping">
                        <span>Shipping: </span>
                        <span>PHP 50 </span>
                    </div>
                    <div class="total">
                        <span>Total: </span>
                        <span>PHP 50 </span>
                    </div>
                </div>
                <div class="checkout" >
                    <!-- <form action="/" method="post">
                        @csrf
                        <input type="hidden" name="order" value="" id="order">
                        <button type="submit">CheckOut</a>
                    </form> -->
                    @auth
                    <a href="{{ route('checkout') }}" id="checkout">Proceed to checkout</a>
                    @endauth
                    
                    @guest
                    <a href="http://127.0.0.1:8000/account/login" id="login">Proceed to checkout</a>
                    @endguest

                   
                </div> 
             
            </div>
            
        </div>
    </div>
</div>



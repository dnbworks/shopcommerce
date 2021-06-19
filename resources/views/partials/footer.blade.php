

<footer>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-6">
                <div class="footer-header" >
                    <h4>sign up for updates</h4>
                    <p>Promotions, new products and sales. <br>
                    Directly to your inbox</p>
                    <form>
                        <input type="text" placeholder="Email address" >
                        <input type="submit" value="Subscribe"  >
                    </form>
                    <ul>
                        <li><a href="#" ><i class="fab fa-facebook" ></i></a></li>
                        <li><a href="#" ><i class="fab fa-instagram" ></i></a></li>
                        <li><a href="#" ><i class="fab fa-twitter" ></i></a></li>
                        <li><a href="#" ><i class="fab fa-pinterest" ></i></a></li>
                    </ul>
                </div>
                <div class="footer-footer" >
                    <ul>
                        <li><a href="#">Exchange Policy</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="pages/terms.html">Terms of Service</a></li>
                    </ul>
                    <p>Copyright &copy; <script> document.write(new Date().getFullYear())</script> <b>YOURKOOL</b> | <b>Powered by PaperCap</b></p>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="sidenav" >
    <div class="container">
         <div id="closebtn" >
           <img src="/images/close.png" width="27px" alt="" srcset="">
         </div>
         <div class="links" >
             <ul>
                 <li><a href="{{ route('login') }}" >Login</a></li>
                 <li><a href="spotify.html" >Listen Music</a></li>
             
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

                <div class="empty-cart">
                    <p>Your shopping Basket is currently empty! Sounds like a good time to</p>
                    <a href="{{ route('home') }}">Start Shopping</a>
                </div>

        

                <!-- <div class="cart-row-container" >
                    <div class="cart-row d-flex justify-content-between">
                        <span class="cart-item cart-header cart-column">ITEM</span>
                        <span class="cart-price cart-header cart-column">PRICE</span>
                        <span class="cart-quantity cart-header cart-column">QUANTITY</span>
                    </div>
                </div> -->
        
        
                <div class="item"  >
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
                <div class="checkout" >
                    <!-- <form action="/" method="post">
                        @csrf
                        <input type="hidden" name="order" value="" id="order">
                        <button type="submit">CheckOut</a>
                    </form> -->
                    <a href="{{ route('login') }}">Proceed to checkout</a>
                </div> 
            </div>
            <div class="col-12 col-md-4 col-lg-4">
                <div class="cart-summary">
                    <div class="subTotal">
                        <span>Sub Total: </span>
                        <span>PHP 50 </span>
                    </div>
                    <div class="shipping">
                        <span>Shipping: </span>
                        <span>PHP 50 </span>
                    </div>
                    <div class="shipping">
                        <span>Total: </span>
                        <span>PHP 50 </span>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>


</body>
</html>
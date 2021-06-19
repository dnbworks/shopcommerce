

<header>
    <div class="container">
        <a href="{{ route('home') }}" id="logo" > <img src="../images/logo.png" alt="" srcset=""></a>
        <div class="d-flex align-items-center" >
            <div class="bar-container" >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="gender">
                <ul>
                   
                    <li><a href="spotify.html">BLOGS</a></li>
                </ul>
            </div>
            <div class="search" >
                <a href="#" ><i class="fas fa-search" ></i></a>
            </div>
            <div id="basket" class="cart" >
                <span id="basket" ><i class="fas fa-shopping-basket" ></i></span>
                <span class="digit" >0</span>
            </div>
            <div id="user" class="user" >
                <a href="{{ route('login') }}"><i class="fas fa-user" ></i></a>
            </div>
        </div>
    </div>  
</header>

<div class="searches" >
    <div class="container">
        <form>
            <input type="text" placeholder="SEARCH..." id="" >
            <button type="submit"><i class="fas fa-search"></i></button>
            <span>X</span>
        </form>
        <ul>
            <!-- <li>album cover tshirt</li> -->
        </ul>
    </div>
</div>
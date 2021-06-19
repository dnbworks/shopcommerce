@extends('layout.layout')

@section('styles')
    <link rel="stylesheet" href="../css/style.css">
@endsection

@section('content')
    
    
<div class="product-details" >
        <div class="container">
            <div class="already-in-cart">
                <p></p>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-12 col-md-12 col-lg-12 product-section">
                    <div class="row">

                        <div class="product-img col-12 col-md-6 col-lg-6" >
                            <img id="pic" src="{{ $product->product_image }}" alt="tshirt" >
                        
                        </div>

                        <div class="details col-12 col-md-6 col-lg-6" >
                            <a href="#" id="itemName" >{{ $product->product_name }}</a>
                            <span class="prices" >PHP {{ $product->product_price }}</span>
                            <p></p>
                            <span class="more" >more details <i class="fas fa-angle-down" ></i></span>
                            <div class="size">
                              <ul>
                                  <li>XS</li>
                                  <li class="color" >S</li>
                                  <li>M</li>
                                  <li>L</li>
                                  <li>XL</li>
                              </ul>
                               <a href="#" style="display: block;">size chart</a>
                            </div>
                            
                            <div class="quantity-container">
                            <p>Quantity </p>
                                <div class="Quantity" >
                                    <a href="#" id="sub"  ><i class="fas fa-minus"></i></a>
                                    <a href="#" id="add" ><i class="fas fa-plus" ></i></a>
                                    <div id="numbers"  >1</div>
                                </div>
                            </div>
                               
                            
                            
                            <form action="" method="post">
                            <!--
                            <label for="s" class="color">S</label>
                            <input type="radio" name="size" id="s" checked hidden  value="small" >
                            <label for="m">M</label>
                            <input type="radio" name="size" id="m"  hidden  value="medium" >
                            <label for="l">L</label>
                            <input type="radio" name="size" id="l" hidden  value="large">
                            <label for="xl">XL</label>
                            <input type="radio" name="size" id="xl" hidden  value="extra large">
                           -->
                            <!--
                            
                            <div class="quantity-container">
                            <p>Quantity </p>
                            <div class="Quantity" >
                            <a href="#" id="sub"  ><i class="fas fa-minus"></i></a>
                            <a href="#" id="add" ><i class="fas fa-plus" ></i></a>
                            <div id="numbers"  >1</div>
                            </div>
                            </div>
                            
                            -->
                            <a href="#" class="add"  >add to cart</a>
                            <a href="#" class="add black"  >Buy now</a>
                            </form>

                            <a href="{{ route('home') }}" class="home"><i class=""></i> Back To Home</a>
                        </div>

                    </div>
                    
                </div>
            </div>

           
            
            
        </div>
        
        
    </div>

@endsection

@section('scripts')

<script src="{{ asset('/js/show.js') }}"></script>

@endsection

@extends('layout.layout')

@section('styles')
<link rel="stylesheet" href="{{ asset('/css/style.css') }}">
@endsection


@section('title')
    YourKool Official
@endsection

@section('content')

 
<div class="wrapper">
    <div class="product-section borders">
        <h3>Mars Tour Collection </h3>
        <div class="container">
            <div class="row align-items-start">
                <div class="catergories col-12 col-md-6 col-lg-2">
                    <ul>
                        <li><a href="#">Tops</a></li>
                        <li><a href="#">Bottoms</a></li>
                        <li><a href="#">Sticker</a></li>
                    </ul>
                </div>
                <div class="products col-12 col-md-12 col-lg-10">
                    <div class="row products-row">
                        <span data-products="{{ $products }}" class="data"></span>
                        @foreach($products as $product)
                        <div class="itemsContainer defaultHeight col-6 col-md-6 col-lg-4">
                            <a href="/product/{{ $product->id }}">
                            <div class="img-containers" id="{{ $product->id }}">
                                <img src="{{ $product->product_image }}" class="homeimg"  alt="shirt" >
                            </div>
                            <div class="PriceTag" >
                                <a href="/product/{{ $product->id }}">{{ $product->product_name }} </a>
                                <span>PHP {{ $product->product_price }} </span>
                            </div>
                            </a>
                        </div>
                        @endforeach


                        <!-- <div class="itemsContainer col-6 col-md-6 col-lg-4">
                            <div class="img-containers" id="albumcovertshirt">
                                <img src="images/Default.jpg" class="homeimg"  alt="shirt1"    >
                                <div class="shadow" ></div>
                            </div>
                            <div class="PriceTag" >
                                <a href="#" class="blank" >&nbsp; </a>
                                <span class="blank" >&nbsp;</span>
                            </div>
                        </div>
                        
                        <div class="itemsContainer col-6 col-md-6 col-lg-4">
                            <div class="img-containers" id="albumcovertshirt">
                                <img src="images/Default.jpg" class="homeimg"  alt="shirt1"    >
                                <div class="shadow" ></div>
                            </div>
                            <div class="PriceTag" >
                                <a href="#" class="blank" >&nbsp; </a>
                                <span class="blank" >&nbsp;</span>
                            </div>
                        </div>
                        
                        <div class="itemsContainer col-6 col-md-6 col-lg-4">
                            <div class="img-containers" id="albumcovertshirt">
                                <img src="images/Default.jpg" class="homeimg"  alt="shirt1"    >
                                <div class="shadow" ></div>
                            </div>
                            <div class="PriceTag" >
                                <a href="#" class="blank" >&nbsp; </a>
                                <span class="blank" >&nbsp;</span>
                            </div>
                        </div>
                        
                        <div class="itemsContainer col-6 col-md-6 col-lg-4">
                            <div class="img-containers" id="albumcovertshirt">
                                <img src="images/Default.jpg" class="homeimg"  alt="shirt1"    >
                                <div class="shadow" ></div>
                            </div>
                            <div class="PriceTag" >
                                <a href="#" class="blank" >&nbsp; </a>
                                <span class="blank" >&nbsp;</span>
                            </div>
                        </div> -->
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




@endsection


@section('scripts')

<script src="{{ asset('/js/script.js') }}"></script>

@endsection


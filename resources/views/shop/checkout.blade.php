@extends('layout.layout')
@section('title', 'checkout') 
@section('styles')
<link rel="stylesheet" href="{{ asset('/css/style.css') }}">
@endsection

@section('content')
    <div class="container checkout-container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-6">
                @isset($subtotal)
                <div class="cart-summary">
                    <span>cart summary</span>
                    <div class="summary">
                        <p>Subtotal: PHP {{ $subtotal }}</p>
                        <p>Tax (2%): PHP 50</p>
                        <p>Total: PHP {{ $total }}</p>
                    </div>
                </div>
                @endisset
                <form action="" method="post">
                    @csrf

                    @auth
                    <h1>Customer information</h1>
                    <div class="field">
                        <label for="email">Email address</label>
                        <input type="text" name="email" id="email" value="{{ auth()->user()->email}}">
                        @error('email')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <div class="field">
                        <label for="name">Full name</label>
                        <input type="text" name="name" id="name" value="{{ auth()->user()->name }}">
                        @error('name')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <h1>Shipping information</h1>
                    <div class="field">
                        <label for="address">Address</label>
                        <input type="text" name="address" id="address" value="{{ $userInfo->full_address }}">
                        @error('address')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <div class="field">
                        <label for="city">City</label>
                        <input type="text" name="city" id="city" value="{{ $userInfo->city }}">
                        @error('city')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <div class="field">
                        <label for="postal_code">Postal code</label>
                        <input type="text" name="postal_code" id="postal_code" value="{{ $userInfo->zip }}">
                        @error('postal_code')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <h1>Payment method</h1>
            
                    @endauth

                    @guest
                    <h1>Customer information</h1>
                    <div class="field">
                        <label for="email">Email address</label>
                        <input type="text" name="email" id="email">
                        @error('email')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <div class="field">
                        <label for="name">Full name</label>
                        <input type="text" name="name" id="name">
                        @error('name')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <!-- <p>Already have an account <a href="http://127.0.0.1:8000/account/login?checkout=true">Login</a></p> -->
                    <h1>Shipping information</h1>
                    <div class="field">
                        <label for="address">Address</label>
                        <input type="text" name="address" id="address">
                        @error('address')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <div class="field">
                        <label for="city">City</label>
                        <input type="text" name="city" id="city">
                        @error('city')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <div class="field">
                        <label for="postal_code">Postal code</label>
                        <input type="text" name="postal_code" id="postal_code">
                        @error('postal_code')
                            <p class="error">{{ $message }}</p>
                        @enderror
                    </div>
                    <h1>Payment method</h1>

                    
                    @endguest
                    <button type="submit">Place order</button>
                </form>
            </div>
            <div class="col-12 col-md-4 col-lg-4">
               
                <div class="braintree">
                <div id="dropin-container"></div>
                <button id="submit-button" class="button button--small button--green">Purchase</button>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
<script src="https://js.braintreegateway.com/web/dropin/1.30.1/js/dropin.js"></script>
<script>
    var button = document.querySelector('#submit-button');

    braintree.dropin.create({
    authorization: 'sandbox_g42y39zw_348pk9cgf3bgyw2b',
    selector: '#dropin-container'
    }, function (err, instance) {
    button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (err, payload) {
        // Submit payload.nonce to your server
        });
    })
    });
</script>
@endsection
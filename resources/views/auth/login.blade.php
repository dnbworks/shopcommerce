@extends('layout.layout')
@section('title', 'login') 
@section('styles')
<link rel="stylesheet" href="{{ asset('/css/style.css') }}">
@endsection

@section('content')
<div class="wrappering-container">
    <div class="container">
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
                <h1>RETURNING CUSTOMER</h1>

         
             
                <div class="user">
                    @if(session('status'))
                        <div class="error">
                            <p>{{ session('status') }}</p>
                        </div>
                    @endif
 
                    <form action="{{ route('login') }}" method="post">
                        @csrf
                        <div class="field">
            
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email" value="{{ old('email') }}">
                            @error('email')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="field">
                            <label for="password">Password</label>
                            @isset($subtotal)
                            <input type="hidden" name="subtotal" id="subtotal" value="true">
                            @endisset
                            <input type="password" name="password" id="password">
                            @error('password')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <!-- <a href="http://">Forgot your password</a> -->
                        <button type="submit">Login</button>

                        
                    </form>
                    <div class="or d-flex justify-content-around align-items-center">
                        <div class="line"></div>
                        <span>or</span>
                        <div class="line"></div>
                    </div>
          
                    <a href="{{ route('register') }}?checkout={{ $subtotal ? 'true' : 'false' }}">CREATE AN ACCOUNT</a>
                  
                    <p>Create an account for fast checkout and easy access to order history.</p>

                    @isset($subtotal)
                    <div class="or d-flex justify-content-around align-items-center">
                        <div class="line"></div>
                        <span>or</span>
                        <div class="line"></div>
                    </div>

                    <a href="{{ route('checkout') }}?subtotal={{ $subtotal }}&total={{ $total }}&auth=false">CONTINUE AS GUEST</a>
                    @endisset
                  
                </div>
            </div>
        </div>
    
    </div>
</div>


@endsection


@section('scripts')

<script src="{{ asset('../js/script.js') }}"></script>

@endsection
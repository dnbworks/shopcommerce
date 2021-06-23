@extends('layout.layout')

@section('styles')
<link rel="stylesheet" href="{{ asset('/css/style.css') }}">
@endsection

@section('content')
<div class="wrappering-container">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-6">
                <div class="new-customer">
                    <h1>REGISTER CUSTOMER</h1>
                    <p class="text">By creating an account you will be able to shop faster, Be up to date on an order's status, and keep track of the orders you have previous made.</p>
                    <form action="/account/register" method="post">
                        @csrf
                        <div class="field">
                            @isset($status)
                            <input type="hidden" name="status" value="{{ $status }}">
                            @endisset
                            <label for="firstname">first name</label>
                            <input type="text" name="firstname" id="firstname">
                            @error('firstname')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="field">
                            <label for="lastname">last name</label>
                            <input type="text" name="lastname" id="lastname">
                            @error('lastname')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="field">
                            <label for="email">Email</label>
                            <input type="text" name="email" id="email">
                            @error('email')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <div class="field">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password">
                            @error('password')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <h2>Shipping Information</h2>
                        <div class="field">
                            <label for="address">Full Address</label>
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
                            <label for="zip">Postal code/ zip</label>
                            <input type="text" name="zip" id="zip">
                            @error('zip')
                                <p class="error">{{ $message }}</p>
                            @enderror
                        </div>
                        <button type="submit" name="register">Create my account</button>
                    </form>

                    <div class="or d-flex justify-content-around align-items-center">
                        <div class="line"></div>
                        <span>or</span>
                        <div class="line"></div>
                    </div>

                    <a href="{{ route('login') }}">LOGIN</a>

                    
                </div>
            </div>
        </div>
    
    </div>
</div>


@endsection


@section('scripts')

<script src="{{ asset('../js/script.js') }}"></script>

@endsection
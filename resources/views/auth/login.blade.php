@extends('layout.layout')

@section('styles')
<link rel="stylesheet" href="{{ asset('/css/style.css') }}">
@endsection

@section('content')
<div class="wrappering-container">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6 col-lg-6">
                <h1>CUSTOMER LOGIN</h1>
                <div class="user">
 
                    <form action="{{ route('login') }}" method="post">
                        @csrf
                        <div class="field">
                            @if(ISSET($Fromcheckout))
                                <input type="hidden" name="checkout" id="checkout" value="{{ $Fromcheckout }}">
                            @else 
                                <input type="hidden" name="checkout" id="checkout" value="false">

                            @endif
            
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
                        <!-- <a href="http://">Forgot your password</a> -->
                        <button type="submit">Login</button>

                        
                    </form>
                    <div class="or d-flex justify-content-around align-items-center">
                        <div class="line"></div>
                        <span>or</span>
                        <div class="line"></div>
                    </div>

                    <a href="{{ route('register') }}">CREATE AN ACCOUNT</a>
                </div>
            </div>
        </div>
    
    </div>
</div>


@endsection


@section('scripts')

<script src="{{ asset('../js/script.js') }}"></script>

@endsection
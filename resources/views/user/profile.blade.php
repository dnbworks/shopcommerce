@extends('layout.layout')
@section('title', 'profile') 
@section('styles')
<link rel="stylesheet" href="{{ asset('/css/style.css') }}">
@endsection

    <div class="p-container container" style="margin-top:60px;">
        <h1>profile</h1>
        <p>{{ auth()->user()->name }} </p>
        <form action="{{ route('profile') }}" method="post">
            @csrf

            <button type="submit">Logout</button>
        </form>
    </div>
    
    


@section('content')


@endsection
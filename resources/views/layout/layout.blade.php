<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>YourKool Official |  @yield('title')</title>

    <link rel="stylesheet" href="/css/bootstrap-grid.min.css">



    @yield('styles')
    
    <link rel="shortcut icon" href="/images/favicon.jpg" type="image/jpg">


</head>
<body class="antialiased">
@include('partials.nav')

@yield('content')


@include('partials.footer')

<script src="/js/fontawesome.js"></script>
@yield('scripts')

</body>
</html>

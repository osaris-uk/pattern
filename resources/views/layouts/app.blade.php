<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>
        @hasSection('title')
            {{ config('app.name', 'Pattern') }} | @yield('title')
        @else
            {{ config('app.name', 'Pattern') }}
        @endif
    </title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- EU Cookie Warning -->
    <script>
        window.addEventListener("load", function(){
            window.cookieconsent.initialise({
            "palette": {
                "popup": {
                "background": "#000000",
                "text": "#ffffff"
                },
                "button": {
                "background": "#f1d600",
                "text": "#000000"
                }
            },
            "theme": "classic",
            "position": "bottom-right",
            "content": {
                "message": "This website uses cookies to ensure you get the best experience on our website.",
                "dismiss": "Got It!",
                "link": "Learn more",
                "href": "https://cookiesandyou.com/"
                }
            })
        });
    </script>
</head>
<body>
    <div id="app">
        @include('layouts.partials.navigation')
        
        <div class="container">
            @include('layouts.partials.notifications')
            @yield('content')
        </div>
    </div>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
</body>
</html>

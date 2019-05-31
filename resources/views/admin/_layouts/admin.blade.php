<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- CSRF Token -->
        <meta name="csrf-token" content="{{ csrf_token() }}">


        <title>
            @hasSection('title')
                {{ config('app.name', 'Pattern') }} | Admin | @yield('title')
            @else
                {{ config('app.name', 'Pattern') | Admin }}
            @endif
        </title>

        <!-- Scripts -->
        <script src="{{ asset('js/admin.js') }}" defer></script>

        <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

        <!-- Styles -->
        <link href="{{ asset('css/admin.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            @include('admin._layouts._partials.navigation')
            <div class="content-wrapper">
                <div class="container-fluid">
                    @include('admin._layouts._partials.notifications')
                    @yield('content')
                </div>
                @include('admin._layouts._partials.footer')
            </div>
        </div>
    </body>
</html>

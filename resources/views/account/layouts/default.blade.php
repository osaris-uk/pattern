@extends('layouts.app')

@section('content')
    <div class="row justify-content-center">
        <div class="col-md-3">
            @include('account.layouts.partials.navigation')
        </div>
        <div class="col-md-9">
            <div class="card">
                <div class="card-block">
                    @yield('account.content')
                </div>
            </div>
        </div>
    </div>
@endsection

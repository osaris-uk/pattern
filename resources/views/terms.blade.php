@extends('_layouts.app')

@section('title') {{ __('Terms Of Service') }} @endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header"><i class="fas fa-file-signature"></i> {{ __('Terms Of Service') }}</div>

                <div class="card-body">
                    {{ __('Terms Of Service') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

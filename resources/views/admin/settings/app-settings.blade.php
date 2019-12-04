@extends('admin._layouts.admin')

@section('title') Settings | App Settings @endsection

@section('content')
    <div class="row">
        <div class="col-12">
            <h4 class="font-weight-bold py-3 mb-4">
                <i class="fas fa-wrench"></i> App Settings
            </h4>
        </div>
    </div>

    <div class="row">
        <div class="col-md-3 offset-md-2 h2 text-center">
            Key
        </div>
        <div class="col-md-5 h2 text-center">
            Value
        </div>
    </div>

    <form action="{{ route('admin.settings.app-settings') }}" method="POST">
        @csrf
        <div class="row">
            <div class="col-md-3 offset-md-2 text-right pb-3">
                <div class="form-group">
                    <input type="text" class="form-control" name="key" placeholder="New Setting Key" required>
                </div>
            </div>
            <div class="col-md-5 pb-3">
                <div class="input-group">
                    <input type="text" class="form-control" name="value" placeholder="New Setting Value" required>
                    <div class="input-group-append">
                        <button class="btn btn-outline-primary" type="submit">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </form>

    @foreach($settings as $setting)
        <form action="{{ route('admin.settings.app-settings') }}" method="POST">
            @csrf
            <div class="row">
                <div class="col-md-3 offset-md-2 text-right pb-3">
                    <div class="form-group">
                        <input type="text" class="form-control" name="key" value="{{ $setting->key }}" required>
                    </div>
                </div>
                <div class="col-md-5 pb-3">
                    <div class="input-group">
                        <input type="text" class="form-control" name="value" value="{{ $setting->value }}" required>
                        <div class="input-group-append">
                            <button class="btn btn-outline-primary" type="submit">Save</button>
                            <button class="btn btn-outline-danger" type="submit" name="delete">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    @endforeach

    <div class="row">
        <div class="col-md-8 offset-md-2 text-right">
            {{ $settings->links() }}
        </div>
    </div>
@endsection

@section('styles')
@endsection

@section('scripts')
@endsection

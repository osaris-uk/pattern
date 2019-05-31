@extends('account._layouts.default')

@section('title') Change Password @endsection

@section('account.content')
    <form method="POST" action="{{ route('account.password.store') }}">
        @csrf

        <div class="form-group">
            <label for="current_password" class="form-label text-md-right">Current Password</label>
            <input id="current_password" type="password" class="form-control{{ $errors->has('current_password') ? ' is-invalid' : '' }}" name="current_password" required>
            @if ($errors->has('current_password'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('current_password') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group">
            <label for="password" class="form-label text-md-right">New Password</label>
            <input id="password" type="password" class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required>
            @if ($errors->has('password'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('password') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group">
            <label for="password-confirm" class="form-label text-md-right">Confirm New Password</label>
            <input id="password-confirm" type="password" class="form-control{{ $errors->has('password_confirmation') ? ' is-invalid' : '' }}" name="password_confirmation" required>
            @if ($errors->has('password_confirmation'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('password_confirmation') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group mb-0">
            <button type="submit" class="btn btn-primary">
                Change Password
            </button>
        </div>
    </form>
@endsection

@section('styles')
@endsection

@section('scripts')
@endsection

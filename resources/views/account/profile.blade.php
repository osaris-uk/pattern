@extends('account.layouts.default')

@section('title') My Profile @endsection

@section('account.content')
    <form method="POST" action="{{ route('account.profile.store') }}">
        {{ csrf_field() }}

        <div class="form-group">
            <label for="name" class="form-label text-md-right">Name</label>
            <input id="name" type="text" class="form-control{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name', auth()->user()->name) }}" required autofocus>
            @if ($errors->has('name'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('name') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group">
            <label for="email" class="form-label text-md-right">E-Mail Address</label>
            <input id="email" type="email" class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email', auth()->user()->email) }}" required>
            @if ($errors->has('email'))
                <span class="invalid-feedback">
                    <strong>{{ $errors->first('email') }}</strong>
                </span>
            @endif
        </div>

        <div class="form-group mb-0">
            <button type="submit" class="btn btn-primary">
                Save
            </button>
        </div>
    </form>
@endsection
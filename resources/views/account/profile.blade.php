@extends('account.layouts.default')

@section('title') My Profile @endsection

@section('account.content')
    <div class="panel panel-default">
        <div class="panel-body">
            <form action="{{ route('account.profile.store') }}" method="POST">
                <div class="form-group{{ $errors->has('name') ? ' has-error' : '' }}">
                    <label for="name" class="control-label">Name</label>
                    <input type="text" name="name" id="name" class="form-control" value="{{ old('name', auth()->user()->name) }}">
                    @if ($errors->has('name'))
                        <span class="help-block">
                            <strong>{{ $errors->first('name') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                    <label for="email" class="control-label">E-Mail</label>
                    <input type="text" name="email" id="email" class="form-control" value="{{ old('email', auth()->user()->email) }}">
                    @if ($errors->has('email'))
                        <span class="help-block">
                            <strong>{{ $errors->first('email') }}</strong>
                        </span>
                    @endif
                </div>

                <button type="submit" class="btn btn-primary">Save</button>

                {{ csrf_field() }}
            </form>
        </div>
    </div>
@endsection

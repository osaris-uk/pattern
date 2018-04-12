@extends('account.layouts.default')

@section('title') Change Password @endsection

@section('account.content')
    <div class="panel panel-default">
        <div class="panel-body">
            <form action="{{ route('account.password.store') }}" method="POST">
                <div class="form-group{{ $errors->has('current_password') ? ' has-error' : '' }}">
                    <label for="current_password" class="control-label">Current Password</label>
                    <input type="password" name="current_password" id="current_password" class="form-control">
                    @if ($errors->has('current_password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('current_password') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                    <label for="password" class="control-label">New Password</label>
                    <input type="password" name="password" id="password" class="form-control">
                    @if ($errors->has('password'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password') }}</strong>
                        </span>
                    @endif
                </div>

                <div class="form-group{{ $errors->has('password_confirmation') ? ' has-error' : '' }}">
                    <label for="password_confirmation" class="control-label">Confirm New Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control">
                    @if ($errors->has('password_confirmation'))
                        <span class="help-block">
                            <strong>{{ $errors->first('password_confirmation') }}</strong>
                        </span>
                    @endif
                </div>

                <button type="submit" class="btn btn-primary">Change Password</button>

                {{ csrf_field() }}
            </form>
        </div>
    </div>
@endsection

@extends('layouts.app')

@section('content')
    Home<hr>
    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">Custom Blade Directives</h3>
        </div>
        <div class="panel-body">
            <h4>&#64;role()</h4>
            <p>
                <code>
                    &#64;role('admin') &lt;content&gt; &#64;endrole, &#64;role('user') &lt;content&gt; &#64;endrole, etc..
                </code>
            </p>

            <h4>&#64;activeclass()</h4>
            <p>
                <code>
                    &#64;activeclass('account'), &#64;activeclass('/'), etc..
                </code>
            </p>
            <p>
                Usage: class="&#64;activeclass('account/*')" - outputs 'active' if the current request is /account/*anything*<br>
                Usage: class="&#64;activeclass('account')" - outputs 'active' if the current request is /account
            </p>
        </div>
    </div>

    <div class="panel panel-info">
        <div class="panel-heading">
            <h3 class="panel-title">notify()</h3>
        </div>
        <div class="panel-body">
            <h4>SweetAlert</h4>
            <p>
                <code>
                    notify()->flash('Welcome!', 'success', [<br>
                        &nbsp;&nbsp;'provider' => 'swal',<br>
                        &nbsp;&nbsp;'options' => "<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;text: \"Please check your emails for an activation link.\",<br>
                        &nbsp;&nbsp;&nbsp;&nbsp;button: true,<br>
                        &nbsp;&nbsp;",<br>
                    ]);<br>
                </code>
            </p>

            <h4>Bootstrap</h4>
            <p>
                <code>
                    notify()->flash('Password Successfully Changed', 'success');<br>
                </code>
                <code>
                    notify()->flash('Password Change Failed', 'danger');<br>
                </code>
                
            </p>
        </div>
    </div>
@endsection

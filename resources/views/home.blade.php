@extends('layouts.app')

@section('content')
    Home<hr>
    <div class="card">
        <div class="card-header">
            Custom Blade Directives
        </div>
        <div class="card-block">
            <h5>&#64;role()</h5>
            <p>
                <code>
                    &#64;role('admin') &lt;content&gt; &#64;endrole, &#64;role('user') &lt;content&gt; &#64;endrole, etc..
                </code>
            </p>

            <h5>&#64;activeclass()</h5>
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
    <br> 
    <div class="card">
        <div class="card-header">
            notify()
        </div>
        <div class="card-block">
            <h5>SweetAlert</h5>
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

            <h5>Bootstrap</h5>
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

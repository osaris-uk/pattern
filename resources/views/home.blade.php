@extends('_layouts.app')

@section('content')
<div class="container">
    <i class="fas fa-home"></i> Home<hr>

    Role: @role('user') User @endrole<hr>

    <div class="card">
        <div class="card-header">Custom Blade Directives</div>

        <div class="card-body">
            <h5>&#64;role()</h5>
            <p>
                <code>
                    &#64;role('admin') &lt;content&gt; &#64;endrole, &#64;role('user') &lt;content&gt; &#64;endrole, etc..
                </code>
            </p>

            <h5>&#64;activeclass()</h5>
            <p>
                <code>
                    &#64;activeclass('account.index')
                </code>
            </p>
            <p>
                Usage: class="&#64;activeclass('account.index')" - outputs 'active' if the current request matches 'account.index'<br>
            </p>
            
            <h5>&#64;openclass()</h5>
            <p>
                <code>
                    &#64;openclass($navItem['children'])
                </code>
            </p>
            <p>
                Usage: class="&#64;openclass($navItem['children'])" - accepts an array of child route names outputs 'open' if the current route is a parent to any of the children.
            </p>
        </div>
    </div>
</div>
@endsection

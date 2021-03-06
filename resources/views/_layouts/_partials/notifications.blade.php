@if (notify()->ready() && notify()->option('provider') !== 'swal')
    <div class="alert alert-{{ notify()->type() }} my-0" style="border-radius: 0;" role="alert">
        <div class="container">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            {!! notify()->message() !!}
        </div>
    </div>
@endif

@if (notify()->ready() && notify()->option('provider') === 'swal')
    <script>
        window.addEventListener('DOMContentLoaded', function() {
            swal({
                title: "{!! notify()->message() !!}",
                icon: "{{ notify()->type() }}",
                {!! notify()->option('options') ? notify()->option('options') : '' !!}
            });
        });
    </script>
@endif
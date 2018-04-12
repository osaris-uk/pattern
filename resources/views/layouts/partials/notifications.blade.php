@if (notify()->ready() && notify()->option('provider') !== 'swal')
	<div class="alert alert-{{ notify()->type() }}" role="alert">
		{!! notify()->message() !!}
		<button type="button" class="close" data-dismiss="alert" aria-label="Close">
			<span aria-hidden="true">&times;</span>
		</button>
	</div>
@endif

@if (notify()->ready() && notify()->option('provider') === 'swal')
    <script>
        swal({
            title: "{!! notify()->message() !!}",
            icon: "{{ notify()->type() }}",
            {!! notify()->option('options') ? notify()->option('options') : '' !!}
        });
    </script>
@endif
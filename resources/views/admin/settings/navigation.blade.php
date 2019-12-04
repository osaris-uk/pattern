@extends('admin._layouts.admin')

@section('title') Settings | Navigation @endsection

@section('content')
    <data-table endpoint="{{ route('admin.data.navigations.index') }}"></data-table>
@endsection

@section('styles')
@endsection

@section('scripts')
    <script src="{{ mix('/js/components/data-table.js') }}" defer></script>
@endsection

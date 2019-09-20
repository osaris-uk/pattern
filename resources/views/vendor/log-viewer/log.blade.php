@extends('admin._layouts.admin')

@section('title') Settings | Logs @endsection

@section('content')
    <div class="row justify-content-center mb-3">
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">{{ $currentLog }}</div>

                <div class="card-body">
                    {{ $log->links() }}

                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Level</th>
                                <th scope="col">Env</th>
                                <th scope="col">Time</th>
                                <th scope="col">Message</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($log as $key => $entry)
                                <tr>
                                    <td nowrap><span class="badge badge-{{ $colors[$entry['level']] }}">{{ $entry['level'] }}</span></td>
                                    <td nowrap>{{ $entry['env'] }}</td>
                                    <td nowrap>{{ $entry['time'] }}</td>
                                    <td><code>{{ $entry['info'] }}</code></td>
                                    <td><button type="button" class="btn btn-secondary btn-sm" data-toggle="collapse" data-target=".trace-{{ $key }}" {!! $entry['trace'] ? '' : 'title="No Stack Trace Available" disabled' !!}>Stack Trace</button></td>
                                </tr>
                                <tr class="trace-{{ $key }} collapse" aria-expanded="false">
                                    <td colspan="5">
                                        <div class="card">
                                            <div class="card-body" style="white-space: pre-wrap;">
                                                <code>{{ $entry['trace'] }}</code>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>

                    {{ $log->links() }}
                </div>
            </div>
        </div>

        <div class="col-md-2">
            <div class="card">
                <div class="card-header px-3">
                    Last 20 Logs
                </div>
                <div class="list-group list-group-flush">
                    @foreach($allLogs as $log)
                    <small>
                        <a href="{{ route('admin.settings.logs.index', $log) }}" class="list-group-item list-group-item-action px-3 {{ $log == $currentLog ? 'font-weight-bold' : '' }}">
                            {{ $log }}
                        </a>
                    </small>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection

@section('styles')
@endsection

@section('scripts')
@endsection
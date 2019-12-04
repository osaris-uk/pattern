<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <a class="navbar-brand" href="{{ route('home') }}">{{ config('app.name', 'Pattern') }}</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="adminSidenav">
        @foreach($navItems as $navItem)
                @if (count($navItem['children']))
                    <li class="nav-item" data-toggle="tooltip" data-placement="right" title="{{ $navItem->title }}">
                        <a class="nav-link nav-link-collapse @activeclass($navItem->route) @collapsedclass($navItem->route)" data-toggle="collapse" href="#{{ strtolower($navItem->title) . '-' . $navItem->id }}" data-parent="#adminSidenav">
                            {!! $navItem->icon ? '<i class="fa fa-fw ' . $navItem->icon . '"></i>' : '' !!}
                            <span class="nav-link-text">{{ $navItem->title }}</span>
                        </a>

                        <ul class="sidenav-second-level collapse @showclass($navItem->route)" id="{{ strtolower($navItem->title) . '-' . $navItem->id }}">
                            @foreach($navItem['children'] as $child)
                                @if (count($child['children']))
                                    <li>
                                        <a class="nav-link nav-link-collapse @activeclass($child->route) @collapsedclass($child->route)" data-toggle="collapse" href="#{{ strtolower($child->title) . '-' . $child->id }}" data-parent="#adminSidenav">
                                            {!! $child->icon ? '<i class="fa fa-fw ' . $child->icon . '"></i>' : '' !!}
                                            <span class="nav-link-text">{{ $child->title }}</span>
                                        </a>
                                        <ul class="sidenav-third-level collapse @showclass($child->route)" id="{{ strtolower($child->title) . '-' . $child->id }}">
                                            @foreach($child['children'] as $grandchild)
                                                <li class="nav-item @activeclass($grandchild->route)">
                                                    <a href="{{ route($grandchild->route) }}">{{ $grandchild->title }}</a>
                                                </li>
                                            @endforeach
                                        </ul>
                                    </li>
                                @else
                                    <li class="nav-item @activeclass($child->route)" data-toggle="tooltip" data-placement="right" title="{{ $child->title }}">
                                        <a class="nav-link" href="{{ $child->route ? route($child->route) : '' }}{{ $child->target }}">
                                            {!! $child->icon ? '<i class="fa fa-fw ' . $child->icon . '"></i>' : '' !!}
                                            <span class="nav-link-text">{{ $child->title }}</span>
                                        </a>
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </li>
                @else
                    <li class="nav-item @activeclass($navItem->route)" data-toggle="tooltip" data-placement="right" title="{{ $navItem->title }}">
                        <a class="nav-link" href="{{ $navItem->route ? route($navItem->route) : '' }}{{ $navItem->target }}">
                            {!! $navItem->icon ? '<i class="fa fa-fw ' . $navItem->icon . '"></i>' : '' !!}
                            <span class="nav-link-text">{{ $navItem->title }}</span>
                        </a>
                    </li>
                @endif
            @endforeach
        </ul>
        <ul class="navbar-nav sidenav-toggler">
            <li class="nav-item">
                <a class="nav-link text-center" id="sidenavToggler">
                    <i class="fa fa-fw fa-angle-left"></i>
                </a>
            </li>
        </ul>
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <form class="form-inline my-2 my-lg-0 mr-lg-2">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for...">
                        <span class="input-group-append">
                            <button class="btn btn-primary" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('logout') }}"onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                    <i class="fa fa-fw fa-sign-out-alt"></i>Logout
                </a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </li>
        </ul>
    </div>
</nav>
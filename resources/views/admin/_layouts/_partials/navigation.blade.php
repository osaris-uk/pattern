<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    <a class="navbar-brand" href="{{ route('home') }}">{{ config('app.name', 'Pattern') }}</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li class="nav-item @activeclass('admin.index')" data-toggle="tooltip" data-placement="right" title="Dashboard">
                <a class="nav-link" href="{{ route('admin.index') }}">
                    <i class="fa fa-fw fa-tachometer-alt"></i>
                    <span class="nav-link-text">Dashboard</span>
                </a>
            </li>

            <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Settings">
                <a class="nav-link nav-link-collapse @activeclass('admin.settings.') @collapsedclass('admin.settings.')" data-toggle="collapse" href="#settings" data-parent="#exampleAccordion">
                    <i class="fa fa-fw fa-cogs"></i>
                    <span class="nav-link-text">Settings</span>
                </a>
                <ul class="sidenav-second-level collapse @showclass('admin.settings.')" id="settings">
                    <li>
                        <a class="nav-link-collapse @activeclass('admin.settings.access.') @collapsedclass('admin.settings.access.')" data-toggle="collapse" href="#settingsAccess">
                            <i class="fa fa-fw fa-key"></i>    
                            <span class="nav-link-text">Access</span>
                        </a>
                        <ul class="sidenav-third-level collapse @showclass('admin.settings.access.')" id="settingsAccess">
                            <li class="nav-item @activeclass('admin.settings.access.roles')">
                                <a href="{{ route('admin.settings.access.roles') }}">User Roles</a>
                            </li>
                            <li class="nav-item @activeclass('admin.settings.access.rolepermissions')">
                                <a href="{{ route('admin.settings.access.rolepermissions') }}">Role Permissions</a>
                            </li>
                            <li class="nav-item @activeclass('admin.settings.access.index')">
                                <a href="{{ route('admin.settings.access.index') }}">Roles & Permissions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item @activeclass('admin.settings.logs.index')">
                        <a class="nav-link" href="{{ route('admin.settings.logs.index') }}">
                            <i class="fa fa-fw fa-bug"></i>
                            <span class="nav-link-text">Logs</span>
                        </a>
                    </li>
                </ul>
            </li>
            
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
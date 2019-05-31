<ul class="nav nav-pills flex-column">
    <li class="nav-item"><a class="nav-link @activeclass('account.index')" href="{{ route('account.index') }}">Account Overview</a></li>
    <li class="nav-item"><a class="nav-link @activeclass('account.profile')" href="{{ route('account.profile') }}">My Profile</a></li>
    <li class="nav-item"><a class="nav-link @activeclass('account.password')" href="{{ route('account.password') }}">Change Password</a></li>
</ul>
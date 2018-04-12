<ul class="nav nav-pills nav-stacked">
    <li class="@activeclass('account')"><a href="{{ route('account.index') }}">Account Overview</a></li>
    <li class="@activeclass('account/profile')"><a href="{{ route('account.profile') }}">My Profile</a></li>
    <li class="@activeclass('account/password')"><a href="{{ route('account.password') }}">Change Password</a></li>
</ul>
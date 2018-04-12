@component('mail::message')
# Activate Your Account

Thanks for registering, please activate your account.

@component('mail::button', ['url' => route('activate', ['token' => $user->activation_token, 'email' => $user->email])])
Activate
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent

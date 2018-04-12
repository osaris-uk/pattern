<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Events\Auth\UserRequestedActivationEmail;

class ActivationController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }
    
    public function activate(Request $request)
    {
        $user = User::byActivationTokenAndEmail($request->token, $request->email)->firstOrFail();

        $user->update([
            'active' => true,
            'activation_token' => null
        ]);

        Auth::loginUsingId($user->id);

        notify()->flash('Your account is now active and you are signed in!', 'success');

        return redirect()->route('home');
    }

    public function showResendActivationForm()
    {
        return view('auth.activation');
    }

    public function resendActivation(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email'
        ], [
            'email.exists' => 'No account with that email address exists.'
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user->activation_token || $user->active == true) {
            notify()->flash('Your account is already active', 'info');

            return redirect()->route('login');
        }

        event(new UserRequestedActivationEmail($user));

        notify()->flash('Activation link sent, please check your emails.', 'success');

        return redirect()->route('login');
    }
}

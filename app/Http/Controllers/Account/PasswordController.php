<?php

namespace App\Http\Controllers\Account;

use App\User;
use Illuminate\Http\Request;
use App\Mail\PasswordUpdated;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;

class PasswordController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('account.password');
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, User::rules());

        $request->user()->update([
            'password' => bcrypt($data['password']),
        ]);

        notify()->flash('Password Successfully Changed', 'success');

        Mail::to($request->user()->email)->send(new PasswordUpdated());

        return redirect()->route('account.index');
    }
}

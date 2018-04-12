<?php

namespace App\Http\Controllers\Account;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProfileController extends Controller
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
        return view('account.profile');
    }

    public function store(Request $request)
    {
        $data = $this->validate($request, User::rules());

        $request->user()->update($data);

        return back();
    }
}

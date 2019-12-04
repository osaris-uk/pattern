<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppSettingsController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('access:admin');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.settings.app-settings', [
            'settings' => \OsarisUk\AppSettings\Models\AppSetting::paginate()
        ]);
    }

    public function store(Request $request)
    {
        if($request->has('delete')) {
            setting()->remove($request->key);

            return back();
        }
        
        setting($request->key, $request->value);

        return back();
    }
}

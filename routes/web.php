<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

Route::get('/terms', function () {
    return view('terms');
})->name('terms');

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['access:admin']], function () {
    Route::get('/', 'Admin\AdminController@index')->name('index');

    // Settings
    Route::group(['prefix' => 'settings', 'as' => 'settings.'], function () {
        Route::get('/app-settings', 'Admin\AppSettingsController@index')->name('app-settings');
        Route::post('/app-settings', 'Admin\AppSettingsController@store');
        Route::get('/navigation', 'Admin\NavigationController@index')->name('navigation');
    });

    // Data
    Route::group(['prefix' => 'data', 'as' => 'data.'], function () {
        Route::resource('navigations', 'Admin\NavigationDataTableController');
    });
});

Route::group(['prefix' => 'account', 'as' => 'account.', 'middleware' => ['auth']], function () {
    Route::get('/', 'Account\AccountController@index')->name('index');
    Route::get('profile', 'Account\ProfileController@index')->name('profile');
    Route::post('profile', 'Account\ProfileController@store')->name('profile.store');
    Route::get('password', 'Account\PasswordController@index')->name('password');
    Route::post('password', 'Account\PasswordController@store')->name('password.store');
});

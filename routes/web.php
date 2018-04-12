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
Route::get('/activate', 'Auth\ActivationController@activate')->name('activate');
Route::get('/activate/resend', 'Auth\ActivationController@showResendActivationForm')->name('activate.resend');
Route::post('/activate/resend', 'Auth\ActivationController@resendActivation');

Route::get('/', 'HomeController@index')->name('home');
Route::get('/terms', 'HomeController@terms')->name('terms');

Route::group(['prefix' => 'account', 'as' => 'account.', 'middleware' => ['auth']], function () {
    Route::get('/', 'Account\AccountController@index')->name('index');

    Route::get('profile', 'Account\ProfileController@index')->name('profile');
    Route::post('profile', 'Account\ProfileController@store')->name('profile.store');

    Route::get('password', 'Account\PasswordController@index')->name('password');
    Route::post('password', 'Account\PasswordController@store')->name('password.store');
});

Route::group(['prefix' => 'admin', 'as' => 'admin.', 'middleware' => ['role:admin']], function () {
    Route::get('/', 'Admin\AdminController@index')->name('index');
});
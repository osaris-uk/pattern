<?php

namespace App\Providers;

use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        Blade::directive('collapsedclass', function ($route) {
            return "{{ stripos(request()->route()->getName(), $route) === 0 ? '' : 'collapsed' }}";
        });

        Blade::directive('showclass', function ($route) {
            return "{{ stripos(request()->route()->getName(), $route) === 0 ? 'show' : '' }}";
        });
    }
}

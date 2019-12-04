<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Access Defaults
    |--------------------------------------------------------------------------
    |
    | This option controls the default access settings.  The default role is
    | assigned to all users on registration.
    |
    */

    'default' => [
        'role' => 'user',
    ],
    'routes' => [
        'use_provided' => true,
        'name' => 'admin.settings.access',
        'prefix' => 'admin/settings/access',
        'middleware' => [
            'web',
            'access:admin'
        ]
    ],
];

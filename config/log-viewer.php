<?php

return [

    /*
    |-------------------------------------------------------------------------
    | Log Viewer Defaults
    |--------------------------------------------------------------------------
    |
    | This controls the default log viewer settings.
    |
    */

    'routes' => [
        'name' => 'admin.settings.logs',
        'prefix' => 'admin/settings/log',
        'middleware' => [
            'web',
            'access:admin'
        ]
    ]
];

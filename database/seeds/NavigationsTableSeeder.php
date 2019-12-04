<?php

use Illuminate\Database\Seeder;

class NavigationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('navigations')->insert([
            // Admin Navigation
            /* 01 */['title' => 'Dashboard', 'icon' => 'fas fa-tachometer-alt', 'parent_id' => null, 'order_by' => 0, 'route' => 'admin.index', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],

            /* 02 */['title' => 'Settings', 'icon' => 'fas fa-cogs', 'parent_id' => null, 'order_by' => 20, 'route' => 'admin.settings.', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                /* 03 */['title' => 'App Settings', 'icon' => 'fas fa-wrench', 'parent_id' => 2, 'order_by' => 6, 'route' => 'admin.settings.app-settings', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                /* 04 */['title' => 'Navigation', 'icon' => 'fas fa-sitemap', 'parent_id' => 2, 'order_by' => 7, 'route' => 'admin.settings.navigation', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                /* 05 */['title' => 'Access', 'icon' => 'fas fa-key', 'parent_id' => 2, 'order_by' => 8, 'route' => 'admin.settings.access.', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                    /* 06 */['title' => 'User Roles', 'icon' => null, 'parent_id' => 5, 'order_by' => 9, 'route' => 'admin.settings.access.roles', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                    /* 07 */['title' => 'Role Permissions', 'icon' => null, 'parent_id' => 5, 'order_by' => 9, 'route' => 'admin.settings.access.rolepermissions', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                    /* 08 */['title' => 'Roles & Permissions', 'icon' => null, 'parent_id' => 5, 'order_by' => 9, 'route' => 'admin.settings.access.index', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
                /* 09 */['title' => 'Logs', 'icon' => 'fas fa-bug', 'parent_id' => 2, 'order_by' => 10, 'route' => 'admin.settings.logs.index', 'target' => null, 'realm' => 'admin_sidenav', 'permission' => null, 'disabled' => false, 'created_at' => now(), 'updated_at' => now()],
        ]);
    }
}

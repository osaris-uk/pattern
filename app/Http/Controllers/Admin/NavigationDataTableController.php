<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use OsarisUk\Navigation\Models\Navigation;
use App\Http\Controllers\DataTableController;

class NavigationDataTableController extends DataTableController
{
    protected $icon = 'fas fa-sitemap';

    public function builder()
    {
        return Navigation::query();
    }

    public function crud()
    {
        return [
            'resource_route' => route('admin.settings.navigation'),
            'create' => [
                'allow' => true,
                'inline' => true,
                'creatable' => array_values($this->getCreatableColumns())
            ],
            'read' => [
                'allow' => false
            ],
            'update' => [
                'allow' => true,
                'inline' => true,
                'updatable' => array_values($this->getUpdatableColumns())
            ],
            'delete' => [
                'allow' => true
            ]
        ];
    }

    public function getDisplayableColumns()
    {
        return [
            'id',
            'title',
            'icon',
            'parent_id',
            'order_by',
            'route',
            'target',
            'realm',
            'disabled',
            'updated_at'
        ];
    }

    public function getUpdatableColumns()
    {
        return [
            'title',
            'icon',
            'parent_id',
            'order_by',
            'route',
            'target',
            'realm',
            'disabled',
        ];
    }

    public function getCustomNames()
    {
        return Navigation::customNames();
    }

    public function update($id, Request $request)
    {        
        $this->builder->find($id)->update($request->only($this->getUpdatableColumns()));
    }

    public function store(Request $request)
    {
        if (!$this->crud()['create']['allow']) {
            return;
        }

        $this->builder->create($request->only($this->getUpdatableColumns()));
    }
}

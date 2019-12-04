<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Eloquent\Builder;

abstract class DataTableController extends Controller
{
    protected $icon = null;

    protected $builder;

    abstract public function builder();

    public function __construct()
    {
        $builder = $this->builder();

        if (!$builder instanceof Builder) {
            throw new Exception('$builder not an instance of Illuminate\Database\Eloquent\Builder');
        }

        $this->builder = $builder;
    }

    public function index(Request $request)
    {
        return response()->json([
            'data' => [
                'table' => $this->builder->getModel()->getTable(),
                'icon' => $this->icon,
                'displayable' => array_values($this->getDisplayableColumns()),
                'column_type' => $this->getDatabaseColumnType(),
                'custom_names' => $this->getCustomNames(),
                'records' => $this->getRecords($request),
                'crud' => $this->crud(),
                'header' => $this->header()
            ]
        ]);
    }

    public function crud()
    {
        return [
            'resource_route' => '',
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

    public function header()
    {
        return [
            'show' => [
                'title' => true,
                'search' => true
            ]
        ];
    }

    public function update($id, Request $request)
    {
        if (!$this->crud()['update']['allow']) {
            return;
        }

        $this->builder->find($id)->update($request->only($this->getUpdatableColumns()));
    }

    public function store(Request $request)
    {
        if (!$this->crud()['create']['allow']) {
            return;
        }

        $this->builder->create($request->only($this->getUpdatableColumns()));
    }

    public function getDisplayableColumns()
    {
        return array_diff($this->getDatabaseColumnNames(), $this->builder->getModel()->getHidden());
    }

    public function getUpdatableColumns()
    {
        return $this->getDisplayableColumns();
    }

    public function getCreatableColumns()
    {
        return $this->getUpdatableColumns();
    }

    public function getCustomNames()
    {
        return [];
    }

    public function destroy($ids, Request $request)
    {
        if (!$this->crud()['delete']['allow']) {
            return;
        }

        $this->builder->whereIn('id', explode(',', $ids))->delete();
    }

    protected function getDatabaseColumnType()
    {
        $columns = $this->getDisplayableColumns();
        $columnTypes = [];

        foreach ($columns as $column) {
            $columnTypes[$column] = Schema::getColumnType($this->builder->getModel()->getTable(), $column);
        }

        return $columnTypes;
    }
    
    protected function getDatabaseColumnNames()
    {
        return Schema::getColumnListing($this->builder->getModel()->getTable());
    }

    protected function getRecords(Request $request)
    {
        $builder = $this->builder;

        if ($this->hasSearchQuery($request)) {
            $builder = $this->buildSearch($builder, $request);
        }

        return $this->builder->orderBy('id', 'asc')->paginate($request->limit, array_merge(['id'], $this->getDisplayableColumns()));
    }

    protected function hasSearchQuery(Request $request)
    {
        return count(array_filter($request->only(['column', 'operator', 'value']))) === 3;
    }

    protected function buildSearch(Builder $builder, Request $request)
    {
        $queryParts = $this->resolveQueryparts($request->operator, $request->value);

        return $builder->where($request->column, $queryParts['operator'], $queryParts['value']);
    }

    protected function resolveQueryparts($operator, $value)
    {
        return Arr::get([
            'equals' => [
                'operator' => '=',
                'value' => $value
            ],
            'contains' => [
                'operator' => 'LIKE',
                'value' => "%{$value}%"
            ],
            'starts_with' => [
                'operator' => 'LIKE',
                'value' => "{$value}%"
            ],
            'ends_with' => [
                'operator' => 'LIKE',
                'value' => "%{$value}"
            ],
            'greater_than' => [
                'operator' => '>',
                'value' => $value
            ],
            'less_than' => [
                'operator' => '<',
                'value' => $value
            ],
            'greater_than_or_equal' => [
                'operator' => '>=',
                'value' => $value
            ],
            'less_than_or_equal' => [
                'operator' => '<=',
                'value' => $value
            ],
        ], $operator);
    }
}

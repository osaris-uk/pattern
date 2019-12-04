<template>
    <div>
        <div class="card card-default" v-if="response.header.show.title || response.header.show.search">
            <div class="card-body row mx-0 align-items-md-center" v-if="response.header.show.title">
                <div class="col-md-6">
                    <h4 class="font-weight-bold pt-3">
                        <i v-if="response.icon != null" :class="response.icon">&nbsp;</i>{{ response.custom_names['table_name'] || response.table }}
                    </h4>
                </div>
                <div class="col-md-6 text-right">
                    <template v-if="response.header.show.search">
                        <template v-if="search.active">
                            <button class="btn btn-secondary ml-3" type="button" @click.prevent="search.active = !search.active">
                                <span class="fas fa-toggle-on"></span>&nbsp; Search
                            </button>
                        </template>
                        <template v-else>
                            <button class="btn btn-secondary ml-3" type="button" @click.prevent="search.active = !search.active">
                                <span class="fas fa-toggle-off"></span>&nbsp; Search
                            </button>
                        </template>
                    </template>


                    <template v-if="response.crud.create.allow">
                        <template v-if="response.crud.create.inline">
                            <template v-if="creating.active">
                                <button class="btn btn-warning pull-right ml-3" type="button" @click.prevent="creating.active = !creating.active">
                                    <span class="fas fa-times"></span>&nbsp; Cancel
                                </button>
                            </template>
                            <template v-else>
                                <button class="btn btn-primary pull-right ml-3" type="button" @click.prevent="creating.active = !creating.active">
                                    <span class="fas fa-plus"></span>&nbsp; Add New
                                </button>
                            </template>
                        </template>
                        <template v-else>
                            <a :href="response.crud.resource_route + '/create'" class="btn btn-primary pull-right">
                                <span class="fas fa-plus"></span>&nbsp; Add New
                            </a>
                        </template>
                    </template>
                </div>
            </div>

            <div class="card-body" v-if="creating.active">
                <div class="card bg-light mb-3">
                    <div class="card-body">
                        <form action="#" @submit.prevent="store">
                            <div class="form-group row" v-for="(column, index) in response.crud.create.creatable" v-bind:key="index">
                                <template v-if="response.column_type[column] === 'boolean'">
                                    <div class="col-md-3 col-form-label text-right">{{ response.custom_names[column] || column }}</div>
                                    <div class="col-md-6 align-middle">
                                        <div class="form-check">
                                            <input class="form-check-input position-static" type="checkbox" :class="{ 'is-invalid': creating.errors[column] }" :id="column" v-model="creating.form[column]">
                                            <span class="invalid-feedback" role="alert" v-if="creating.errors[column]">
                                                <strong>{{ creating.errors[column][0] }}</strong>
                                            </span>
                                        </div>
                                    </div>
                                </template>
                                <template v-else>
                                    <label :for="column" class="col-md-3 col-form-label text-right">{{ response.custom_names[column] || column }}</label>
                                    <div class="col-md-6">
                                        <input type="text" class="form-control" :class="{ 'is-invalid': creating.errors[column] }" :id="column" v-model="creating.form[column]">
                                        <span class="invalid-feedback" role="alert" v-if="creating.errors[column]">
                                            <strong>{{ creating.errors[column][0] }}</strong>
                                        </span>
                                    </div>
                                </template>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-6 offset-md-3">
                                    <button class="btn btn-outline-primary" type="submit">Create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <template v-if="!response.header.show.title">
                <div class="card-body">
                    <template v-if="search.active">
                        <a href="#" class="btn btn-secondary pull-right mr-3" @click.prevent="search.active = !search.active">
                            <span class="fas fa-toggle-on"></span>&nbsp;Search
                        </a>
                    </template>
                    <template v-else>
                        <a href="#" class="btn btn-secondary pull-right mr-3" @click.prevent="search.active = !search.active">
                            <span class="fas fa-toggle-off"></span>&nbsp;Search
                        </a>
                    </template>
                </div>
            </template>

            <div class="card-body" v-if="search.active">
                <form action="#" @submit.prevent="getRecords">
                    <label for="search">Search</label>
                    <div class="row row-fluid">
                        <div class="form-group col-md-3">
                            <select class="form-control" v-model="search.column">
                                <option :value="column" v-for="(column, index) in response.displayable" v-bind:key="index">{{ response.custom_names[column] || column }}</option>
                            </select>
                        </div>
                        <div class="form-group col-md-3">
                            <select class="form-control" v-model="search.operator">
                                <option value="equals">=</option>
                                <option value="contains">contains</option>
                                <option value="starts_with">starts with</option>
                                <option value="ends_with">ends with</option>
                                <option value="greater_than">greater than</option>
                                <option value="less_than">less than</option>
                                <option value="greater_than_or_equal">greater than or equal</option>
                                <option value="less_than_or_equal">less than or equal</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <div class="input-group">
                                <input type="text" id="search" class="form-control" v-model="search.value">
                                <div class="input-group-append">
                                    <button class="btn btn-outline-primary" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div class="row">
                    <div class="form-group col-md-10">
                        <label for="filter">Quick search current results</label>
                        <input type="text" id="filter" class="form-control" v-model="quickSearchQuery">
                    </div>

                    <div class="form-group col-md-2">
                        <label for="limit">Display records</label>
                        <select id="limit" class="form-control" v-model="limit" @change="getRecords">
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="1000">1000</option>
                            <option :value="response.records.total">All</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <div class="card card-default mt-4">
            <div class="card-header row mx-0 align-items-md-center" v-if="response.records.last_page > 1 || response.crud.delete.allow">
                <div class="col-md-6 pt-3">
                    <pagination 
                        v-if="response.records.last_page > 1"
                        :currentPage="response.records.current_page"
                        :totalPages="response.records.last_page"
                        v-on:pagination:switched="getRecords"
                    ></pagination>
                </div>

                <div class="col-md-6 text-right">
                    <div class="dropdown" v-if="response.crud.delete.allow">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="withSelectedMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" :disabled="selected.length === 0">
                            With Selected..
                        </button>
                        <div class="dropdown-menu" aria-labelledby="withSelectedMenuButton">
                            <a class="dropdown-item" href="#" @click.prevent="confirmDestroy(selected)">Delete</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-body">
                <div class="table-responsive" v-if="filteredRecords.length">
                    <table class="table table-bordered table-striped">
                        <thead class="thead-light">
                            <tr>
                                <th class="align-middle text-center" v-if="response.crud.delete.allow">
                                    <div class="form-group" style="margin-bottom: 0rem !important;" v-if="filteredRecords.length <= 500">
                                        <div class="form-check">
                                            <input class="form-check-input position-static" type="checkbox" @change="toggleSelectAll" :checked="filteredRecords.length === selected.length">
                                        </div>
                                    </div>
                                </th>
                                <th class="text-nowrap align-middle" v-for="(column, index) in response.displayable" v-bind:key="index">
                                    <span class="sortable" @click="sortBy(column)">
                                        {{ response.custom_names[column] || column }}
                                        <div class="arrow" v-if="sort.key === column" :class="{ 'arrow--asc': sort.order === 'asc', 'arrow--desc': sort.order === 'desc' }"></div>
                                    </span>
                                </th>
                                <th v-if="response.crud.read.allow || response.crud.update.allow || response.crud.delete.allow">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(record, index) in filteredRecords" v-bind:key="index">
                                <td class="align-middle text-center" v-if="response.crud.delete.allow">
                                    <div class="form-group" style="margin-bottom: 0rem !important;">
                                        <div class="form-check">
                                            <input class="form-check-input position-static" type="checkbox" v-model="selected" :value="record.id">
                                        </div>
                                    </div>
                                </td>
                                <td class="text-nowrap align-middle" v-for="(columnValue, column, index) in displayableColumns(record)" v-bind:key="index">
                                    <template v-if="editing.id === record.id && isUpdatable(column)">
                                        <div class="form-group text-center" style="margin-bottom: 0rem !important;">
                                            <template v-if="response.column_type[column] === 'boolean'">
                                                <div class="form-check">
                                                    <input class="form-check-input position-static" type="checkbox" :class="{ 'is-invalid': editing.errors[column] }" value="columnValue" v-model="editing.form[column]">
                                                </div>
                                            </template>
                                            <template v-else>
                                                <input type="text" class="form-control" :class="{ 'is-invalid': editing.errors[column] }" value="columnValue" v-model="editing.form[column]">
                                            </template>
                                            <span class="invalid-feedback" role="alert" v-if="editing.errors[column]">
                                                <strong>{{ editing.errors[column][0] }}</strong>
                                            </span>
                                        </div>
                                    </template>
                                    <template v-else>
                                        {{ columnValue }}
                                    </template>
                                </td>
                                
                                <td class="text-nowrap align-middle text-center" v-if="response.crud.read.allow || response.crud.update.allow || response.crud.delete.allow">
                                    <template v-if="response.crud.update.allow">
                                        <template v-if="response.crud.update.inline">
                                            <button type="button" class="btn btn-default btn-xs icon-btn md-btn-flat" @click.prevent="edit(record)" v-if="editing.id !== record.id"><i class="fas fa-pencil-alt"></i></button>
                                            <template v-if="editing.id === record.id">
                                                <button type="button" class="btn btn-default btn-xs icon-btn md-btn-flat" @click.prevent="update"><i class="fas fa-save"></i></button>
                                                <button type="button" class="btn btn-default btn-xs icon-btn md-btn-flat" @click.prevent="editing.id = null"><i class="fas fa-times"></i></button>
                                            </template>
                                        </template>
                                        <template v-else>
                                            <a :href="response.crud.resource_route + '/' + record.id + '/edit'" class="btn btn-default btn-xs icon-btn md-btn-flat"><i class="fas fa-pencil-alt"></i></a>
                                        </template>
                                    </template>
                                    <a :href="response.crud.resource_route + '/' + record.id" class="btn btn-default btn-xs icon-btn md-btn-flat" v-if="response.crud.read.allow"><i class="fas fa-search"></i></a>
                                    <button type="button" class="btn btn-default btn-xs icon-btn md-btn-flat" @click.prevent="confirmDestroy(record.id)" v-if="response.crud.delete.allow"><i class="fas fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p class="text-center" v-else>
                    No results found.
                </p>
            </div>
            <div class="card-footer row mx-0 align-items-md-center" v-if="response.records.last_page > 1">
                <div class="col-md-12 pt-3">
                    <pagination
                        :currentPage="response.records.current_page"
                        :totalPages="response.records.last_page"
                        v-on:pagination:switched="getRecords"
                    ></pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import queryString from 'query-string'
    import pagination from './Pagination.vue'

    export default {
        props: ['endpoint'],
        components: {
            pagination
        },
        data () {
            return {
                response: {
                    table: '',
                    icon: '',
                    displayable: [],
                    column_type: [],
                    custom_names: [],
                    records: {
                        data: []
                        },
                    crud: {
                        create: {
                            allow: false
                        },
                        read: {
                            allow: false
                        },
                        update: {
                            allow: false
                        },
                        delete: {
                            allow: false
                        }
                    },
                    header: {
                        show: {
                            title: false,
                            search: false
                        }
                    }
                },
                sort: {
                    key: 'id',
                    order: 'asc'
                },
                limit: 50,
                page: 1,
                quickSearchQuery: '',
                editing: {
                    id: null,
                    form: {},
                    errors: []
                },
                search: {
                    value: '',
                    operator: 'equals',
                    column: 'id',
                    active: false
                },
                creating: {
                    active: false,
                    form: {},
                    errors: []
                },
                selected: []
            }
        },
        computed: {
            filteredRecords () {
                let data = this.response.records.data

                data = data.filter((row) => {
                    return Object.keys(row).some((key) => {
                        return String(row[key]).toLowerCase().indexOf(this.quickSearchQuery.toLowerCase()) > -1
                    })
                })

                if (this.sort.key) {
                    data = _.orderBy(data, (i) => {
                        let value = i[this.sort.key]

                        if (!isNaN(parseFloat(value))) {
                            return parseFloat(value)
                        }

                        return String(i[this.sort.key]).toLowerCase()
                    }, this.sort.order)
                }

                return data
            }
        },
        methods: {
            getRecords (page) {
                if(page) {
                    this.page = page
                }

                return axios.get(`${this.endpoint}?${this.getQueryParameters()}`).then((response) => {
                    this.response = response.data.data
                })
            },
            displayableColumns (record) {
                return _.pick(record, this.response.displayable)
            },
            getQueryParameters () {
                return queryString.stringify({
                    page: this.page,
                    limit: this.limit,
                    ...this.search
                })
            },
            sortBy (column) {
                this.sort.key = column
                this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc'
            },
            edit (record) {
                this.editing.errors = []
                this.editing.id = record.id
                this.editing.form = _.pick(record, this.response.crud.update.updatable)
            },
            isUpdatable (column) {
                return this.response.crud.update.updatable.includes(column)
            },
            update () {
                axios.patch(`${this.endpoint}/${this.editing.id}`, this.editing.form).then(() => {
                    this.getRecords().then(() => {
                        this.editing.id = null
                        this.editing.form = {}
                    })
                }).catch((error) => {
                    if (error.response.status === 422 ) {
                        this.editing.errors = error.response.data.errors
                    }
                })
            },
            store () {
                axios.post(`${this.endpoint}`, this.creating.form).then(() => {
                    this.getRecords().then(() => {
                        this.creating.active = false
                        this.creating.form = {}
                        this.creating.errors = []
                    })
                }).catch((error) => {
                    if (error.response.status === 422 ) {
                        this.creating.errors = error.response.data.errors
                    }
                })
            },
            confirmDestroy (records) {
                if (window.swal) {
                    swal({
                        title: "Are you sure?",
                        icon: "warning",
                        buttons: {
                            cancel: "Cancel",
                            confirm: "Delete",
                        },
                        dangerMode: true,
                    }).then((confirmDelete) => {
                        if (!confirmDelete) {
                            return
                        }
                        this.destroy(records)
                    })
                } else {
                    if (!window.confirm(`Are you sure?`)) {
                        return
                    }
                    this.destroy(records)
                }
            },
            destroy (records) {
                axios.delete(`${this.endpoint}/${records}`).then(() => {
                    this.selected = []
                    this.getRecords()
                })
            },
            toggleSelectAll () {
                if  (this.selected.length === this.filteredRecords.length) {
                    this.selected = []
                    return
                }
                this.selected = _.map(this.filteredRecords, 'id')
            }
        },
        mounted() {
            this.getRecords()
        }
    }
</script>

<style lang="scss">
    .sortable {
        cursor: pointer;
    }
    .arrow {
        display: inline-block;
        vertical-align: middle;
        width: 0;
        height: 0;
        margin-left: 5px;
        opacity: .6;

        &--asc {
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 4px solid #222;
        }

        &--desc {
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid #222;
        }
    }
</style>

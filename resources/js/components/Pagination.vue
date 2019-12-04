<template>
    <nav aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                <a class="page-link" href="#" @click.prevent="switchPage(currentPage - 1)">
                    Previous
                </a>
            </li>
            <template v-if="section > 1">
                <li class="page-item">
                    <a class="page-link" href="#" @click.prevent="switchPage(1)">
                        1
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" @click.prevent="goForwardASection">
                        ...
                    </a>
                </li>
            </template>
            <li class="page-item" v-for="page in pages" :class="{ 'active': currentPage === page }" v-bind:key="page">
                <a class="page-link" href="#" @click.prevent="switchPage(page)">
                    {{ page }}
                </a>
            </li>
            <template v-if="section < sections">
                <li class="page-item">
                    <a class="page-link" href="#" @click.prevent="goBackASection">
                        ...
                    </a>
                </li>
                <li class="page-item">
                    <a class="page-link" href="#" @click.prevent="switchPage(totalPages)">
                        {{ totalPages }}
                    </a>
                </li>
            </template>
            <li class="page-item" :class="{ 'disabled': currentPage === totalPages }">
                <a class="page-link" href="#" @click.prevent="switchPage(currentPage + 1)">
                    Next
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            currentPage: Number,
            totalPages: Number
        },
        data () {
            return {
                qtyPerSection: 7
            }
        },
        computed: {
            section () {
                return Math.ceil(this.currentPage / this.qtyPerSection)
            },
            sections () {
                return Math.ceil(this.totalPages / this.qtyPerSection)
            },
            lastPage () {
                let lastPage = ((this.section - 1) * this.qtyPerSection) + this.qtyPerSection

                if (this.section === this.sections) {
                    lastPage = this.totalPages
                }

                return lastPage
            },
            pages () {
                return _.range(
                    (this.section - 1) * this.qtyPerSection + 1,
                    this.lastPage + 1
                )
            }
        },
        methods: {
            switchPage (page) {
                if (page < 1 || page > this.totalPages) {
                    return
                }
                this.$emit('pagination:switched', page)
            },
            goForwardASection () {
                this.switchPage(
                    this.firstPageOfSection(this.section - 1)
                )
            },
            goBackASection () {
                this.switchPage(
                    this.firstPageOfSection(this.section + 1)
                )
            },
            firstPageOfSection (section) {
                return (section - 1) * this.qtyPerSection + 1
            }
        }
    }
</script>

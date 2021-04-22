<template>
    <div class="pagination">
        <a v-if="currentPage > 1" @click="setPage(currentPage - 1)">poprzednia</a>
        <a v-if="currentPage === 2 || currentPage === 3" @click="setPage(1)">1</a>
        <a v-if="currentPage > 3" @click="setPage(1)">1</a>
        <a v-if="currentPage === 3" @click="setPage(2)">2</a>
        <span v-if="currentPage > 3">...</span>
        <a v-if="currentPage > 3" @click="setPage(currentPage - 1)">{{currentPage - 1}} </a>
        
        <a class="jp-current">{{currentPage}}</a>
        <a v-if="currentPage > 3 && currentPage < maxPage - 1" @click="setPage(currentPage + 1)">{{currentPage +1}} </a>

        <a v-if="currentPage === 1" @click="setPage(currentPage + 1)">{{currentPage + 1}}</a>
        <a v-if="currentPage === 1" @click="setPage(currentPage + 2)">{{currentPage + 2}}</a>
        <span v-if="currentPage < maxPage - 2">...</span>
        <a v-if="currentPage !== maxPage" @click="setPage(maxPage)">{{maxPage}}</a>
        <a v-if="currentPage < maxPage" @click="currentPage++">następna</a>
    </div>
</template>

<script>
export default {
    name: "ApartmentsListPagination",
    data(){
        return {
            currentPage: 1,
            maxPage: 30
        }
    },
    watch: {
        currentPage(val) {
            this.$emit("page-changed", val)
        }
    },
    methods: {
        setPage(page) {
            this.currentPage = page
        }
    }
}
</script>
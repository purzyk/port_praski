<template>
    <div class="pagination">
        <a v-if="currentPage > 1" @click="currentPage--">poprzednia</a>
        <a v-if="currentPage > 3">1</a>
        <a v-if="currentPage === 2">1</a>
        <a v-if="currentPage === 3">2</a>
        <span v-if="currentPage > 4">...</span>
        <a v-if="currentPage > 2">{{currentPage - 1}} </a>
        
        <a class="jp-current">{{currentPage}}</a>
        <a v-if="currentPage > 3 && currentPage < maxPage - 1">{{currentPage +1}} </a>

        <a v-if="currentPage === 1">{{currentPage + 1}}</a>
        <a v-if="currentPage === 1">{{currentPage + 2}}</a>
        <span v-if="currentPage < maxPage - 2">...</span>
        <a v-if="currentPage !== maxPage">{{maxPage}}</a>
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
    computed: {
        
    }
}
</script>
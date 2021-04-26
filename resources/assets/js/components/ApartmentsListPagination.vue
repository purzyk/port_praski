<template>
    <div class="pagination">
        <a v-if="currentPage > 1" @click="setPage(currentPage - 1)"
            >poprzednia</a
        >
  
        <a v-if="currentPage >= 2" @click="setPage(1)">1</a>
        <a v-if="currentPage === 3" @click="setPage(2)">2</a>
        <span v-if="currentPage > 3">...</span>
        <a v-if="currentPage > 3" @click="setPage(currentPage - 1)"
            >{{ currentPage - 1 }}
        </a>

        <a class="jp-current " @click="setPage(currentPage)">{{
            currentPage
        }}</a>
        <a
            v-if="currentPage > 1 && currentPage < maxPage - 1"
            @click="setPage(currentPage + 1)"
            >{{ currentPage + 1 }}
        </a>

        <a
            v-if="currentPage === 1 && currentPage < maxPage"
            @click="setPage(currentPage + 1)"
            >{{ currentPage + 1 }}</a
        >
        <a
            v-if="currentPage === 1 && currentPage < maxPage - 2"
            @click="setPage(currentPage + 2)"
            >{{ currentPage + 2 }}</a
        >
        <span v-if="currentPage < maxPage - 1">...</span>
        <a v-if="currentPage < maxPage - 1" @click="setPage(maxPage)">{{
            maxPage
        }}</a>
        <a v-if="currentPage < maxPage" @click="setPage(currentPage + 1)"
            >następna</a
        >
    </div>
</template>

<script>
export default {
    name: "ApartmentsListPagination",
    props: ["maxPage", "currentPage"],
    data() {
        return {};
    },
    methods: {
        setPage(page) {
            if (document.querySelector('#lista-mieszkan')) {
                document.querySelector('#lista-mieszkan').scrollIntoView()
            }
            this.$emit("page-changed", page);
        },
    },
};
</script>

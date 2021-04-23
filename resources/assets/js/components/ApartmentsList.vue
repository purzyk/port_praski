<template>
    <div>
        <div class="l-wrapper">
            <h1 class="fnt50 znajdzLokal__title text-center">Znajdź lokal</h1>

            <div class="znajdzLokal__main__meta__content --mobile">
                <span class="--blue"
                    >liczba ofert
                    <span class="counter" style="padding-right: 1px">{{ allFilteredApartments }}</span>
                </span>
                <span
                    >(<span class="total">{{ allApartmentsCount }}</span
                    >)</span
                >
            </div>
            <div
                class="line znajdzLokal__line --mobile"
                data-aos="width"
                data-aos-duration="800"
            ></div>
            <button
                class="btn --mobile --filtry"
                @click="showFilters"
            >
                <span>pokaż filtry</span>
            </button>
            <div class="znajdzLokal__main__meta__content --mobile">
                <span>sortuj:</span>
                <button
                    data-sort="sort:asc"
                    class="--sort sortUp"
                    v-if="!sortAsc"
                    @click="sortApartments"
                >
                    nazwa
                </button>
                <button
                    v-else
                    @click="sortApartments"
                    data-sort="sort:desc"
                    class="--sort sortDown"
                >
                    nazwa
                </button>
            </div>
        </div>
        <div class="l-wrapper --noPadding --noRelative">
            <div class="znajdzLokal__wrapper">
                <ApartmentsListFilters
                    :filters="filters"
                    :investments="investments"
                    :extra="extra"
                    :maxArea="maxArea"
                    :maxFloor="maxFloor"
                    :maxRooms="maxRooms"
                    :minArea="minArea"
                    :minFloor="minFloor"
                    :minRooms="minRooms"
                    :showFiltersMobile="showFiltersMobile"
                    @reset-filters="resetFilters"
                    @close-filters="closeFilters"
                />
                <section class="znajdzLokal__main">
                    <div class="znajdzLokal__main__meta">
                        <div class="znajdzLokal__main__meta__content --desktop">
                            <span class="--blue"
                                >liczba ofert
                                <span class="counter" >{{
                                    allFilteredApartments
                                }}</span>
                            </span>
                            <span style="margin-left: 5px;"
                                >(<span class="total">{{
                                    allApartmentsCount
                                }}</span
                                >)</span
                            >
                        </div>

                        <div class="znajdzLokal__main__meta__content --desktop">
                            <span>sortuj:</span>
                            <button
                                data-sort="sort:asc"
                                class="--sort sortUp"
                                v-if="!sortAsc"
                                @click="sortApartments"
                            >
                                nazwa
                            </button>
                            <button
                                v-else
                                @click="sortApartments"
                                data-sort="sort:desc"
                                class="--sort sortDown"
                            >
                                nazwa
                            </button>
                        </div>
                    </div>
                    <ApartmentsListItem
                        v-for="item in paginatedApartments"
                        :apartment="item"
                        :key="item.id"
                        :investment="
                            getInvestmentName(item._primary_term_inwestycja)
                        "
                    />
                    <ApartmentsListPagination
                        :maxPage="maxPage"
                        :currentPage="currentPage"
                        @page-changed="setCurrentPage"
                        v-if="filteredApartments.length"
                    />

                    <div v-else>
                        <p class="text-center">
                            Brak mieszkań o wybranych parametrach
                        </p>
                    </div>
                </section>
            </div>
        </div>
        
    </div>
</template>

<script>
import ApartmentsListItem from "./ApartmentsListItem.vue";
import ApartmentsListFilters from "./ApartmentsListFilters.vue";
import ApartmentsListPagination from "./ApartmentsListPagination.vue";
export default {
    name: "ApartmentsList",
    components: {
        ApartmentsListItem,
        ApartmentsListFilters,
        ApartmentsListPagination,
    },
    data() {
        return {
            apartments: [],
            filteredApartments: [],
            currentPage: null,
            investments: [],
            extra: [],
            filters: {
                rooms: [],
                area: [],
                floor: [],
                extra: [],
                type: [],
                investments: [],
            },
            perPage: 10,
            maxFloor: 0,
            minFloor: 0,
            maxRooms: 0,
            minRooms: 0,
            maxArea: 0,
            minArea: 0,
            allApartmentsCount: null,
            sortAsc: true,
            showFiltersMobile: false,
            initalFilters: null
        };
    },
    computed: {
        allFilteredApartments() {
            return this.filteredApartments.length;
        },
        paginatedApartments() {
            return this.filteredApartments.slice(
                this.currentPage * this.perPage - this.perPage,
                this.currentPage * this.perPage
            );
        },
        maxPage() {
            return Math.ceil(this.filteredApartments.length / this.perPage);
        },
    },
    methods: {
        prepareInitialValues() {
            this.filters.investments = []
            this.filters.type = []
            this.filters.extra = []
            const minRooms = Math.min.apply(
                Math,
                this.apartments.map(function(item) {
                    return item.liczba_pokoi;
                })
            );
            const maxRooms = Math.max.apply(
                Math,
                this.apartments.map(function(item) {
                    return item.liczba_pokoi;
                })
            );
            this.maxRooms = maxRooms;
            this.minRooms = minRooms
            this.filters.rooms = [minRooms, maxRooms];

            const minArea = Math.min.apply(
                Math,
                this.apartments.map(function(item) {
                    return item.powierzchnia;
                })
            );
            const maxArea = Math.max.apply(
                Math,
                this.apartments.map(function(item) {
                    return item.powierzchnia;
                })
            );

            this.filters.area = [minArea, maxArea];
            this.maxArea = maxArea;
            this.minArea = minArea
            const minFloor = Math.min.apply(
                Math,
                this.apartments.map(function(item) {
                    return item.pietro;
                })
            );
            const maxFloor = Math.max.apply(
                Math,
                this.apartments.map(function(item) {
                    return item.pietro;
                })
            );

            this.filters.floor = [minFloor, maxFloor];
            this.maxFloor = maxFloor;
            this.minFloor = minFloor
            // if (this.investments !== null) {
            //     this.filters.investments = this.investments.map(
            //         (item) => item.id
            //     );
            // }

            this.allApartmentsCount = this.apartments.length;
            this.currentPage = 1;
        },
        getInvestmentName(id) {
            if (this.investments) {
                console.log('LALALA')
                const numberID = Number(id);
                const investment = this.investments.find(
                    (item) => item.id === numberID
                );
                return investment ? investment.title : "";
            } else {
                console.log('LALALA2')
                const numberID = Number(id);
                const investment = investmentsNames.find(
                    (item) => item.id === numberID
                );
                console.log(numberID)
                return investment ? investment.title : "";
            }
        },
        filterApartments() {
            this.filteredApartments = this.apartments;

            // rooms filter

            this.filteredApartments = this.filteredApartments.filter((item) => {
                if (
                    item.liczba_pokoi >= this.filters.rooms[0] &&
                    item.liczba_pokoi <= this.filters.rooms[1]
                ) {
                    return item;
                }
            });

            // area filter

            this.filteredApartments = this.filteredApartments.filter((item) => {
                if (
                    item.powierzchnia >= this.filters.area[0] &&
                    item.powierzchnia <= this.filters.area[1]
                ) {
                    return item;
                }
            });

            // investments filter

            this.filteredApartments = this.filteredApartments.filter((item) => {
                if (!this.filters.investments.length) {
                    return item;
                } else if (
                    this.filters.investments.length &&
                    this.filters.investments.includes(
                        Number(item.custom._primary_term_inwestycja)
                    )
                ) {
                    return item;
                }
            });

            // floor filter

            this.filteredApartments = this.filteredApartments.filter((item) => {
                if (
                    item.custom.pietro >= this.filters.floor[0] &&
                    item.custom.pietro <= this.filters.floor[1]
                ) {
                    return item;
                }
            });

            // extra filter

            this.filteredApartments = this.filteredApartments.filter((item) => {
                if (!this.filters.extra.length) {
                    return item;
                } else if (
                    this.filters.extra.length &&
                    this.filters.extra.includes(Number(item.custom.dodatkowo))
                ) {
                    return item;
                }
            });

            // type filter

            this.filteredApartments = this.filteredApartments.filter((item) => {
                if (!this.filters.type.length) {
                    return item;
                } else if (
                    this.filters.type.length &&
                    this.filters.type.includes(item.typ)
                ) {
                    return item;
                }
            });

            console.log(this.filteredApartments)
            this.setCurrentPage(1);
        },
        sortApartments() {
            if (this.sortAsc) {
                this.filteredApartments = this.filteredApartments.sort((a, b) =>
                    a.post_title > b.post_title ? -1 : 1
                );
            } else {
                this.filteredApartments = this.filteredApartments.sort((a, b) =>
                    a.post_title < b.post_title ? -1 : 1
                );
            }
            this.sortAsc = !this.sortAsc;
            this.setCurrentPage(1);
        },
        setCurrentPage(page) {
            this.currentPage = page;
        },
        closeFilters() {
            this.showFiltersMobile = false;
            this.filterApartments()
            const apartmentsList = document.querySelector('.znajdzLokal__main')
            const footer = document.querySelector('.wSprawieOferty')
            if(this.showFiltersMobile) {
                apartmentsList.style.display = "none"
                footer.style.display = "none"
            } else {
                apartmentsList.style.display = "block"
                footer.style.display = "block"
            }
        },
        resetFilters() {
            const investmntsCheckbox = document.querySelectorAll(".filters-checkbox")
            Array.from(investmntsCheckbox).forEach(item => {
                item.checked = false
            })
            this.prepareInitialValues()
            this.filterApartments()
        },
        showFilters() {
            this.showFiltersMobile = !this.showFiltersMobile
            const apartmentsList = document.querySelector('.znajdzLokal__main')
            const footer = document.querySelector('.wSprawieOferty')
            if(this.showFiltersMobile) {
                apartmentsList.style.display = "none"
                footer.style.display = "none"
            } else {
                apartmentsList.style.display = "block"
                footer.style.display = "block"
            }
        }
    },
    watch: {
        filters: {
            deep: true,
            immediate: false,
            handler: function(val) {
                this.filterApartments();
            },
        },
    },
    mounted() {
        const apartmentsValues = document.querySelector("#apartmentsListValues")
            .value;
        const investmentsValues = document.querySelector("#investmentsValues")
            .value;
        const extraValues = document.querySelector("#extraValues").value;
        const parsedApartments = JSON.parse(apartmentsValues);
        const parsedInvestments = JSON.parse(investmentsValues);
        const parsedExtraValues = JSON.parse(extraValues);
        this.apartments = parsedApartments;
        console.log(parsedInvestments)
        this.investments = parsedInvestments;
        this.extra = parsedExtraValues;
        this.prepareInitialValues();

        this.filterApartments();
    }
};

const investmentsNames = [
    {
        id: 7,
        title: "Port II"
    },
    {
        id: 11,
        title: "Sierakowskiego II"
    },
    {
        id: 6,
        title: "Port"
    },
    {
        id: 10,
        title: "Sierakowskiego 4"
    },
    {
        id: 12,
        title: "Sierakowskiego 5"
    },
    {
        id: 13,
        title: "Lokale usługowe"
    }
]
</script>

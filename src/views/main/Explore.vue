<template>
    <div>
        <div class="d-flex">
            <div class="text-center pr-5">
                <v-menu
                    v-model="filterOpened"
                    :close-on-content-click="false"
                    transition="fab-transition"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            dark
                            color="indigo darken-3"
                            v-bind="attrs"
                            v-on="on"
                        >
                            Filter Results By
                        </v-btn>
                    </template>
                    <FilterNasa
                        @cancelFilter="filterOpened = false"
                        @cancelFilterAndFilter="filterAccordingly($event)"
                    />
                </v-menu>
            </div>

            <v-text-field
                prepend-inner-icon="mdi-magnify"
                placeholder="Search for..."
                label="Solo"
                dense
                solo
                v-model="searchQuery"
                @keydown.enter="searchNasaLib()"
            />
        </div>

        <v-row v-if="false">
            <v-col v-for="n in 20" v-bind:key="n" sm="6" md="4">
                <!-- class="pa-2" -->
                <v-card
                    class="mx-auto pointer"
                    height="300"
                    min-width="300"
                    elevation="5"
                    color="white"
                    tile
                >
                    <v-hover v-slot="{ hover }">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            lazy-src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                            :aspect-ratio="16 / 9"
                            :height="300"
                            class="pa-0 ma-0"
                        >
                            <v-fade-transition>
                                <v-overlay absolute color="#dbdbdb4d">
                                    <v-icon size="60">mdi-play</v-icon>
                                </v-overlay>
                            </v-fade-transition>

                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    class="d-flex flex-column white fill-height transition-fast-in-fast-out rounded-0"
                                >
                                    <v-card-text style="max-height: 80%">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Iusto dolorum, omnis
                                        ducimus nam corrupti quod enim a est
                                        minima mollitia accusantium? Beatae esse
                                        odit quo repellendus labore repellat,
                                        optio architecto molestias? Autem lab
                                    </v-card-text>

                                    <v-spacer></v-spacer>

                                    <v-card-actions>
                                        <v-btn color="purple white--text" small>
                                            View more details
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                </v-card>
            </v-col>
        </v-row>

        <!-- Section -->
        <v-row v-if="response">
            <v-col v-for="el in response" :key="el.href" sm="6" md="4">
                <!-- height="360" -->
                <v-card
                    class="mx-auto pointer"
                    height="300"
                    min-width="300"
                    elevation="5"
                    color="white"
                    tile
                >
                    <v-hover v-slot="{ hover }">
                        <v-img
                            :src="el.links[0].href"
                            :lazy-src="el.links[0].href"
                            :aspect-ratio="16 / 9"
                            :height="300"
                            class="pa-0 ma-0"
                        >
                            <!-- Only added if media type is video -->
                            <v-fade-transition
                                v-if="
                                    !hover && el.data[0].media_type === 'video'
                                "
                            >
                                <v-overlay absolute color="#dbdbdb4d">
                                    <v-icon size="60">mdi-play-circle</v-icon>
                                </v-overlay>
                            </v-fade-transition>

                            <v-expand-transition>
                                <v-card
                                    v-if="hover"
                                    class="d-flex flex-column white v-card--reveal fill-height transition-fast-in-fast-out rounded-0"
                                >
                                    <!-- {{ el.data[0].description }} -->
                                    <v-card-title
                                        v-text="el.data[0].title"
                                        class="d-block text-truncate min-20"
                                    />
                                    <v-card-text
                                        class="grey--text text--darken-4 max-60"
                                    >
                                        {{ el.data[0].description }}
                                    </v-card-text>

                                    <v-spacer></v-spacer>

                                    <v-card-actions class="white min-20">
                                        <v-btn color="purple" text small>
                                            View more details
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-expand-transition>
                        </v-img>
                    </v-hover>
                </v-card>
            </v-col>
        </v-row>

        <v-progress-circular
            v-if="loading"
            :size="70"
            :width="3"
            color="purple"
            indeterminate
        />

        <h1 v-if="noResult">No result</h1>
    </div>
</template>

<script>
import FilterNasa from "@/components/Fragments/explore/FilterNasa";
import Vuetify from "vuetify";
import Vue from "vue";

export default {
    components: {
        FilterNasa
    },
    data: () => ({
        filterOpened: false,
        searchQuery: "",

        conf: {
            video: true,
            image: true,
            year_start: 1960,
            year_end: 2010
        },

        // api
        response: null,
        loading: false,
        noResult: false
    }),
    methods: {
        filterAccordingly: function(data) {
            Vue.set(this, "conf", Object.assign({}, data));
            this.searchNasaLib();
        },

        searchNasaLib: async function() {
            this.loading = true;
            this.noResult = false;

            // add query to object
            this.conf = { ...this.conf, query: this.searchQuery };

            // get response from $nasa
            let data = await this.$nasa.img_video_lib(this.conf);

            if (data) {
                this.proccessApiData(data);
            }

            if (data.length === 0) {
                this.noResult = true;
            }

            this.loading = false;
        },
        // [End] searchNasaLib

        proccessApiData: function(data) {
            console.log([...data]);
            Vue.set(this, "response", data);

            // data.forEach(el => {
            // 	let title = el.data[0].title
            // 	let previewImage = el.links[0].href

            // 	console.log('==========================')
            // 	console.log(title)
            // 	console.log(previewImage)
            // 	console.log('==========================')
            // })
        }
    }
};
</script>

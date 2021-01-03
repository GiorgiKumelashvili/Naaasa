<template>
    <div>
        <v-navigation-drawer
            v-model="drawer"
            :mini-variant.sync="mini"
            app
            width="200"
        >
            <!-- Sidebar Header -->
            <v-list-item class="pt-4">
                <v-list-item-content>
                    <v-list-item-title class="title" v-text="title" />
                </v-list-item-content>

                <v-list-item-avatar>
                    <v-icon>mdi-music-circle</v-icon>
                </v-list-item-avatar>
            </v-list-item>

            <!-- Main Sidebar Links -->
            <v-list dense rounded>
                <template v-for="(val, key) in sidebar">
                    <!-- text-center -->
                    <v-list-item-title
                        :key="key"
                        class="
                            pa-5
                            text-display
                            grey--text
                            lighten-2--text
                            text-uppercase
                            font-weight-bold
                        "
                    >
                        <!-- purple -->
                        {{ key }}
                    </v-list-item-title>

                    <template v-for="item in val">
                        <router-link
                            tag="div"
                            class="d-flex"
                            :to="mini ? '' : item.path"
                            :key="item.title + key"
                        >
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon v-text="item.icon" />
                                </v-list-item-icon>
                                <v-list-item-title v-text="item.title" />
                            </v-list-item>
                        </router-link>
                    </template>
                </template>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app dense>
            <v-btn v-show="moreThanMedium" @click.stop="mini = !mini" icon>
                <v-icon>mdi-chevron-left</v-icon>
            </v-btn>

            <!-- Icon after screen under lg -->
            <v-app-bar-nav-icon
                v-show="isOrLessThanMedium"
                @click.stop="drawer = !drawer"
                color="purple darken-2"
            />

            <!-- <div class="d-flex">
                <v-list-item class="pointer">Music</v-list-item>
                <v-list-item class="pointer">Library</v-list-item>
                <v-list-item class="pointer">Playlist</v-list-item>
                <v-list-item class="pointer">Podcast</v-list-item>
            </div> -->

            <v-spacer />

            <div class="d-flex align-center">
                <v-list-item>
                    <v-btn @click.stop="mini = !mini" icon>
                        <v-icon>mdi-bell-outline</v-icon>
                    </v-btn>

                    <v-btn @click.stop="mini = !mini" icon>
                        <v-icon>mdi-cog-outline</v-icon>
                    </v-btn>

                    <!-- Little config place && User icon -->
                    <div class="text-center">
                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-width="200"
                            offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn icon v-bind="attrs" v-on="on">
                                    <!-- <v-icon>mdi-apps</v-icon> -->
                                    <v-avatar
                                        size="35"
                                        class="self-align-center"
                                    >
                                        <img
                                            src="https://cdn.vuetifyjs.com/images/john.jpg"
                                            alt="John"
                                        />
                                    </v-avatar>
                                </v-btn>
                            </template>

                            <v-card>
                                <v-list>
                                    <v-list-item>
                                        <v-list-item-avatar color="purple">
                                            <v-icon
                                                dark
                                                v-text="
                                                    'mdi-account-cog-outline'
                                                "
                                            />
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title
                                                v-text="'Mini Configuration'"
                                            />
                                        </v-list-item-content>

                                        <v-list-item-action>
                                            <v-icon>
                                                {{
                                                    darkMode.enabled
                                                        ? darkMode.darkIcon
                                                        : darkMode.lightIcon
                                                }}
                                            </v-icon>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>

                                <v-divider></v-divider>

                                <v-list>
                                    <!-- Darkmode -->
                                    <v-list-item>
                                        <v-list-item-action>
                                            <v-switch
                                                v-model="darkMode.enabled"
                                                color="secondary"
                                                inset
                                            />
                                        </v-list-item-action>

                                        <v-list-item-title
                                            v-text="darkMode.text"
                                        />
                                    </v-list-item>

                                    <!-- Logout -->
                                    <v-list-item class="pa-0">
                                        <v-dialog
                                            v-model="logoutModelToggle"
                                            persistent
                                        >
                                            <template
                                                v-slot:activator="{ on, attrs }"
                                            >
                                                <v-list-item
                                                    key="logout-key"
                                                    link
                                                >
                                                    <v-list-item-icon>
                                                        <v-icon>
                                                            mdi-export
                                                        </v-icon>
                                                    </v-list-item-icon>

                                                    <v-list-item-title
                                                        dark
                                                        v-bind="attrs"
                                                        v-on="on"
                                                    >
                                                        Logout
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </template>

                                            <v-card>
                                                <v-card-title
                                                    class="headline"
                                                    v-text="
                                                        'Are you sure you want to log out !'
                                                    "
                                                />
                                                <v-card-actions>
                                                    <v-spacer />
                                                    <v-btn
                                                        text
                                                        @click="
                                                            logoutModelToggle = false
                                                        "
                                                        v-text="'Disagree'"
                                                    />
                                                    <v-btn
                                                        text
                                                        @click="logout"
                                                        v-text="'Agree'"
                                                    />
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-list-item>
                                </v-list>
                            </v-card>
                        </v-menu>
                    </div>
                </v-list-item>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
import Vue from "vue";
import Back from "@/libs/Back";

export default {
    data: () => ({
        title: "Music Store",
        username: "Giorga K",

        // Mini config section
        menu: false,

        darkMode: {
            enabled: null,
            text: "Dark Mode",
            darkIcon: "mdi-sunglasses",
            lightIcon: "mdi-white-balance-sunny"
        },

        // Sidebar section
        logoutModelToggle: false,
        drawer: true,
        mini: false,
        activeSize: null,
        sidebar: {
            menu: [
                {
                    title: "Explore",
                    icon: "mdi-flash-outline",
                    path: "/explore"
                },
                {
                    title: "Genres",
                    icon: "mdi-volume-high",
                    path: "/genres"
                },
                {
                    title: "Albums",
                    icon: "mdi-album",
                    path: "/albums"
                },
                {
                    title: "Artists",
                    icon: "mdi-account-multiple",
                    path: "/artists"
                },
                {
                    title: "Radio",
                    icon: "mdi-account-multiple",
                    path: "/radio"
                }
            ],
            library: [
                {
                    title: "Recent",
                    icon: "mdi-file-outline",
                    path: "/library/recent"
                },
                {
                    title: "Albums",
                    icon: "mdi-file-outline",
                    path: "/library/albums"
                },
                {
                    title: "Favourites",
                    icon: "mdi-file-outline",
                    path: "/library/favourites"
                }
            ],
            playlist: [
                {
                    title: "Create New",
                    icon: "mdi-plus-outline",
                    path: "/playlist/createnew"
                },
                {
                    title: "Design Flow",
                    icon: "mdi-file-outline",
                    path: "/playlist/designflow"
                },
                {
                    title: "Best of 2021",
                    icon: "mdi-file-outline",
                    path: "/playlist/bestofcurrentyear"
                }
            ]
        }
    }),

    methods: {
        toggleDarkMode: function() {
            this.$store.state.darkModeEnabled = !this.$store.state
                .darkModeEnabled;

            // Original toggling between dark mode
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        // [End] toggleDarkMode

        logout: function() {
            Back.removeCookies();
            this.$store.state.authorized = false;
            this.$router.push({ name: "auth", params: { authname: "login" } });
        }
        // [End] logout
    },

    computed: {
        moreThanMedium: function() {
            return this.activeSize === "lg" || this.activeSize === "xl";
        },

        isOrLessThanMedium: function() {
            return this.activeSize !== "lg" && this.activeSize !== "xl";
        }
    },

    watch: {
        "darkMode.enabled": {
            handler() {
                this.toggleDarkMode();
            }
        },
        "$vuetify.breakpoint.name": {
            handler() {
                Vue.set(this, "activeSize", this.$vuetify.breakpoint.name);
                const { name: screenSize } = this.$vuetify.breakpoint;
                this.drawer =
                    screenSize === "lg" || screenSize === "xl" ? true : false;

                if (this.isOrLessThanMedium) this.mini = false;
            },
            deep: true,
            immediate: true
        }
    }
};
</script>

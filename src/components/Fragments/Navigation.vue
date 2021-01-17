<template>
	<div>
		<v-navigation-drawer
			v-model="sidebarParameters.drawer"
			:width="sidebarParameters.sidebarWidth"
			app
			dark
			src="@/assets/img/sidebar_space_img.jpg"
		>
			<!-- Sidebar Header -->
			<v-list-item class="pt-4">
				<v-list-item-content class="d-flex">
					<v-list-item-title
						class="title"
						v-text="sidebarParameters.title"
					/>
				</v-list-item-content>

				<img
					src="@/assets/svg/project.svg"
					width="30"
					height="30"
					alt="space exploration icon"
				/>
			</v-list-item>

			<!-- Main Sidebar Links -->
			<v-list dense rounded>
				<template v-for="(val, key) in sidebarLinks">
					<!-- text-center -->
					<v-list-item-title
						:key="key"
						class="pa-5 text-uppercase font-weight-bold"
					>
						{{ key }}
					</v-list-item-title>

					<template v-for="item in val">
						<router-link
							tag="a"
							class="d-flex text-decoration-none"
							:to="item.path"
							:key="item.title + key"
						>
							<v-list-item link>
								<v-list-item-icon class="mr-5">
									<v-icon
										v-text="item.icon"
										class="icon-size"
									/>
								</v-list-item-icon>
								<v-list-item-title v-text="item.title" />
							</v-list-item>
						</router-link>
					</template>
				</template>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app dense>
			<v-btn
				@click="toggle()"
				:class="{ flipped: !sidebarParameters.drawer }"
				icon
			>
				<v-icon>mdi-chevron-left</v-icon>
			</v-btn>

			<v-spacer />

			<div class="d-flex align-center">
				<v-list-item>
					<v-badge
						bordered
						left
						top
						color="deep-purple accent-4"
						dot
						offset-x="20"
						offset-y="20"
					>
						<v-btn icon>
							<v-icon>mdi-bell-outline</v-icon>
						</v-btn>
					</v-badge>

					<v-btn icon>
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
											v-model="
												sidebarParameters.logoutModelToggle
											"
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
															sidebarParameters.logoutModelToggle = false
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
		username: "Giorga K",

		// Mini config section
		menu: false,

		// Sidebar section
		sidebarParameters: {
			title: "Explore Space",
			sidebarWidth: "200",
			logoutModelToggle: false,
			drawer: true,
			activeSize: null
		},

		// Dark mode section
		darkMode: {
			enabled: null,
			text: "Dark Mode",
			darkIcon: "mdi-sunglasses",
			lightIcon: "mdi-white-balance-sunny"
		},

		// Sidebar links section
		sidebarLinks: {
			menu: [
				{
					title: "News",
					icon: "mdi-email-open",
					path: "/news"
				},
				{
					title: "Explore",
					icon: "mdi-flash-outline",
					path: "/explore"
				}
			],
			library: [
				{
					title: "Recent",
					icon: "mdi-restart",
					path: "/library/recent"
				}
				// {
				//     title: "Albums",
				//     icon: "mdi-music",
				//     path: "/library/albums"
				// },
				// {
				//     title: "Favourites",
				//     icon: "mdi-heart-outline",
				//     path: "/library/favourites"
				// }
			],
			playlist: [
				{
					title: "Create New",
					icon: "mdi-plus-box-outline",
					path: "/playlist/createnew"
				}
				// {
				//     title: "Design Flow",
				//     icon: "mdi-shopping-music",
				//     path: "/playlist/designflow"
				// },
				// {
				//     title: "Best of 2021",
				//     icon: "mdi-google-earth",
				//     path: "/playlist/bestofcurrentyear"
				// }
			]
		}
	}),
	created() {
		let bool = this.$store.getters.darkModeEnabled;
		Vue.set(this.darkMode, "enabled", bool);
		this.$vuetify.theme.dark = bool;
	},

	methods: {
		toggleDarkMode: function() {
			this.$store.dispatch("toggleDarkMode");

			// Original toggling between dark mode
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
		},
		// [End] toggleDarkMode

		toggle: function() {
			this.sidebarParameters.drawer = !this.sidebarParameters.drawer;
		},
		// [End] toggle

		logout: function() {
			Back.removeCookies();
			this.$store.dispatch("setAuthorized", false);
			this.$router.push({ name: "auth", params: { authname: "login" } });
		}
		// [End] logout
	},

	computed: {
		moreThanMedium: function() {
			return (
				this.sidebarParameters.activeSize === "lg" ||
				this.sidebarParameters.activeSize === "xl"
			);
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
				this.sidebarParameters.activeSize = this.$vuetify.breakpoint.name;

				const { name: screenSize } = this.$vuetify.breakpoint;
				this.sidebarParameters.drawer =
					screenSize === "lg" || screenSize === "xl" ? true : false;
			},
			deep: true,
			immediate: true
		}
	}
};
</script>

<style scoped>
.flipped {
	transform: rotate(180deg);
}
.icon-size {
	font-size: 20px;
}
</style>

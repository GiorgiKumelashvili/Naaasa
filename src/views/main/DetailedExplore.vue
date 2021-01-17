<template>
	<!-- TODO video download needed -->
	<!-- TODO vtt srt dasamatebelia -->
	<!-- TODO needs some adjusting (add mobile src when mobile)-->

	<div>
		<!-- Test subject -->
		<v-card class="d-md-flex" v-if="false" elevation="20">
			<v-img
				max-width="400"
				max-height="500"
				src="https://images-assets.nasa.gov/image/PIA24254/PIA24254~orig.jpg"
				lazy-src="https://images-assets.nasa.gov/image/PIA24254/PIA24254~orig.jpg"
			/>

			<div class="d-flex-flex-column">
				<v-card-title class="text-h4 pb-5">Nirgal Vallis</v-card-title>

				<v-spacer></v-spacer>

				<v-card-subtitle class="d-flex flex-column">
					<span class="font-weight-black text--primary">
						NASA ID
						<span class="font-weight-medium">
							: KSC-20210102-PH-BOE01_0002
						</span>
					</span>
					<span class="font-weight-black text--primary">
						File size
						<span class="font-weight-medium">
							: 89 kB
						</span>
					</span>
					<span class="font-weight-black text--primary">
						File format
						<span class="font-weight-medium">
							: JPEG
						</span>
					</span>
					<span class="font-weight-black text--primary">
						Secondary Creator Credit:
						<span class="font-weight-medium">
							: NASA/JPL-Caltech/ASU
						</span>
					</span>
					<span class="font-weight-black text--primary">
						Date Created
						<span class="font-weight-medium">
							: 2020-11-26
						</span>
					</span>
				</v-card-subtitle>

				<h3
					class="text-body-1 purple--text pointer d-inline pl-4"
					@click="downloadImg()"
				>
					Download image
					<v-icon color="purple">mdi-download</v-icon>
				</h3>

				<v-card-subtitle class="text--primary">
					Today's VIS image shows part of Ross Crater. Located in
					Aonia Terra, the impact crater is 82 km (51 miles) in
					diameter. In addition to the dunes on the crater floor, the
					crater rim is dissected with numerous gullies, one of which
					is visible at top of the image. Orbit Number: 83304
					Latitude: -57.1209 Longitude: 251.822 Instrument: VIS
					Captured: 2020-09-24 12:56
					https://photojournal.jpl.nasa.gov/catalog/PIA24254
				</v-card-subtitle>
			</div>
		</v-card>

		<!-- Image preview -->
		<v-card
			v-if="
				Object.values(detailed).length !== 0 &&
					detailed.data[0].media_type === 'image'
			"
			class="d-md-flex ma-md-5 rounded-0"
			elevation="0"
		>
			<v-img
				:src="detailed.links[0].href"
				:lazy-src="detailed.links[0].href"
				max-height="600"
				class="pa-0 ma-0"
				alt="empty img"
			/>

			<div class="d-flex-flex-column">
				<v-card-title class="text-h4 pb-5">
					{{ detailed.data[0].title }}
				</v-card-title>

				<v-spacer></v-spacer>

				<!-- Image details -->
				<v-card-subtitle class="d-flex flex-column">
					<span class="font-weight-black text--primary">
						NASA ID
						<span class="font-weight-medium">
							: {{ detailed.data[0].nasa_id }}
						</span>
					</span>
					<span class="font-weight-black text--primary">
						<span class="text-capitalize">
							{{ detailed.data[0].media_type }} size

							<span class="font-weight-medium">
								: {{ MetaData.fileSize || "null" }}
							</span>
						</span>
					</span>
					<span class="font-weight-black text--primary">
						<span class="text-capitalize">
							{{ detailed.data[0].media_type }} name
							<span class="font-weight-medium">
								: {{ MetaData.fileName || "null" }}
							</span>
						</span>
					</span>
					<span class="font-weight-black text--primary">
						<span class="text-capitalize">
							{{ detailed.data[0].media_type }} type

							<span class="font-weight-medium">
								: {{ MetaData.fileType || "null" }}
							</span>
						</span>
					</span>
					<span class="font-weight-black text--primary">
						Secondary Creator Credit:
						<span class="font-weight-medium">
							: {{ detailed.data[0].secondary_creator }}
						</span>
					</span>
					<span class="font-weight-black text--primary">
						Date Created
						<span class="font-weight-medium">
							: {{ detailed.data[0].date_created }}
						</span>
					</span>
				</v-card-subtitle>

				<!-- Donwload link -->
				<h3
					class="text-body-1 purple--text pointer d-inline pl-4"
					@click="downloadImg(detailed.links[0].href)"
				>
					Download image
					<v-progress-circular
						size="20"
						width="2"
						color="purple"
						class="ml-2"
						v-if="loadingDownload"
						indeterminate
					/>
					<v-icon v-else color="purple">mdi-download</v-icon>
				</h3>

				<!-- Image description -->
				<v-card-subtitle
					class="text--primary"
					v-text="detailed.data[0].description"
				/>
			</div>
		</v-card>

		<!-- Video preview -->
		<v-card
			v-else-if="
				Object.values(detailed).length !== 0 &&
					detailed.data[0].media_type === 'video'
			"
			class="d-md-flex ma-md-5 rounded-0"
			elevation="0"
		>
			<iframe
				src="https://images-assets.nasa.gov/video/KSC-Orion-2018-GA_V_ESM_AT_O&C-0003/KSC-Orion-2018-GA_V_ESM_AT_O&C-0003~orig.mp4"
				frameborder="0"
				allowfullscreen
			></iframe>

			<div class="d-flex-flex-column">
				<v-card-title class="text-h4 pb-5">
					{{ detailed.data[0].title }}
				</v-card-title>

				<v-spacer></v-spacer>

				<!-- Image details -->
				<v-card-subtitle class="d-flex flex-column">
					<span class="font-weight-black text--primary">
						NASA ID
						<span class="font-weight-medium">
							: {{ detailed.data[0].nasa_id }}
						</span>
					</span>
					<span class="font-weight-black text--primary">
						<span class="text-capitalize">
							{{ detailed.data[0].media_type }} size

							<span class="font-weight-medium">
								: {{ MetaData.fileSize || "null" }}
							</span>
						</span>
					</span>
					<span class="font-weight-black text--primary">
						<span class="text-capitalize">
							{{ detailed.data[0].media_type }} type

							<span class="font-weight-medium">
								: {{ MetaData.fileType || "null" }}
							</span>
						</span>
					</span>
					<span class="font-weight-black text--primary">
						Secondary Creator Credit:
						<span class="font-weight-medium">
							: {{ detailed.data[0].secondary_creator }}
						</span>
					</span>
					<span class="font-weight-black text--primary">
						Date Created
						<span class="font-weight-medium">
							: {{ detailed.data[0].date_created }}
						</span>
					</span>
				</v-card-subtitle>

				<!-- Donwload link -->
				<h3
					class="text-body-1 purple--text pointer d-inline pl-4"
					@click="downloadImg(detailed.links[0].href)"
				>
					Download image
					<v-icon color="purple">mdi-download</v-icon>
				</h3>

				<!-- Image description -->
				<v-card-subtitle
					class="text--primary"
					v-text="detailed.data[0].description"
				/>
			</div>
		</v-card>

		<h1 v-else>No data Found</h1>

		<h1 v-if="errorOcurredOnImageDownload">
			It appears image download didn't go well plese restart and try again
		</h1>
	</div>
</template>

<script>
import Vue from "vue";
import Config from "@/libs/Config";
import axios from "axios";

export default {
	data: () => ({
		detailed: {},
		MetaData: {
			fileSize: "",
			fileType: "",
			fileName: ""
		},

		loadingDownload: false,
		errorOcurredOnImageDownload: false
	}),

	created() {
		this.setDetailedData();

		if (this.detailed && this.detailed.data[0].media_type === "image") {
			this.getMetaData();
		} else {
		}
	},

	methods: {
		setDetailedData: function() {
			// Shallow copy route data
			let detailedData = Object.assign({}, this.$route.params.data);

			// Set data (will perish after reload)
			Vue.set(this, "detailed", detailedData);

			// If Reload happend
			if (
				Object.values(detailedData).length === 0 &&
				sessionStorage.getItem(Config.sessions.detailedViewAccess)
			) {
				Vue.set(
					this,
					"detailed",
					JSON.parse(
						sessionStorage.getItem(
							Config.sessions.detailedViewAccess
						)
					)
				);
			}
		},

		getMetaDataLink: function() {
			if (this.detailed) {
				return axios({
					method: "GET",
					url: this.detailed.href
				})
					.catch(err => console.log(err))
					.then(res => res.data[res.data.length - 1])
					.then(data => data);
			}
		},

		getMetaData: async function() {
			let metaLink = await this.getMetaDataLink();

			axios({
				method: "GET",
				url: metaLink
			})
				.catch(err => console.log(err))
				.then(res => {
					let { data } = res;
					this.MetaData.fileSize = data["File:FileSize"];
					this.MetaData.fileType = data["File:FileTypeExtension"];
					this.MetaData.fileName = data["File:FileName"];
					console.log(this.MetaData);
				});
		},

		downloadImg: function(url) {
			let proxyUrl = "https://cors-anywhere.herokuapp.com/";
			let urlCreator = window.URL || window.webkitURL;
			this.loadingDownload = true;

			axios({
				url: proxyUrl + url,
				method: "GET",
				responseType: "blob"
			})
				.catch(err => {
					console.log("error ocurred");
					this.errorOcurredOnImageDownload = true;
					this.loadingDownload = false;
				})
				.then(res => {
					const blob = new Blob([res.data]);
					const url = urlCreator.createObjectURL(blob);
					const name = this.MetaData.fileName || "image.jpg";

					// create invisible a tag
					const link = document.createElement("a");
					link.href = url;
					link.setAttribute("download", name);
					document.body.appendChild(link);

					// trigger click event
					link.click();

					// remove a tag
					this.loadingDownload = false;
					document.body.removeChild(link);
				});
		}
	}
};
</script>

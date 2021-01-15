<template>
	<div>
		<!-- TODO vtt srt dasamatebelia daa loader icon mosdzrobi -->
		<!-- <iframe
			src="https://images-assets.nasa.gov/video/KSC-Orion-2018-GA_V_ESM_AT_O&C-0003/KSC-Orion-2018-GA_V_ESM_AT_O&C-0003~orig.mp4"
			frameborder="0"
			allowfullscreen
		></iframe> -->

		<v-card class="d-md-flex" elevation="20">
			<!-- TODO needs some adjusting -->
			<div class="d-flex flex-column">
				<v-card-title>Nirgal Vallis</v-card-title>

				<v-img
					width="600"
					height="700"
					src="https://images-assets.nasa.gov/image/PIA24254/PIA24254~orig.jpg"
					lazy-src="https://images-assets.nasa.gov/image/PIA24254/PIA24254~orig.jpg"
				/>
			</div>

			<div class="d-flex-flex-column">
				<v-card-subtitle class="d-flex flex-column">
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

				<v-btn color="purple white--text">
					Download <v-icon>mdi-download</v-icon>
				</v-btn>

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

		<div></div>
		<!-- <v-card v-if="Object.values(detailed).length !== 0">
			<pre>
				{{ detailed }}
			</pre
			>
		</v-card>

		<h1 v-else>No data</h1> -->
	</div>
</template>

<script>
import Vue from "vue";
import Config from "@/libs/Config";

export default {
	data: () => ({
		detailed: {}
	}),

	created() {
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
					sessionStorage.getItem(Config.sessions.detailedViewAccess)
				)
			);
		}
	}
};
</script>

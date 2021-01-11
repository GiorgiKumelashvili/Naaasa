<template>
	<div>
		<h1 class="font-weight-regular py-5">Astronomy Picture of the Day</h1>

		<v-card max-width="800" v-if="response" class="rounded-0" elevation="1">
			<v-img
				:lazy-src="response.hdurl"
				max-height="500"
				class="white--text align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			>
				<v-card-title v-text="response.date" />
			</v-img>

			<v-card-actions class="justify-end">
				<v-btn icon>
					<v-icon>mdi-heart</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-bookmark</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-share-variant</v-icon>
				</v-btn>

				<v-card-title class="text-h5">
					{{ response.title }}
				</v-card-title>
			</v-card-actions>

			<v-card-actions class="grey--text text--darken-2">
				{{ response.explanation }}
			</v-card-actions>
		</v-card>

		<v-card max-width="800" v-if="droebit" class="rounded-0" elevation="1">
			<v-img
				:lazy-src="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
				:src="'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'"
				max-height="500"
				class="white--text align-end"
				gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
			>
				<v-card-title>
					2017-10-20
				</v-card-title>
			</v-img>

			<v-card-actions class="justify-end">
				<v-btn icon>
					<v-icon>mdi-heart</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-bookmark</v-icon>
				</v-btn>

				<v-btn icon>
					<v-icon>mdi-share-variant</v-icon>
				</v-btn>

				<v-card-title class="text-h5">
					Black hole
				</v-card-title>
			</v-card-actions>

			<v-card-actions class="grey--text text--darken-2">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa quisquam esse illo error!
				Odit ex illum ab enim repudiandae Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis facilis quis suscipit libero nemo? Dolorem facilis dolorum consequuntur culpa
				similique!
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
import Vue from 'vue'

export default {
	created() {
		// this.getNasaApod()
		this.droebit = true
	},

	data: () => ({
		response: null,
		droebit: false
	}),

	methods: {
		getNasaApod: async function() {
			let data = await this.$nasa.nasa_apod()
			if (data) {
				Vue.set(this, 'response', JSON.parse(JSON.stringify(data)))
			}
		}
	}
}
</script>

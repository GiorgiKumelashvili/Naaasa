<template>
	<v-card class="mx-auto" max-width="300">
		<v-card-text>
			<!-- Media Type -->
			<div>
				<v-card-subtitle class="pa-0 py-1 text-body-1 grey--text text--darken-4">
					Media Type
				</v-card-subtitle>

				<!-- media type -->
				<v-chip-group
					v-model="coreFilter.selectedMediaType"
					@change="setFinalMediaType($event)"
					column
					multiple
				>
					<v-chip filter outlined label>
						Images
					</v-chip>
					<v-chip filter outlined label>
						Videos
					</v-chip>
				</v-chip-group>
			</div>

			<!-- Year Interval-->
			<div>
				<v-card-subtitle class="pa-0 pt-5 pb-1 text-body-1 grey--text text--darken-4">
					Year Interval
				</v-card-subtitle>

				<v-range-slider v-model="coreFilter.range" :max="coreFilter.max" :min="coreFilter.min" />

				<div class="d-flex">
					<v-select
						v-model="coreFilter.range[0]"
						@change="$set(coreFilter.range, 0, $event)"
						:items="coreFilter.years"
						menu-props="auto"
						label="Solo field"
						dense
						solo
					/>
					<v-select
						v-model="coreFilter.range[1]"
						@change="$set(coreFilter.range, 1, $event)"
						:items="coreFilter.years"
						menu-props="auto"
						label="Solo field"
						hide-details
						single-line
						dense
						solo
						class="pl-5"
					/>
				</div>
			</div>
		</v-card-text>

		<v-card-actions>
			<v-spacer />

			<v-btn text @click="$emit('cancelFilter')">
				Cancel
			</v-btn>

			<v-btn color="indigo" text>
				Filter
			</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	data: () => ({
		// Core functionalities
		coreFilter: {
			// media type
			selectedMediaType: [0],
			imageVal: 0,
			videoVal: 1,

			// year interval
			min: 1920,
			max: 2021,
			years: [].range(1920, new Date().getFullYear()),
			range: [-1920, new Date().getFullYear()]
		},

		// Final filter
		final: {
			mediaType: {
				image: true,
				video: false
			},
			yearInterval: {
				start: 1920,
				end: new Date().getFullYear()
			}
		}
	}),
	methods: {
		setFinalMediaType: function(arr) {
			this.final.mediaType.image = arr.includes(this.coreFilter.imageVal) ? true : false
			this.final.mediaType.video = arr.includes(this.coreFilter.videoVal) ? true : false
		}
		// [End] setFinalMediaType
	},
	watch: {
		'coreFilter.range': function() {
			this.final.yearInterval.start = this.coreFilter.range[0]
			this.final.yearInterval.end = this.coreFilter.range[1]
		}
	}
}
</script>

<template>
	<div>
		<div class="d-flex">
			<div class="text-center pr-5">
				<v-menu v-model="filterOpened" :close-on-content-click="false" transition="fab-transition">
					<template v-slot:activator="{ on, attrs }">
						<v-btn dark color="indigo darken-3" v-bind="attrs" v-on="on">
							Filter Results By
						</v-btn>
					</template>
					<FilterNasa @cancelFilter="filterOpened = false" />
				</v-menu>
			</div>

			<v-text-field
				prepend-inner-icon="mdi-magnify"
				placeholder="Search for..."
				label="Solo"
				dense
				solo
				v-model="searchQuery"
				@keydown.enter="onPageClick()"
			/>
		</div>
		{{ searchQuery }}
	</div>
</template>

<script>
import FilterNasa from '@/components/Fragments/explore/FilterNasa'

export default {
	created() {
		console.log('hi')
	},
	components: {
		FilterNasa
	},
	data: () => ({
		filterOpened: false,
		searchQuery: ''
	}),
	methods: {
		onPageClick: function() {
			console.log(this.searchQuery)
		}
		// [End] onPageClick
	}
}
</script>

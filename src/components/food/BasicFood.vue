<template>
    <div class="d-flex">
        <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" :src="Data.image" />

            <v-card-title>{{ Data.title }}</v-card-title>

            <!-- <v-card-text>
            <v-row
                align="center"
                class="mx-0"
            >
                <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                ></v-rating>

                <div class="grey--text ml-4">
                    4.5 (413)
                </div>
            </v-row>

            <div class="my-4 subtitle-1">
                $ • Italian, Cafe
            </div>

            <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
        </v-card-text> -->
        </v-card>
    </div>
</template>

<script>
export default {
    props: ["Data"],

    data: () => ({
        selection: 1,
    }),
};
</script>
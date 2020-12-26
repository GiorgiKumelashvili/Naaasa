<template>
    <v-card
        elevation="24"
        class="d-flex flex-column align-center mx-auto my-14"
        max-width="450"
    >
        <v-card-title v-text="404" class="text-h1" />
        <v-card-subtitle v-text="'Ooops !'" class="text-h5 mt-2" />
        <v-card-subtitle
            v-text="'Page doesn\'t exist or is unavailable'"
            class="text-h6"
        />
        <v-btn
            class="purple white--text my-4"
            @click="$router.push({ name: 'auth', params: { authname: 'login' } })"
        >
            <v-icon class="pr-2">mdi-backspace-outline</v-icon>
            Go Back
        </v-btn>
    </v-card>
</template>

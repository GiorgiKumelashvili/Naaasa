<template>
    <div class="about">
        <h1>About</h1>
        <h3>process var {{ env }}</h3>
        <h4>{{ $route.params.id }}</h4>
        <h4>{{ $route.params.x }}</h4>
    </div>
</template>

<script>
export default {
    data: () => ({
        env: process.env.VUE_APP_X,
    }),
};
</script>
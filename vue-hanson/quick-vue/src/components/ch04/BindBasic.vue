<template>
    <p><a v-bind:href="url">Google</a></p>
    <p><a :href="url">Google</a></p>
</template>


<script setup>
    import { ref } from "vue"

    const url = ref("https://google.com/")
</script>


<style></style>
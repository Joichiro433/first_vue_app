<template>
    <p v-cloak>
        {{ message }}
    </p>
</template>


<script setup>
    import { ref } from "vue"

    const message = ref("Hello, Vue!")
</script>


<style></style>

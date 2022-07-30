<template>
    <p>{{ current }}</p>
</template>


<script setup>
    import { ref } from "vue"

    const current = ref(new Date().toLocaleTimeString())

    let setTime = () => {
        current.value = new Date().toLocaleTimeString()
    }

    setInterval(setTime, 1000)
</script>


<style></style>
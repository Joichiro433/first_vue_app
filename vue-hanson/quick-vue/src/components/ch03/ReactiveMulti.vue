<template>
    <p>{{ data.current }}</p>
</template>


<script setup>
    import { reactive } from "vue"

    const data = reactive({
        current: new Date().toLocaleTimeString()
    })

    let setTime = () => {
        data.current = new Date().toLocaleTimeString()
    }

    setInterval(setTime, 1000)
</script>


<style></style>

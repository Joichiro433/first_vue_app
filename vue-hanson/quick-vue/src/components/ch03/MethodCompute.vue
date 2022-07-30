<template>
    <p>computed: {{ randomc }}</p>
    <p>method: {{ randomm() }}</p>
    <p>now: {{ current }}</p>
</template>


<script setup>
    import { ref, computed } from "vue"

    const randomc = computed(() => Math.random())
    const randomm = () => Math.random()

    const current = ref(new Date().toLocaleTimeString())

    setInterval(() => {current.value = new Date().toLocaleTimeString()}, 1000)
</script>


<style></style>
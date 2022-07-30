<template>
    {{ localEmail }}
</template>


<script setup>
    import { ref, computed } from "vue"

    const email = ref("Alice@example.com")

    const localEmail = computed(() => {
        return email.value.split("@")[0].toLowerCase()
    })    
</script>


<style></style>

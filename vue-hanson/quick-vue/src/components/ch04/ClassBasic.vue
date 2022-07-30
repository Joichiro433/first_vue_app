<template>
    <div :class="{my_c:isChange}">
        {{ message }}
    </div>
    <div :class="{my_c:!isChange}">
        {{ message }}
    </div>
</template>


<script setup>
    import { ref } from "vue"

    const message = ref("Hello, Vue.js!")
    const isChange = ref(true)
</script>


<style>
    .my_c {
        color: #f63366
    }
    .my_c2 {
        color: yellow
    }
</style>
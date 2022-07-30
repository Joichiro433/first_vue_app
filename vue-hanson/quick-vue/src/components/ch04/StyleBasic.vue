<template>
    <div v-bind:style="{ backgroundColor: color, fontSize: font_size }">
        {{ message }}
    </div>

    <div v-bind:style="mystyle">
        {{ message }}
    </div>

    <div v-bind:style="[mystyle, mystyle2]">
        {{ message }}
    </div>
</template>


<script setup>
    import { ref, reactive } from "vue"

    const message = ref("Hello, Vue.js!")
    const color = ref("Yellow")
    const font_size = ref("1.5em")

    const mystyle = reactive({
        backgroundColor: "#f63366",
        fontSize: "1.5em"
    })
    const mystyle2 = reactive({
        color: "white"
    })

</script>


<style></style>
<template>
    <div>
        <div class="btn" @click="scroll">
            トップへ
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            scroll(){
                this.$emit("click")
            }
        }
    }
</script>

<style scoped>
    div{
        font-size: 1.5rem;
    }
</style>
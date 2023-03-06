<template>
   
</template>
<script>
export default{
    props: {
        posts: {type: Array, default: []},
        activeIndex: {type: Number, default: -1}
    },
    methods: {
        updateActiveIndex(index) {
            this.$emit("update:activeIndex", index);
        }
    }
}
</script>
<style></style>
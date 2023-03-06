<template>
    <h1>post details</h1>
</template>
<script>
import MovieService from "@/services/movie.service";

export default {
    data() {
        return {
            post:{},
        };
    },
    async created(){
        const data = await  MovieService.getOnePost(this.$route.params.slug);
        this.post = data;
    }
}
</script>
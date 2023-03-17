<template>
    <div class="container play-container" v-if="post">
        <iframe :src="`https://www.youtube-nocookie.com/embed/${post.videoId}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div class="play-text">
            <h2 class="my-4">{{ post.name }} - {{ post.author }}</h2>
            <p class="my-4" style="max-width: 48.125rem;">{{ post.description }}</p>

            <div class="d-flex justify-end justify-around">
                <button @click="$router.push({name: 'edit-post', params: {slug: post.slug}})" type="button" class="mx-2 btn btn-success" >Edit</button>
                <button  @click="deletePost(post.slug)" type="button" class="btn btn-danger mx-2">Delete</button>
            </div>
        </div>
    </div>
</template>
<script>
import MovieService from "@/services/movie.service";


export default {
    props:{ slug:{type: String, required: true}},
    data() {
        return {
            post:{},
        };
    },

    async created(){
        const response = await MovieService.getOnePost(this.$route.params.slug);
        this.post = response;
        
    },
    methods: {
        async deletePost(slug){
            if(confirm('Are you sure to delete this post ?')){
                await MovieService.deletePost(slug);
                alert('Post deleted successfully!!')
                this.$router.push({name: "home"})
            }else{
                return false;
            }
        },
    },
}
</script>

<style scoped>

iframe{
    margin-top: 80px;
    width: 770px;
    height: 400px;
}

</style>
<template>
    <div class="container play-container" v-if="post">
        <div class="play">
            <iframe class="movie-img" :src="`https://www.youtube-nocookie.com/embed/${post.videoId}`" title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <div class="rate">
                <p>5.0 / 2 vote</p>
                <div class="progress" style="height: 3px;">
                    <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>                </div>
            </div>
            <div class="rate-btn">
                <button type="button" class="mx-2 btn btn-primary"><i class="fa-solid fa-thumbs-up"></i> Like</button>
                <button type="button" class="mx-2 btn btn-secondary"><i class="fa-solid fa-thumbs-down"></i> Dislike</button>
            </div>
            <div class="play-text">
                <h2>{{ post.name }}</h2>
                <h2 >Author: {{ post.author }}</h2>
                <p class="my-4" style="max-width: 48.125rem">{{ post.description }}</p>
                <p>Released: 2023-03-02</p>
                <p>Genre: Action, Drama, Horror, Science Fiction, Thriller</p>
                <p>Casts: Chloe Guidry, Nhedrick Jabier, Carmina Garay, Billy Slaughter, Carli McIntyre</p>
                <p>Country: United States of America</p>
                <p>Duration: {{ post.Time }}inute</p>
                <div class="d-flex justify-end justify-around">
                    <button @click="
                        $router.push({ name: 'edit-post', params: { slug: post.slug } })
                        " type="button" class=" btn btn-success">
                        Edit
                    </button>
                    <button @click="deletePost(post.slug)" type="button" class="btn btn-danger mx-2">
                        Delete
                    </button>
                </div>
                <button @click="changeFavorite" v-if="!this.post.favorite" class="btn-favorite d-none d-lg-block"><i class="fa-solid fa-plus"></i> Add to favorite</button>
                <button @click="changeFavorite" v-else class="btn-favorite d-none d-lg-block"><i class="fa-solid fa-trash-can"></i> Remove from favorite</button>
                <button @click="changeFavorite" v-if="!this.post.favorite" class="btn-favorite  d-lg-none"><i class="fa-solid fa-plus"></i></button>
                <button @click="changeFavorite" v-else class="btn-favorite  d-lg-none"><i class="fa-solid fa-trash-can"></i></button>
            </div>

        </div>
        <h4>You may also like</h4>
        <a href="#">
            <popular-moives/>
        </a>
    </div>
</template>
<script>
import MovieService from "@/services/movie.service";
import PopularMoives from "../components/PopularMoives.vue";
export default {
    props: { slug: { type: String, required: true } },
    components:{
        PopularMoives
    },
    data() {
        return {
            post: {},
        };
    },

    async created() {
        const response = await MovieService.getOnePost(this.$route.params.slug);
        this.post = response;
    },
    methods: {
        async deletePost(slug) {
            if (confirm("Are you sure to delete this post ?")) {
                await MovieService.deletePost(slug);
                alert("Post deleted successfully!!");
                this.$router.push({ name: "home" });
            } else {
                return false;
            }
        },
        async changeFavorite(){
            this.post.favorite = !this.post.favorite
            if(this.post.favorite==true) {
                alert('Added favorite successfully !!')
                await MovieService.updatePost(this.$route.params.slug, {'favorite': this.post.favorite})
            }else{
                alert('Remove favorite successfully !!')
                await MovieService.updatePost(this.$route.params.slug, {'favorite': this.post.favorite})
            }
        }

    },

};
</script>

<style scoped>


.play{
    margin-top: 100px;
    display: flex;
    padding: 24px 24px 60px 40px;
    border: 1px solid #252424;
    border-radius: 20px;
    box-shadow: 0px 4px 3px 4px rgba(0,0,0,0.62);
    -webkit-box-shadow: 0px 4px 3px 4px rgba(0,0,0,0.62);
    -moz-box-shadow: 0px 4px 3px 4px rgba(0,0,0,0.62);
}
.play-text{
    display: flex;
    justify-content: center;
    justify-items: center;
    flex-direction: column;
    position: relative;
}
.rate-btn{
    position: absolute;
    bottom: 120px;
    left: 150px;
}
.rate{
    position: absolute;
    bottom: 200px;
    width: 16%;
    left: 150px;
}
.movie-img {
    border-radius: 10px;
    width: 600px;
    height: 300px;
    margin: 0rem 2rem -2rem -1rem;
}

.btn-favorite{
    padding: 5px 15px;
    border-radius: 50px;
    position: absolute;
    right: 0;
    top : 0;
    background-color: #ccc;
}
h4{
    margin-top: 160px;
    color: #fff !important;
}
.btn-favorite:hover{
    opacity: 0.8;

}
@media (max-width: 992px) {
    .movie-img {
        width: 100%;
        height: 350px;
        margin-left: -0.65rem;
        border-radius: 10px;
        margin-bottom: 2rem;
        
    }
    .play-text{
        margin-top: 10rem;
    }
    .play {
        flex-direction: column;
    }
    .rate{
        width: 30%;
        position: relative;
        top: 10px;
        left: 10px;
    }
    .rate-btn{
        position: relative;
        top: 40px;
        left: 0;
    }

}
@media (max-width: 767px){
    p{
        width: 200px;
    }
    .rate{
        width: 40%;
    }
}
</style>
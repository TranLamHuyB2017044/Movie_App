<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-sm-2 mt-4 d-flex"
                v-for="post in posts"
                :key="post._id" 
              >
                <router-link :to= "{name: 'detail', params: {name: post.name}}">
                    <div class="card" style="width: 18rem;" >
                        <img  :src="`https://i.ytimg.com/vi/${post.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`" class="card-img-top" alt="">
                        <div class="card-body">
                            <h5 class="card-title">{{post.name}}</h5>
                            <h5 class="card-title">{{post.author}}</h5>
                            <p class="card-text">{{post.description.substring(0,30) + "..."}}</p>
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </div>
</template>
<script>
import MovieService from "@/services/movie.service";

export default {
  components: {
    MovieService,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created(){
    this.posts =  await MovieService.getAll();
  }

};
</script>
<style scoped>

*{
    scroll-behavior: smooth;
    color: aliceblue;
    text-decoration: none;
}
img{
    height: 220px;
}

.card{
  margin-top: 48px;
  
}
</style>
<template>
    <div class="container mt-5">
      <div class="row"> 
        <h2>Favorite Movie</h2>
        <div
          class=" col-md-4 col-lg-3 mt-5 d-flex col-12 col-sm-6 d-flex justify-content-around"
          v-for="post in posts"
          :key="post._id"
        >
          <Router-link
            class=" card-movies"
            :to="{ name: 'detail', params: { slug: post.slug}}"
            @click.native="scrollToTop"
          >
            <div class="moive">
              <img
                :src="`https://i.ytimg.com/vi/${post.videoId}/maxresdefault.jpg?sqp=-oaymwEcCNACELwBSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCN-p51NBQHBICMaXtlW6-2-F5h5Q`"
                class="card-img-top movie-img"
                :alt="post.name"
              >
              <div class="moive-title">
                <h5 v-if="post.name.length > 10">{{ post.name.substring(0, 10)+ "..." }}</h5>
                <h5 v-else>{{ post.name}}</h5>
                <i class="fa-solid fa-clock"> {{ post.Time }}</i>
            </div>
            </div>
          </Router-link>
        </div>
      </div>
    </div>
  </template>
  <script>
import MovieService from "@/services/movie.service";
  export default {
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      this.posts = await MovieService.getAllFavorites();
    },
    methods: {
      scrollToTop() {
        window.scrollTo(0, 0);
      },
  
    },
  
  };
  </script>
  <style scoped>
  * {
    scroll-behavior: smooth;
    color: white;
    text-decoration: none;
  }
  
  .heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #333335;
    padding: 8px 14px;
    border: 1px solid hsl(200 100% 99% / 5%);
    margin-top: -10px;
  }
  .heading-title {
    font-size: 1.2rem;
    font-weight: 500;
  }
  
  .card-movies:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
  .moive{
    box-shadow: -7px 12px 20px 3px rgba(0,0,0,0.72);
-webkit-box-shadow: -7px 12px 20px 3px rgba(0,0,0,0.72);
-moz-box-shadow: -7px 12px 20px 3px rgba(0,0,0,0.72);
    border-radius: 10px;
    width: 100%;
    padding: 0px 0 10px 0px;
    
    margin: auto;
  }
  .movie-img{
    height: 100%;
    padding: 0px 0px 30px 0px;
    border-radius: 10px;
    
  }
  .moive-title{
    display: flex;
    justify-content: space-around;
    padding-bottom: 5px;
  
  }
  h5{
    margin-top: -5px;
  }
  
  </style>
  
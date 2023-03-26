<template>
  <div class="container">
    <div class="row"> 
      <sidebar-home />
      <!-- Popular -->
      <section class="popular container mt-5" ref="popular">
        <div class="heading">
          <h2  class="heading-title">Popular Movies</h2>
        </div>
        <!-- content -->
        <div class="popular-content">
          <popular-moives />
        </div>
      </section>
      <section class="moives container mt-5" id="movies">
        <div class="heading">
          <h2 class="heading-title">Movies And Show</h2>
        </div>
      </section>
      <div
        class=" col-md-3 mt-5 d-flex col-12 col-sm-6 d-flex justify-content-around"
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
              <h5>{{ post.name }}</h5>
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
import SidebarHome from "../components/SidebarHome.vue";
import PopularMoives from "../components/PopularMoives.vue";

export default {
  components:{
    SidebarHome,
    PopularMoives,

  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await MovieService.getAll();
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
  border: 0.5px solid #ccc;
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

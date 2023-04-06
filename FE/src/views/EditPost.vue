<template>
  <div class="container">
    <form class="form card" @submit.prevent="updateForm">
      <h2 class="card-header">Edit Post</h2>
      <div class="card-body">
        <div class="mb-3 form-group">
          <label for="name" class="form-label">Name Movie</label>
          <input
            v-model="post.name"
            name="name"
            type="text"
            class="form-control"
            placeholder="Name of moive"
          />
        </div>
        <div class="mb-3 form-group">
          <label for="author" class="form-label">Author</label>
          <input
            v-model="post.author"
            name="author"
            type="text"
            class="form-control"
            placeholder="Author"
          />
        </div>
        <div class="mb-3 form-group">
          <label for="description" class="form-label">Description</label>
          <textarea
            v-model="post.description"
            name="des"
            class="form-control"
            rows="3"
          ></textarea>
        </div>
        <div class="mb-3 form-group">
          <label for="videoId" class="form-label">VideoID</label>
          <input
            v-model="post.videoId"
            name="videoId"
            type="text"
            class="form-control"
            placeholder="VideoID"
          />
        </div>
        <div class="mb-3 form-group">
          <label for="Time" class="form-label">Time</label>
          <input
            v-model="post.Time"
            name="Time"
            type="text"
            class="form-control"
            placeholder="Time"
          />
        </div>
        <div class="mb-3 form-group">
          <button
            type="submit"
            @click.native="scrollToTop"
            class="btn btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import MovieService from "../services/movie.service";

export default {
  data() {
    return {
      post: {},
    };
  },
  methods: {
    async created() {
      const response = await MovieService.getOnePost(this.$route.params.slug);
      this.post = response;
    },
    async updateForm() {
      alert("Post update successfully!!");
      // const formData = new FormData();
      // formData.append("name", this.post.name);
      // formData.append("author", this.post.author);
      // formData.append("description", this.post.description);
      // formData.append("videoId", this.post.videoId);
      // formData.append("Time", this.post.Time);
      const newPost = {...this.post}
      await MovieService.updatePost(this.$route.params.slug, newPost);
      await this.created();
      this.$forceUpdate();
      this.$router.push({ name: "detail", params: { slug: this.post.slug }});
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  async mounted() {
    await this.created();
    
  },
};
</script>
<style scoped>
.container {
  margin-top: 100px;
  display: flex;
  align-items: center;
  margin-top: 110px;
  justify-content: center;
}
.form {
  padding-bottom: 10px;
  margin: auto;
  width: 550px;
  border: 2px solid #0088a9;
  border-radius: 10px;
  margin-bottom: 20px;
  background-color: #24252a;

}
h2 {
  text-align: center;
  margin-bottom: 24px;
  color: white;
  text-transform: uppercase;
  border-bottom: 1px solid#0088a9;
}
.form-group {
  margin: auto;
}
input {
  height: 45px;
}
.btn {
  margin-top: 24px;
}
</style>
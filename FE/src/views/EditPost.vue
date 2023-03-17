<template>
    <div class="container">
        <h2>Edit Post</h2>
        <form class="form" @submit.prevent="updateForm">
            <div class="mb-3 form-group">
            <label for="name"  class="form-label">Name Movie</label>
                <input  v-model="post.name" name="name" type="text" class="form-control" placeholder="Name of moive">
            </div>
            <div class="mb-3 form-group">
                <label for="author" class="form-label">Author</label>
                    <input  v-model="post.author" name="author" type="text" class="form-control" placeholder="Author">
            </div>
            <div class="mb-3 form-group">
                <label for="description" class="form-label">Description</label>
                <textarea   v-model="post.description" name="des" class="form-control" rows="3"></textarea>
            </div>
            <div class="mb-3 form-group">
                <label for="videoId" class="form-label">VideoID</label>
                    <input  v-model="post.videoId" name="videoId" type="text" class="form-control" placeholder="VideoID">
            </div>
            <div class="mb-3 form-group">
                <label for="Time" class="form-label">Time</label>
                    <input  v-model="post.Time" name="Time" type="text" class="form-control" placeholder="Time">
            </div>
            <div class="mb-3 form-group">
                <button type="submit"  class="btn btn-primary">Save</button>
            </div>
        </form>
    </div>
</template>
<script>
import MovieService from "@/services/movie.service";

export default{
    data() {
        return {
            post:{},
        }
    },
    async created() {
        const response = await MovieService.getOnePost(this.$route.params.slug);
        this.post = response;
    },
    methods: {
        async updateForm(){
            alert('Post update successfully!!');
            this.$router.push({name: "home"})
            const formData = new FormData();
            formData.append('name', this.post.name);
            formData.append('author', this.post.author);
            formData.append('description', this.post.description);
            formData.append('videoId', this.post.videoId);
            formData.append('Time', this.post.Time);
            await MovieService.updatePost(this.$route.params._id, formData);    
   
        }
    },
                             
}
</script>
<style scoped>
.container {
    margin-top: 100px;
}
.form {
    margin: auto;
    width: 600px;
    margin-left: 27%;
    border: 2px solid #0088a9;
    border-radius: 10px;
    margin-bottom: 20px;
    
    
}
h2{
    text-align: center;
    margin-bottom: 24px;
}
.form-group{
    width: 470px;
    margin: auto;
}
input{
    height: 45px;
}
.btn{
    margin-top: 24px;
}
</style>
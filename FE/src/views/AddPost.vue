<template>
    <div class="container">
        <h2>Add New Post</h2>
        <Form
            class="form"
            @submit.native="submitForm"
            :validation-schema="FormSchema"
        >
            <div class="mb-3 form-group">
                <label for="name"  class="form-label">Name Movie</label>
                <Field
                    v-model="post.name"
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Name of moive"
                />
                <ErrorMessage name="name" class="error-feedback" />
            </div>
            <div class="mb-3 form-group">
                <label for="author" class="form-label">Author</label>
                <Field  
                    v-model="post.author"
                    name="author"
                    type="text"
                    class="form-control"
                    placeholder="Author"
                />
                <ErrorMessage name="author" class="error-feedback" />
            </div>
            <div class="mb-3 form-group">
                <label for="description" class="form-label">Description</label>
                <Field
                    v-model="post.description"
                    name="description"
                    class="form-control"
                    type ="text"
                />
                <ErrorMessage name="description" class="error-feedback" />
            </div>
            <div class="mb-3 form-group">
                <label for="videoId" class="form-label">VideoID</label>
                <Field
                    v-model="post.videoId"
                    name="videoId"
                    type="text"
                    class="form-control"
                    placeholder="VideoID"
                 />
                <ErrorMessage name="videoId" class="error-feedback" />
            </div>
            <div class="mb-3 form-group">
                <label for="Time" class="form-label">Time</label>
                <Field
                    v-model="post.Time"
                    name="Time"
                    type="text"
                    class="form-control"
                    placeholder="Time"
                 />
                <ErrorMessage name="Time" class="error-feedback" />
            </div>
            <div class="mb-3 form-group">
                <button type="submit" class="btn btn-primary">Add Post</button>
            </div>
        </Form>
    </div>
</template>
<script>
import MovieService from "@/services/movie.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default{
    components: {
        Form,
        Field,
        ErrorMessage,
    },
    data() {
        const FormSchema = yup.object().shape({
            name: yup
                .string()
                .required()
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            author: yup
                .string()
                .required()
                .min(2, "Tên phải ít nhất 2 ký tự.")
                .max(50, "Tên có nhiều nhất 50 ký tự."),
            description: yup
                .string()
                .required(),
            videoId: yup
                .string()
                .required(),
            Time: yup
                .string() 
                .required()

        });
        return {
            post:{},
            FormSchema,
        }
    },
    methods: {
        async submitForm(){
            alert('Post create successfully!!');
            this.$router.push({name: "home"})
            const formData = new FormData();
            formData.append('name', this.post.name);
            formData.append('author', this.post.author);
            formData.append('description', this.post.description);
            formData.append('videoId', this.post.videoId);
            formData.append('Time', this.post.Time);
            await MovieService.addPost(formData);    
   
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
.error-feedback{
    color:red;
    margin: auto;
}
</style>
<template>
  <div class="container">
    <Form
      class="card form"
      @submit.native="submitForm"
      :validation-schema="FormSchema"
    >
      <h2 class="card-header">Add New Post</h2>
      <div class="card-body">
        <div class="mb-3 form-group">
          <label for="name" class="form-label">Name Movie</label>
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
            type="text"
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
      </div>
    </Form>
  </div>
</template>
<script>
import MovieService from "@/services/movie.service";
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
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
      description: yup.string().required(),
      videoId: yup.string().required(),
      Time: yup.string().required(),
    });
    return {
      post: {},
      FormSchema,
    };
  },
  methods: {
    async submitForm() {
      alert("Post create successfully!!");
      this.$router.push({ name: "home" });
      const formData = new FormData();
      formData.append("name", this.post.name);
      formData.append("author", this.post.author);
      formData.append("description", this.post.description);
      formData.append("videoId", this.post.videoId);
      formData.append("Time", this.post.Time);
      await MovieService.addPost(formData);
    },
  },
};
</script>
<style scoped>
.container {
  display: flex;
  align-items: center;
  margin-top: 110px;
  justify-content: center;
}
.form {
  padding-bottom: 10px;
  background-color: #24252a;
  margin: auto;
  width: 550px;
  border: 2px solid #0088a9;
  border-radius: 10px;
  margin-bottom: 20px;
}
h2 {
  text-align: center;
  margin-bottom: 24px;
  text-transform: uppercase;
  color: white;
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
.error-feedback {
  color: red;
  margin: auto;
}
</style>
<template>
  <div class="container">
    <Form
      class="form"
      :validation-schema="SignInFormSchema"
      @submit.prevent="submitLoginForm"
    >
      <h2>Sign In</h2>
      <div class="mb-3 form-group">
        <label for="username" class="form-label">Username</label>
        <Field
          name="username"
          type="text"
          class="form-control"
          placeholder="Username"
        />
        <ErrorMessage name="username" class="error-feedback" />
      </div>
      <div class="mb-3 form-group">
        <label for="password" class="form-label">Password</label>
        <Field
          name="password"
          type="text"
          class="form-control"
          placeholder="Password"
        />
        <ErrorMessage name="password" class="error-feedback" />
      </div>
      <div class="mb-3 form-group">
        <router-link :to="{name: 'signup'}">
          <h5>Sign Up ?</h5>
        </router-link>
      </div>
      <div class="mb-3 form-group remember-check">
        <input type="checkbox" name="remember" id="remember"> 
        <label class="remember" for="remember">Remember me</label>
      </div>
      <div class="form-group d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="submit">Button</button>
      </div>
    </Form>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const SignInFormSchema = yup.object().shape({
      username: yup
        .string()
        .required()
        .min(2, "Tên phải ít nhất 2 ký tự.")
        .max(50, "Tên có nhiều nhất 50 ký tự."),
      password: yup
        .string()
        .required()
        .min(6, "Mật khẩu ít nhất 6 ký tự.")
        .max(50, "Mật khẩu có nhiều nhất 50 ký tự."),
    });
    return {
      SignInFormSchema,
      User: {},
    };
  }
}
</script>
<style scoped>
.container {
  margin-top: 120px;
}
.form {
  position: relative;
  left: 50%;
  transform: translate(-50%);
  width: 450px;
  border: 2px solid #0088a9;
  border-radius: 2px;
  margin-bottom: 24px;
}
h2 {
  text-align: center;
  margin-bottom: 24px;
}
.form-group {
  margin: auto;
  width: 314px;
  margin-bottom: 24px;
}
input {
  height: 50px;
}
.btn {
  margin-top: 24px;
}
.error-feedback {
  color: red;
  margin: auto;
}
.remember-check{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
}

.remember-check input{
  width: 16px;
}
</style>
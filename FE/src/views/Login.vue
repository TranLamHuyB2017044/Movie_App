
<template>
  <div class="card container">
      <h4 class="card-header">Login</h4>
      <div class="card-body">
          <Form @submit="submitFormLogin" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
              <div class="form-group">
                  <label>Username</label>
                  <Field name="username" v-model="user.username" type="text" class="form-control" :class="{ 'is-invalid': errors.username }" />
                  <div class="invalid-feedback">{{ errors.username }}</div>
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <Field name="password" v-model="user.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                  <div class="invalid-feedback">{{ errors.password }}</div>
              </div>
              <div class="form-group">
                  <button class="btn btn-primary" :disabled="isSubmitting">
                      <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                      Login
                  </button>
                  <router-link to="register" class="btn btn-link">Register</router-link>
              </div>
          </Form>
      </div>
  </div>
</template>
<script>
import * as yup from "yup";
import { Form, Field } from "vee-validate";
import { useUsersStore } from "../stores/user";
  export default {
    setup(){
      const UsersStore = useUsersStore();
      return {UsersStore}
    },
    components: {
      Form,
      Field
    },
    data() {
      const schema = yup.object().shape({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
      });
      return {
          schema,
          user:{
            username:'',
            password:''
          }
      };
    },
    methods: {
      async submitFormLogin(){
          try {
          await this.UsersStore.login(
            this.user.username,
            this.user.password
          )
          if(!this.UsersStore.user){
            alert('Username or password is incorrect')
            return;
          }else{
              await this.$router.push({name: 'home'})
              alert('Login successfully');
          }
          } catch (error) {
            console.log(error)
          }
          
      }
    },
  }


</script>
<style scoped>
.container {
  margin-top: 120px;
}
.card{
  background-color: #24252A;
  border: 2px solid #0088a9;
  width: 450px;
  color: #fff;
}
.card-header{
  text-align: center;
  margin-bottom: 24px;
  background-color: #24252A;
  border-bottom: 1px solid #0088a9;
}
.btn {
  margin-top: 24px;
  text-decoration: none;
  font-size: 18px;
}

.error-feedback {
  color: red;
  margin: auto;
}
</style>
<template>
  <div class="card container">
      <h4 class="card-header">Register</h4>
      <div class="card-body">
          <Form @submit="submitFormRegister" :validation-schema="schema" v-slot="{ errors, isSubmitting }">
              <div class="form-group">
                  <label>First Name</label>
                  <Field name="firstName" type="text" v-model="user.firstName" class="form-control" :class="{ 'is-invalid': errors.firstName }" />
                  <div class="invalid-feedback">{{ errors.firstName }}</div>
              </div>
              <div class="form-group">
                  <label>Last Name</label>
                  <Field name="lastName" type="text" v-model="user.lastName" class="form-control" :class="{ 'is-invalid': errors.lastName }" />
                  <div class="invalid-feedback">{{ errors.lastName }}</div>
              </div>
              <div class="form-group">
                  <label>Username</label>
                  <Field name="username" type="text" v-model="user.username" class="form-control" :class="{ 'is-invalid': errors.username }" />
                  <div class="invalid-feedback">{{ errors.username }}</div>
              </div>
              <div class="form-group">
                  <label>Password</label>
                  <Field name="password" type="password" v-model="user.password" class="form-control" :class="{ 'is-invalid': errors.password }" />
                  <div class="invalid-feedback">{{ errors.password }}</div>
              </div>
              <div class="form-group">
                  <button class="btn btn-primary" :disabled="isSubmitting">
                      <span v-show="isSubmitting" class="spinner-border spinner-border-sm mr-1"></span>
                      Register
                  </button>
                  <router-link to="login" class="btn btn-link">Cancel</router-link>
              </div>
          </Form>
      </div>
  </div>
</template>

<script>
import * as Yup from "yup";
import { Form, Field} from "vee-validate";
import userService from "../services/user.service";
import {useUsersStore} from "../stores/user";
  export default {
    setup(){
      const UsersStore = useUsersStore();
      return {UsersStore}
    },
    components: {
      Form,
      Field,
    },
    data() {
      const schema = Yup.object().shape({
        firstName: Yup.string()
          .required('First Name is required'),
        lastName: Yup.string()
         .required('Last Name is required'),
        username: Yup
          .string()
          .required(),
        password: Yup
          .string()
          .required()
      });
      return {
          schema,
          user: {
            "firstName" : "",
            "firstName" : "",
            "username" : "",
            "password" : "",
          }
      };
    },
    methods: {
       async submitFormRegister(user){
          try {
            await this.UsersStore.register(user,{
                  firstName : this.user.firstName,
                  lastName : this.user.lastName,
                  username : this.user.username,
                  password : this.user.password
            })
            await this.$router.push({name: 'login'})
            alert('Registered successfully')
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
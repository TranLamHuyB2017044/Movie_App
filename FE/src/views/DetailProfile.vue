<template>
  <div class="container">
    <div class="round-1"></div>
    <div class="round-2"></div>
    <div class="wrapper">
      <div class="box">
        <div class="profile-img">
          <img
            alt=""
            src="https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/279638355_715296559610620_976661376510071519_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=GyS0bsw7cFwAX8jYx5M&_nc_ht=scontent.fhan2-4.fna&oh=00_AfCDQNJlLGLlEbApZyL4yKgdljrfuaESHvP-5RE4yJa7sw&oe=64256380"
          />
        </div>
        <h2>
          {{ this.useUser.user.lastName }}
          <span class="mt-2"
            >{{
              this.useUser.user.firstName + " " + this.useUser.user.lastName
            }}, USA</span
          >
        </h2>
        <p>
          Front-End Developer &<br />
          Graphics Designer
        </p>
        <p class="btn-area">
          <a href="#">Message</a> <a class="ex" href="#">Following</a>
        </p>
        <section class="socials">
          <div class="a1">
            <i class="fa-brands fa-facebook"></i>
          </div>
          <div class="a2">
            <i class="fa-brands fa-twitter"></i>
          </div>
          <div class="a3">
            <i class="fa-brands fa-pinterest"></i>
          </div>
          <div class="a4">
            <i class="fa-brands fa-google-plus"></i>
          </div>
        </section>
      </div>
    </div>
    <form class="row g-3 form" @submit.prevent="updateUser">
      <div class="col-md-6">
        <label for="firstname" class="form-label">FirstName</label>
        <input
          v-model="this.useUser.user.firstName"
          type="text"
          class="form-control"
          id="firstname"
        />
      </div>
      <div class="col-md-6">
        <label for="lastname" class="form-label">LastName</label>
        <input
          v-model="this.useUser.user.lastName"
          type="text"
          class="form-control"
          id="lastname"
        />
      </div>
      <!-- <div class="col-12">
        <label for="username" class="form-label">UserName</label>
        <input
          type="text"
          class="form-control"
          id="username"
          v-model="this.useUser.user.username"
        />
      </div> -->
      <div class="col-12">
        <label for="password" class="form-label">PassWord</label>
        <input
          type="password"
          class="form-control"
          id="password"
          v-model="this.useUser.user.password"
        />
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary">Update</button>
      </div>
    </form>
  </div>
</template>
<script>
import { useUsersStore } from "../stores/user";
// import userService from '../services/user.service';
export default {
  setup() {
    const useUser = useUsersStore();
    return { useUser };
  },
  data() {
    return {
      user: {},
    };
  },
  async created(id) {
    const response = await this.useUser.getById(id);
    this.user = response;
  },
  methods: {
    async updateUser() {
      try {
        alert("User update successfully!!");
        const formData = new FormData();
        formData.append("firstname", this.useUser.user.firstName);
        formData.append("lastname", this.useUser.user.lastName);
        formData.append("password", this.useUser.user.password);
        await this.useUser.update(id, formData);
      } catch (error) {
          console.error(error);
      }
    },
  },
};
</script>
<style scoped>
.wrapper {
  width: 1152px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  /* margin: 0 auto; */
  margin-left: 70px;
  position: relative;
}

.round-1 {
  position: absolute;
  top: 5%;
  left: 32%;
  width: 13em;
  height: 13em;
  border-radius: 50%;
  box-shadow: 0 0 50px #d84869;
  background: linear-gradient(-25deg, #d84869, #f46641);
}

.round-2 {
  position: absolute;
  top: 50%;
  right: 23%;
  width: 19em;
  height: 19em;
  border-radius: 50%;
  box-shadow: 0 0 50px #5622ff;
  background: linear-gradient(180deg, #5622ff, #4190fd);
}

.box {
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff1a;
  backdrop-filter: blur(20px);
  padding: 1.5em;
  border-radius: 25px;
  border: 2px solid #ffffff30;
  box-shadow: 0 0 30px #0000002a;
  text-align: center;
}

.box h2 {
  color: #ffffff60;
  text-transform: capitalize;
  margin: 15px 0;
}

.box h2 span {
  display: block;
  font-size: 15px;
  font-weight: 300;
  text-transform: capitalize;
}

.box p {
  color: #ffffff90;
  font-size: 14px;
}

.btn-area a {
  text-decoration: none;
  color: #262626;
  background: rgba(255, 255, 255, 0.6);
  display: inline-block;
  padding: 8px 15px;
  margin: 15px 5px;
  border: 2px solid rgba(255, 255, 255, 0.6);
}

.btn-area a.ex {
  background: transparent;
  color: #fff;
}

.socials {
  margin-top: 20px;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
}

.socials div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  line-height: 45px;
  color: #fff;
  margin: 0 5px;
}

.socials div.a1 {
  background: #3b5998;
}

.socials div.a2 {
  background: #55acee;
}

.socials div.a3 {
  background: #bd081c;
}

.socials div.a4 {
  background: #dc4e41;
}

.socials i {
  font-size: 20px;
}

.profile-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}

.profile-img img {
  width: 100%;
}
.form {
  display: flex;
  width: 700px;
  justify-content: flex-end;
  position: relative;
  right: 0px;
  left: 600px;
  /* margin-top: -400px; */
  bottom: 440px;
}
</style>

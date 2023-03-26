<template>
    <header>
        <div class="nav container">
            <router-link class="logo" :to="{ name: 'home' }">
                Movie<span>Vel</span>
            </router-link>
            <div class="search-box">
                <i class="fas fa-solid fa-magnifying-glass"></i>
                <input type="search" name="" id="search-input" placeholder="Enter keywords..." />
            </div>
            <!-- <router-link  :to="{ name: 'login' }" class="Login">  
                <button v-if="!this.UsersStore.user" :key="!this.UsersStore.user" class="login-text ">Login</button>
            </router-link> -->
            <div v-if="this.UsersStore.user" class="islogin">
                <h2 class="islogin-text"> Hi, {{ this.UsersStore.user.lastName }}</h2>
                <div class="dropdown">
                    <button class="btn  dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="login-icon fa-regular fa-user"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <router-link :to="{ name: 'edit-profile',params: { id: this.UsersStore.user._id} }" style="text-decoration: none;" >
                            <li class="dropdown-item">Edit Profile</li>
                        </router-link>
                        <li><a class="dropdown-item" @click="logout">Logout</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
            </div>           
        </div>
    </header>
</template>
<script>
import { useUsersStore } from "../stores/user";

export default {
    setup() {
        const UsersStore = useUsersStore();
        return { UsersStore };
    },
    methods: {
        async logout() {
            localStorage.removeItem('id');
            this.UsersStore.user = null;
            this.$router.push('/login')
        },
    },
};
</script>
<style>
.container {
    max-width: 1068px;
    margin: auto;
    width: 100%;
}

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background: #24262b;
}

.nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    height: 80px;
}

.logo {
    position: relative;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 auto 0 0;
    color: aliceblue;
    text-decoration: none;
}

.logo::after {
    content: "";
    width: 0;
    height: 1px;
    background: #fff;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: all 0.3s linear;
}

.logo:hover::after {
    width: 100%;
}

.logo:hover {
    color: aliceblue;
}

.logo span {
    color: #0088a9;
}

.search-box {
    max-width: 240px;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.7rem;
    padding: 8px 15px;
    background: white;
    border-radius: 4rem;
    margin-right: 1.4rem;
}

.search-box .fas {
    font-size: 1.1rem;
    color: #24262b;
    background-color: aliceblue;
}

.search-box .fas:hover {
    color: #0088a9;
}

.fas {
    cursor: pointer;
}

#search-input {
    width: 100%;
    border: none;
    outline: none;
    color: #24262b;
    background: transparent;
    font-size: 0.938rem;
}

.Login {
    margin-right: 0.813rem;
    display: flex;
    justify-content: space-between;
    justify-items: center;
    text-decoration: none;
}

.login-icon {
    color: #0088a9;
    font-size: 24px;
    padding: 10px 13px;
    border-radius: 80px;
    background-color: #ccc;
}
.login-icon:hover{
    opacity: 0.8;
}
.login-text {
    position: relative;
    top: 0px;
    color: #fff;
    margin-right: 20px;
    border-radius: 5px;
    padding: 3px 18px;
    background-color: #0088a9;
}
.islogin{
    display: flex;
    justify-content: center;
    text-align: center;
}
.islogin .islogin-text{
    margin: auto;
    font-size: 20px;
}
.login-text:hover {
    opacity: 0.8;
}

.login-icon:hover {
    color: #0088a9;
}
</style>
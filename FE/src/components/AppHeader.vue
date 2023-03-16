<template>
    <header>
        <div class="nav container"> 
            <router-link class="logo" :to = "{name : 'home'}">
                Movie<span>Vel</span>
            </router-link>
            <div class="search-box">
                <i class="fas fa-solid fa-magnifying-glass"></i>
                <input type="search" name="" id="search-input" placeholder="Enter keywords...">
            </div>
            <router-link :to = "{name : 'signin'}" class="Login">
                <i class="login-icon fa-regular fa-user "> Login</i>
            </router-link>
        </div>
    </header>
</template>
<script>
export default {};
</script>
<style>
.container {
    max-width: 1068px;
    margin: auto;
    width: 100%;
}
header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    background:   #24262b;
}
.nav{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}
.logo{
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 auto 0 0;
    color: aliceblue;
}

.logo:hover{
    color: aliceblue;
}

.logo span{
    color: #0088a9;
}

.search-box{
    max-width: 240px;
    width: 100%;
    display: flex;
    align-items: center;
    column-gap: 0.7rem;
    padding: 8px 15px;
    background: white;
    border-radius: 4rem;
    margin-right: 1rem;
}
.search-box .fas{
    font-size: 1.1rem;
    color: #24262b;
    background-color: aliceblue;
}
.search-box .fas:hover{
    color: #0088a9;

}
.fas{
    cursor: pointer;
}
#search-input{
    width: 100%;
    border: none;
    outline: none;
    color: #24262b;
    background: transparent;
    font-size: 0.938rem;
}
.Login{
    margin-right: 0.813rem;
}
.login-icon{
    color: white;
    font-size: 16px;
}

.login-icon:hover{
    color: #0088a9;
}


</style>
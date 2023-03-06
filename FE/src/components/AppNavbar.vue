<template>
    <div class="navbar">
        <a href="#home" class="nav-link nav-active">
            <i class="fa-solid fas fa-house"></i>
            <span class="nav-link-title"> Home</span>
        </a>
        <a href="#" class="nav-link">
            <i class="fa-regular fas fa-square-plus"></i>
            <span class="nav-link-title"> Create</span>
        </a>
        <a href="#" class="nav-link">
            <i class="fa-solid fas fa-fire"></i>
            <span class="nav-link-title"> Trending</span>
        </a>
        <a href="#" class="nav-link">
            <i class="fa-solid fas fa-tv"></i>
            <span class="nav-link-title"> Movies</span>
        </a>
    </div>
</template>
<script></script>
<style scoped>
.navbar{
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 18px;
    display: flex;
    flex-direction: column;
    row-gap: 2.1rem;
}
.nav-link{
    display: flex;
    flex-direction: column;
    align-items: center;
    color: aliceblue;
}
.nav-link:hover,
.nav-active{
    color: #0088a9;
    transition: 0.3s all linear;
    transform: scale(1.1);
}

.nav-link .fas{
    font-size: 1.6rem;
}

.nav-link-title{
    font-size: 0.7rem;
}
</style>
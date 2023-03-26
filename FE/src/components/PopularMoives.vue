<template>
  <div class="container" id="popular">
    <div class="row">
      <Splide :options="options" aria-label="My Favorite Images">
        <SplideSlide class="Moives-box" v-for="card in cards" :key="card.id">
          <img :src="`${card.img}`" class="movie-box-img" />
          <section class="box-text">
            <a href="#" class="watch-btn">
              <i class="bx fa-solid fa-play"></i>
            </a>
          </section>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Splide,
    SplideSlide,
  },
  setup() {
    const options = {
      rewind: true,
      gap: "1rem",
      autoplay: true,
      type: "loop",
      pauOnFocus: false,
      perPage: 6,
      arrows: false,
    };
    return { options };
  },
  async created() {
    this.posts = await MovieService.getAll();
  },
  data() {
    return {
      posts:{},
      cards: [
        {
          id: 1,
          name: "Arcane",
          img: "../src/assets/arcane.jpg",
        },
        {
          id: 2,
          name: "AquaMan",
          img: "../src/assets/aquaman.jpg",
        },
        {
          id: 3,
          name: "Joker",
          img: "../src/assets/joker.jpg",
        },
        {
          id: 4,
          name: "Ant Man",
          img: "../src/assets/ant-man_4.jpg",
        },
        {
          id: 5,
          name: "End Game",
          img: "../src/assets/endgame.jpg",
        },
        {
          id: 6,
          name: "Godzilla",
          img: "../src/assets/godzilla.jpg",
        },
        {
          id: 7,
          name: "Bumblebee",
          img: "../src/assets/bumblebee.jpg",
        },
        {
          id: 8,
          name: "Tenet",
          img: "../src/assets/tenet.jpg",
        },
        {
          id: 9,
          name: "Jumanji",
          img: "../src/assets/jumanji.jpg",
        },
        {
          id: 10,
          name: "Jumanji",
          img: "../src/assets/thienmenhanhhung.jpg",
        },
        {
          id: 11,
          name: "Jumanji",
          img: "../src/assets/dragontrain.jpg",
        },
        {
          id: 12,
          name: "Jumanji",
          img: "../src/assets/glass.jpg",
        },
      ],
    };
  },
});
</script>

<style scoped>
.Moives-box {
  position: relative;
  font-size: 16px;
  width: 100%;
  height: 380px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}

.movie-box-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  margin-top: -55px;
  opacity: 0.8;
}

.Moives-box .box-text {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 14px;
  background: linear-gradient(
    8deg,
    hsl(240 17% 14% / 74%),
    14%,
    hsl(240 17% 14% / 14%),
    44%
  );
  overflow: hidden;
  text-shadow: -1px -1px 50px rgba(0, 0, 0, 1);
}

.bx {
  background: #0088a9;
  padding: 16px;
  color: white;
  border-radius: 48%;
  position: absolute;
  top: 47%;
  right: 40%;
}

.bx:hover {
  transform: scale(1.1);
  transition: 1s;
}
</style>

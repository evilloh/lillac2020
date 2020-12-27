<template>
  <router-link to="/" class="home__button"
    ><div>
      <i class="gg-home"></i></div
  ></router-link>
  <div class="federico__background">
    <div class="federico__background__top"></div>
    <div class="federico__backgorund__madona">
      <h2 class="drawing__text">
        {{ text[counter] }}
      </h2>
      <!-- <img
        :class="{ fadeIn: fading }"
        style="z-index:10001"
        :src="require(`./assets/${person}1.png`)"
      /> -->
      <DynamicImage
        v-if="counter >= 8"
        :person="person"
        :counter="counter"
        :level="6"
      />
      <DynamicImage
        v-if="counter >= 6"
        :person="person"
        :counter="counter"
        :level="5"
      />
      <DynamicImage
        v-if="counter >= 3"
        :person="person"
        :counter="counter"
        :level="4"
      />
      <DynamicImage
        v-if="counter >= 2"
        :person="person"
        :counter="counter"
        :level="3"
      />
      <DynamicImage
        v-if="counter >= 2"
        :person="person"
        :counter="counter"
        :level="2"
      />
      <DynamicImage :person="person" :counter="counter" :level="1" />
      <!-- <img :src="require(`./statics/carlo${counter}.png`)" /> -->
    </div>
    <div class="federico__background__bot">
      <a
        :class="{ button__drawing: true, out: counter <= 1 }"
        v-on:click="prev"
      >
        Prev
      </a>
      <a v-if="counter <= 8" class="button__drawing" v-on:click="next">
        Next
      </a>
      <router-link
        to="/lust"
        v-if="counter > 8"
        class="button__drawing"
        v-on:click="next"
        >Lust</router-link
      >
    </div>
  </div>
</template>

<script>
import DynamicImage from "./components/DynamicImage.vue";
export default {
  data() {
    return {
      person: "fede",
      counter: 1,
      isEven: true,
      text: {
        1: "Never caring for his own needs",
        2: "Always helping the others",
        3: "Now forever looking for cats to feed",
        4: "Treating all of them like brothers",
        5: "But the help would just vanish away",
        6: "Draining energy from the poor man",
        7: "And at the end of the day",
        8: "He'd start over from where he began",
      },
    };
  },
  mounted() {},
  components: {
    DynamicImage,
  },
  methods: {
    next() {
      return (this.counter = this.counter + 1);
    },
    prev() {
      return (this.counter = this.counter - 1);
    },
  },
};
</script>

<style scoped lang="scss">
.fadeIn {
  animation: 3s ease 0s normal forwards 1 fadein;
}
.drawing__text {
  color: antiquewhite;
  font-family: "VT323";
  z-index: 20000;
  position: absolute;
  bottom: 10vh;
  text-align: center;
  margin: 0 auto;
  display: inline-block;
  width: 100%;
  font-size: 2rem;
  text-shadow: 2px 2px black;
  &__counter {
    bottom: 7vh;
  }
}
.federico__backgorund__madona {
  height: 60vh;
  position: relative;
  display: flex;
  align-items: flex-end;
  background-color: #080101;
  img {
    z-index: 1000;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
}
.federico {
  &__background {
    width: 100%;
    height: 100vh;
    &__top {
      height: 15vh;
      background-color: #080101;
    }

    &__bot {
      height: 25vh;
      background-image: linear-gradient(#6f4815, #0c0a1c);
      text-align: center;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

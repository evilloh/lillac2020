<template>
  <div class="federico__background">
    <div class="federico__background__top"></div>
    <div class="federico__backgorund__madona">
      <h2 class="drawing__text drawing__text__counter">
        {{ countdown[counter] }}
      </h2>
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
        :level="7"
      />
      <DynamicImage
        v-if="counter >= 6"
        :person="person"
        :counter="counter"
        :level="6"
      />
      <DynamicImage
        v-if="counter >= 4"
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
      <button
        :class="{ button__drawing: true, out: counter <= 1 }"
        v-on:click="prev"
      >
        Prev
      </button>
      <button v-if="counter <= 8" class="button__drawing" v-on:click="next">
        Next
      </button>
      <button v-if="counter > 8" class="button__drawing" v-on:click="next">
        Federico
      </button>
    </div>
  </div>
</template>

<script>
import DynamicImage from "./components/DynamicImage.vue";
export default {
  data() {
    return {
      person: "carlo",
      counter: 1,
      isEven: true,
      text: {
        1: "He got the power to make his wishes become real",
        2: "Whatever he drew using his blood would magically appear",
        3: "But with a countdown going, this is the deal.",
        4: "Using his blood he could have asked for a meal",
        5: "But his deepest desires he could not conceal",
        6: "Always running out of time to draw his painting most ideal",
        7: "The punishment for that greed?",
        8: "Into Magical cards the painting would transform instead of becoming real",
      },
      countdown: {
        1: "",
        2: "",
        3: "15 seconds left...",
        4: "...10 seconds left...",
        5: "...7 seconds left...",
        6: "...4 seconds left...",
        7: "...2 seconds left...",
        8: "...1 second left...",
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

<style lang="scss">
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
  background-image: linear-gradient(#080101, #4d2d10);
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
      background-image: linear-gradient(#4d2d10, #080101);
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

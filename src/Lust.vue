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
        v-if="counter >= 6"
        :person="person"
        :counter="counter"
        :level="4"
      />
      <DynamicImage
        v-if="counter >= 5"
        :person="person"
        :counter="counter"
        :level="3"
      />
      <DynamicImage
        v-if="counter >= 4"
        :person="person"
        :counter="counter"
        :level="2"
      />
      <DynamicImage
        v-if="counter >= 3"
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
      <a v-if="counter <= 6" class="button__drawing" v-on:click="next">
        Next
      </a>
      <router-link
        to="/behindthescenes"
        v-if="counter > 6"
        class="button__drawing"
        v-on:click="next"
      >
        End
      </router-link>
    </div>
  </div>
</template>

<script>
import DynamicImage from "./components/DynamicImage.vue";
export default {
  data() {
    return {
      person: "evillo",
      counter: 1,
      isEven: true,
      text: {
        1: "Videos filled with lust were his passion",
        2: "He wanted something more, something new each session",
        3: "Now his punishment is watching nothing but empty screens",
        4: "And trapped by his most desired thing, like in one of those scenes",
        5: "Even though isn't pleasant by any means",
        6: "Leaving him in pain and with the only company of his own diseases",
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
  background-color: #aea4a2;

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
      background-image: linear-gradient(#080101, #aea4a2);
    }

    &__bot {
      padding-top: 2rem;
      height: 25vh;
      background-image: linear-gradient(#aea4a2, #080101);
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

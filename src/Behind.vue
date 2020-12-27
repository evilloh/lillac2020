<template>
  <div class="behind__all">
    <div v-on:click="selected = ''" v-if="selected" class="popup__container">
      <img
        v-if="selected === 'evilloh'"
        class="big"
        src="./statics/endevilloh.png"
      />
      <img v-if="selected === 'fede'" class="big" src="./statics/endfede.png" />
      <img
        v-if="selected === 'carlo'"
        class="big"
        src="./statics/endcarlo.png"
      />
    </div>
    <div class="behind__container">
      <h2>Click on a punishment to check out some details of the drawing!</h2>
      <img
        v-on:click="selected = 'evilloh'"
        class="miniature"
        src="./statics/evillo4.png"
      />
      <img
        v-on:click="selected = 'fede'"
        class="miniature"
        src="./statics/fede6.png"
      />
      <img
        v-on:click="selected = 'carlo'"
        class="miniature"
        src="./statics/carlo7.png"
      />
      <router-link to="/">Back to home </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "",
    };
  },
  mounted() {},
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
a {
  font-family: Lobster;
  color: #e4e2de;
  font-size: 20px;
  text-align: center;
  max-width: 900px;
  padding-top: 1rem;
  margin: 0 auto;
}
a:hover {
  color: white;
  font-size: 25px;
  transition: all 0.1s;
}
h2 {
  color: #e4e2de;
  font-family: "VT323";
  font-size: 27px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 4rem;
}
.big {
  width: 90vw;
  margin-top: 10vw;
}
.behind__all {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: rgb(131, 123, 123);
}
.popup__container {
  position: absolute;
  z-index: 30000;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
}
.behind__container {
  display: flex;
  flex-direction: column;
  width: 900px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(107, 98, 98);

  img:hover {
    box-shadow: rgba(0, 0, 0, 0.56) 0px 2px 20px 4px;
    transition: all 0.1s;
  }
}
.miniature {
  margin: 2rem auto;
  width: 400px;
  cursor: pointer;
}
</style>

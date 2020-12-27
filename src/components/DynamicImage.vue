<template>
  <img
    :class="{ fadeIn: fading }"
    :style="{ zIndex: 10000 + level }"
    :src="require(`../assets/${person + level}.png`)"
  />
</template>

<script>
export default {
  data() {
    return {
      name: `/img/carlo2.png`,
      fading: true,
      casa: "casiiina",
      isEven: true,
    };
  },
  props: {
    msg: String,
    person: String,
    counter: Number,
    level: Number,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>

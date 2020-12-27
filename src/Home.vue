<template>
  <div class="home home__container">
    <h1>Lilac 2020</h1>
    <h2>A selection of games from evillo's 2020 library</h2>
    <h3>
      Take a look on evilloh's favorite games during the bestest year of the
      planet in modern society. Click on the icons to discover if you chose the
      winner of Lilac or if it was just a great game being nominated!
    </h3>
    <div class="lillacs__container">
      <div class="game__container">
        <img src="./statics/apeout.jpg" v-on:click="selectLilac('apeout')" />
        <p
          v-if="selected.includes('apeout')"
          :class="{ show: selected === 'apeout', nominee__text: true }"
        >
          This game wins the award for <span>Effortless game </span>! <br />You
          just go and smash things! Y'know, being an ape and shit. <br />The
          music is super fun and goes along with the game really good. It's now
          a AAA masterpiece but it's worth palying!
        </p>
      </div>
      <div class="game__container game__right">
        <p v-if="selected.includes('ori')" class="nominee__text___right">
          This game deserves a mention. It doesn't stand a chance against hollow
          knight in the overall rating, but it is a joy to play it.<br />
          Playing Hollow Knight, for example, and then Ori really makes you
          realise how different controls over a platform game can feel.<br />
          The animation of jumping, moving, attacking etc felt so smooth and
          well animated that I fell in love with this platform for this.<br />
          The music and the de art are awesome and lovely.<br /><br />
          <span> Platform game </span> award goes here!
        </p>
        <img src="./statics/ori.jpg" v-on:click="selectLilac('ori')" />
      </div>
      <div class="game__container ">
        <img src="./statics/hades.jpg" v-on:click="selectLilac('hades')" />
        <p v-if="selected.includes('hades')" class="nominee__text">
          This game is a blast. <br />It would have won the Lilac 2020 if it
          wasn't for my tastes, you know, the same kind of tastes that make me
          prefer saucy sausages over rotten clams. <br />The music is AWESOME,
          the game design is incredible and the gameplay is super fun. <br />The
          story is... I don't know? Really, 25 hours into the game (one main end
          boss finished) I knew nothing but a lot of small commentaries by the
          other gods which made it a little... spiceless. Voices tell me that if
          you went on, doing more runs, unblocking more shit in the game you'd
          get a "real story" but in my opinion 25 hours should be enough to give
          you a proper story, or at least the beginning of one, to keep you
          interested to look for more.<br /><br />
          Anyways the winner of <span> Roguelike game</span> of the year goes to
          Hades!
        </p>
      </div>
      <div class="game__container game__right">
        <p v-if="selected.includes('golf')" class="nominee__text___right">
          This goes here in the lilac nominees. I had SO much fun playing with
          my friend Pelle at this game.<br />
          It's competitive and while in chat you can have a lot of fun together.
          It really looks like a "free mobile game" for the design and
          production, but it's fun anyways.<br /><br />
          It wins <span>Multifun game </span>, winning over Overcooked 2 just
          because it's even moooore random than that.
        </p>
        <img src="./statics/golf.jpg" v-on:click="selectLilac('golf')" />
      </div>
      <div class="game__container ">
        <img
          src="./statics/hollowknight.jpg"
          v-on:click="selectLilac('hollowknight')"
        />
        <p v-if="selected.includes('hollowknight')" class="nominee__text">
          I had some issues with this game I must admit. It bothered me with the
          way the controls felt while fighting, and with the way the game
          doesn't guide you hand-in-hand though the map (I got lost too many
          times). <br />Having said that I really LOVE this game. It's one of
          those games that you keep in your heart and mind like forevah guuurl.
          <br />The music is in my spotify playlist. The art has become a
          reference for style and quality. <br />The depth of the map,
          characters and lore is outstanding.<br /><br />
          This game wins the award of
          <span>Game I complain about but I secretly love</span>.
        </p>
      </div>
      <div class="game__container game__right">
        <p
          v-if="selected.includes('blasphemous')"
          class="nominee__text___right"
        >
          It's surprising to me how many castlevania-like games I am enjoying
          these years. It all started with dead cells and to this day I keep
          saying "naaah, it's not my kind of game", just to fall in love with
          all of them. And Blasphemous is one of them. <br />It's a castlevania
          like many others but what really makes me shiver every time I play it
          is the art in it. <br />
          I've always wanted to play a game with the lore of Dante's inferno
          (unfortunately the actual game Dante's Inferno wasnt that successful
          :( ) or with all the shit going on in the christianity religion and
          all their tortures. You know, women put in a stone wall with only the
          face out, feeding her until she dies. Or all the martyrs with the
          different kind of deaths they go through. <br />
          But at the end, what really drives me in love with this kind of thing
          is the "afterlife" punishment. <br />You know, like in Dante's Inferno
          where you get the punishment according to how you lived your life on
          earth. Well... Blasphemous takes a shot on that. <br />
          Blasphemous artbook shows you how coool the design of every monster or
          boss is, what kind of thought or christianity reference has been taken
          to create the monster. And the artwork itself is spectacular. It's by
          far the best pixel art that i've seen in videogames. <br />
          It doesn't beat Hades in terms of gameplay or replayability, since
          hades has many different weapons and it's quite fun to go through, but
          it's different. Hades is a roguelike, this is a castlevania. <br />
          But even though they could compete, to me, Blasphemous wins the
          <span> Lilac 2020 </span> because of the art. Of course, the game is
          suuuper good, deep, with optional bosses and a lot of secrets, but
          even for a casual gamer this is a masterpiece. <br />
          <br />
          Now, to celebrate the winner I prepared three artworks that take
          inspiration from three lillafriends, I hope you
          <router-link to="/greed">enjoy it! </router-link>
        </p>
        <img
          src="./statics/blasphemous.jpg"
          v-on:click="selectLilac('blasphemous')"
        />
      </div>
      <div class="game__container">
        <img src="./statics/wow.jpg" v-on:click="selectLilac('wow')" />
        <p v-if="selected.includes('wow')" class="nominee__text">
          Reviewing the nominees made me re-think the Lilac winner. I thought
          that Hollow Knight should have won instead of... well, you know, but
          coming here I really think THIS should have been the Lilac winner.<br />
          Unfortunatley I feel the social pressure from my "friends" to ignore
          this game, thus having me forget this awesome adventure from the list.
          (I mean would you call "friends" someone who makes you jump your Raid
          night???) <br />
          World of Warcraft is still a thing. The old one and the new one. I
          started it trying out the retail version (the more modern), and it was
          like a new game from what I played during my youth.<br />
          The last expansion (Battle for Azeroth) wasn't good at all, it's a
          common judgement to say that it's one of the worst ever. But what kept
          this game floating and alive is the art department. <br />The music
          (even tho nobody ever keeps the music on playing wow, let's face it)
          is suuuuper high quality, the places are so different and
          interesting... it was wonderful to play a little bit through it. But
          after a couple of weeks I left it to try Classic, which is the 2006
          version of the game, the very first one. And there I found my happy
          place. <br />There I found my mindless grinding, my nostalgia, my new
          guild, my new friends, my new hobby, my new routine.<br />
          It really sucks that I feel forced to stay away from it because it's
          not well considered by the society to spend your spare time on a
          MMORPG, but it really made me happy. It helped me with the stress of
          the beginning of Covid, with work, with my problems. Really, wow
          Classic was my happy place. And I can also say I kind of "finished"
          it.<br />Classic started at patch 1.02 (if I'm not wrong) and month
          after month it got updated, just like during the old times, with new
          instances and bosses. And I playes many of them. I got to meet Onyxia,
          Ragnaros, Blackwing Lair, and many others. Until a new instance (AQ40,
          the second to last instance before The Burning Crusade) made my guild
          basically quit, since it was too difficult to beat. <br />And that was
          the end for me, I cleared the content I wanted to clear with the
          effort I wanted to put in. I then moved back to Retail to explore
          finally every thing I wanted to explore, waiting for the new
          Shadowlands expansion.<br />
          But then life came in my way and I stopped the subscription. Wow has
          been my family, my friend, my hobby, my life for a while, once again,
          and I accepted it with no guilt or regrets this time (fuck you all
          haters, why don't you wanna see me happy??).<br /><br />
          So the award for
          <span> My happy place that everybody wants me to ignore </span> goes
          to WoW! (I mean guys, you can have a Pug pet in the game and have it
          fight like pokemon with other monsters ffs)
        </p>
      </div>
      <div class="game__container game__right">
        <p
          v-if="selected.includes('seaofthieves')"
          class="nominee__text___right"
        >
          I really hate to put this game here but I must admit that It deserves
          a mention. Just for the water.<br />
          The game has changed since the last time I tried it with my
          lillafriends, but it still has a lot of work to go through. They put
          missions and adventures with a story in the game and that makes it
          feel like a real game, finally! Unfortunately... there are few of
          them, and they're kinda short.<br /><br />
          But the game has soo much potential maaan!
          <span>Unused potential </span> award is won by Sea of Thieves!
        </p>
        <img
          src="./statics/seaofthieves.jpg"
          v-on:click="selectLilac('seaofthieves')"
        />
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: [],
    };
  },
  methods: {
    selectLilac(arg) {
      return this.selected.push(arg);
    },
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-family: Lobster;
  color: white;
  font-size: 60px;
  text-align: center;
  max-width: 900px;
  padding-top: 3rem;
  margin: 0 auto;
}
h2 {
  color: #e4e2de;
  font-family: "VT323";
  font-size: 35px;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
}
h3 {
  color: #e4e2de;
  font-family: "PT Sans", Arial, Helvetica, sans-serif;
  font-size: 20px;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 1rem;
}
.nominee__text,
.nominee__text___right {
  opacity: 0;
  font-family: "PT Sans", Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #e4e2de;
  line-height: 1.2;
  a {
    color: #e4e2de;
    font-family: "VT323";
    font-size: 30px;
  }

  a:hover {
    font-size: 35px;
    color: white;
  }
}

.nominee__text {
  animation: 1s ease 0s normal forwards 1 slidein;
  z-index: 200;
}
.nominee__text___right {
  animation: 1s ease 0s normal forwards 1 slideinright;
  z-index: 200;
}

.home {
  width: 100vw;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, #02335d, #986960);
}
.lillacs {
  &__container {
    max-width: 900px;
    margin: 0 auto;
    margin-top: 7rem;
    display: flex;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    background-color: rgb(131, 123, 123);
  }
}
.game {
  &__container {
    width: 100%;
    min-height: 12rem;
    padding: 3rem;
    display: flex;
    background-color: #837b7b;

    :first-child {
      margin-right: 30px;
    }
    span {
      font-weight: bold;
      text-decoration: underline;
      margin: 0 !important;
      color: white;
    }
    img {
      z-index: 300;
      width: 300px;
      height: 150px;
      border-radius: 15px;
      cursor: pointer;
    }

    img:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
      transform: scale(1.1);
      transition: all 0.2s;
    }
  }
  &__right {
    display: flex;
    justify-content: flex-end;
    background-color: #776d6d;
  }
}

@keyframes slidein {
  0% {
    transform: translate(-200px);
    display: block;
    opacity: 0;
  }
  40% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideinright {
  0% {
    transform: translate(200px);
    display: block;
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

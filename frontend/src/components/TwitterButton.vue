<template>
  <div class="twitter-button-root">
    <button
      @click="methodHandler()"
      :class="[isBlueBg ? 'blueBg' : 'whiteBg']"
      :style="{ height: h, width: w, borderRadius: br }"
      v-html="text"
    >
      Tweet
    </button>
  </div>
</template>

<script>
import { methodsMixin } from "@/methodsMixin";

export default {
  mixins: [methodsMixin],
  props: ["h", "w", "br", "text", "bgType", "clickEvent"],
  computed: {
    isBlueBg() {
      return this.bgType === "blue";
    },
  },
  methods: {
    methodHandler() {
      try {
        this[this.clickEvent]();
      } catch (e) {
        console.log(
          `Error in TwitterButton components method handler method:\n ${e}`
        );
      }
    },
  },
};
</script>

<style scoped>
.blueBg {
  background: #1da1f2;
  color: white;
  border: 0px;
}

.blueBg:hover {
  background: #1a91da;
}

.whiteBg {
  background: white;
  color: black;
  border: none;
}

.whiteBg:hover {
  background: #e8f5fe;
}

button {
  outline: none;
  font-weight: bolder;
  font-size: 17px;
  transition: 300ms all;
  cursor: pointer;
}
</style>

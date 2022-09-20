<template>
  <router-link
    :to="path"
    tag="span"
    class="navitem-root"
    active-class="active"
    exact
  >
    <span class="navitem-icon">
      <i :class="icon">&nbsp; </i>
      <span class="hidden-xs">{{ text }} </span>
    </span>
    <span class="navitem-text"> </span>
  </router-link>
</template>

<script>
export default {
  props: ["icon", "text", "path"],
};
</script>

<style scoped>
@media only screen and (max-width: 1026px) {
  .hidden-xs {
    display: none;
  }
}

.navitem-root {
  padding: 11px 7px;
  color: black;
  background: white;
  transition: 100ms all;
  font-size: 23px;
  border-radius: 22px;
  cursor: pointer;
  display: inline-block;
  padding: 20px;
}

.navitem-root:hover {
  background: #e8f5fe;
  color: #1da1f2;
}

.active {
  font-weight: bolder;
}

.navitem-icon {
  margin: 0px 12px;
}

@media screen and (max-width: 1300px) {
  .navitem-text {
    display: none;
  }
}
</style>

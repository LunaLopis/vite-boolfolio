<script>
// import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  components: {
    AppHeader,
  }
}
</script>


<template>
  <div>
    <AppHeader />
    <router-view></router-view>
    <!-- <AppMain /> -->

  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;
</style>

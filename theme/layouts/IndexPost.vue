<template>
  <div class="theme-container ">
    <Header class="index" />
    <div class="main-bg">
      <div class="scroll-arrow"></div>
    </div>
    <main class="index-bg">
      <div>
        <ul v-if="$pagination">
          <li v-for="page in $pagination.pages" :key="page.key">
            <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
            <PostItem :page="page" />
          </li>
        </ul>
        <span v-else> no pagination </span>
        <div id="pagination" v-if="$pagination">
          <router-link v-if="$pagination.hasPrev" :to="$pagination.prevLink">Prev</router-link>
          <router-link v-if="$pagination.hasNext" :to="$pagination.nextLink">Next</router-link>
        </div>
      </div>
      <!-- article  -->
      <!-- <Content class="theme-cola-content" /> -->
    </main>
    <footer>Footer</footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import PostItem from '../components/PostItem.vue';
export default {
  components: { Header, PostItem }
};
</script>

<style>
.main-bg {
  position: relative;
  height: 100vh;
  margin-top: -60px;
  background-image: url('../assets/bg.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
}
main {
  background: #f5f5f5;
}
</style>

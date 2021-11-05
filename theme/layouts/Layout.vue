<template>
  <div class="theme-container">
    <Header />
    <main>
      <div>
        <ul id="default-layout" v-if="$pagination">
          <li v-for="page in $pagination.pages">
            <router-link class="page-link" :to="page.path">{{ page.title }}</router-link>
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
export default {
  components: { Header }
};
</script>

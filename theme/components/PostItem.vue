<template>
  <article class="article-item">
    <h2>{{ page.title }}</h2>
    <div v-html="page.excerpt"></div>
  </article>
</template>

<script>
export default {
  props: {
    page: Object
  },
  computed: {
    excerpt() {
      if (this.page.excerpt) {
        return this.page.excerpt;
      }
      console.log(this.page);
      debugger;
      return this.page;
    }
  }
};
</script>

<style></style>

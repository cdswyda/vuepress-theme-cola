<template>
  <header>
    <div class="header-inner">
      <div class="header-left">
        <a :href="$site.base">{{ $site.title }}</a>
      </div>
      <div class="header-right">
        <nav class="header-nav">
          <ol>
            <li v-for="item in navList">
              <a :href="item.path">{{ item.text }}</a>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    navList() {
      const base = this.$site.base;
      return [
        {
          text: '首页',
          path: `${base}`
        },
        {
          text: '分类',
          path: `${base}categories/`
        },
        {
          text: '归档',
          path: `${base}archive/`
        },
        {
          text: '标签',
          path: `${base}tags/`
        }
      ];
    }
  }
};
</script>

<style lang="stylus">
header {
    padding: 0;
    height: 60px;;
    &.index {
        background-color transparent;
        color:#fff;
        position: relative;
        z-index: 1
    }
    &.index a {
        color: rgba(#fff, 0.8);
        transition: all .2s ease-out;
        &:hover {
            color :#fff
        }
    }
}
.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1200px;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
}
.header-nav {
    ol {
        list-style: none;
    }
    li {
        float: left;
    }
}
</style>

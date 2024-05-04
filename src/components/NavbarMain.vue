<script>
import { RouterLink } from 'vue-router'

export default{
  props: {
    route: Number,
  },
  components: {
    RouterLink,
  },
  data() {
    return {
      active: this.route,
    }
  },
}
</script>

<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-link">
        <RouterLink to="/" class="links" :class="{ 'active' : active === 1}" @click="active = 1">
          <i class='bx bxs-home nav-icon'></i>
          <span>首頁</span>
        </RouterLink>
      </li>
      <li class="nav-link">
        <RouterLink to="/about" class="links" :class="{ 'active' : active === 2}" @click="active = 2">
          <i class='bx bxs-user nav-icon'></i>
          <span>關於</span>
        </RouterLink>
      </li>
      <li class="nav-link">
        <RouterLink to="/works" class="links" :class="{ 'active' : active === 3}" @click="active = 3">
          <i class='bx bxs-book nav-icon'></i>
          <span>作品</span>
        </RouterLink>
      </li>
      <li class="nav-link">
        <RouterLink to="/contact" class="links" :class="{ 'active' : active === 4}" @click="active = 4">
          <i class='bx bxs-comment nav-icon'></i>
          <span>聯絡資訊</span>
        </RouterLink>
      </li>
    </ul>
  </nav>

  <nav class="nav-hide">
    <ul class="nav-list-hide">
      <li class="nav-link-hide">
        <RouterLink to="/" class="links-hide" :class="{ 'active' : active === 1}" @click="active = 1">
          <i class='bx bxs-home nav-icon'></i>
        </RouterLink>
      </li>
      <li class="nav-link-hide">
        <RouterLink to="/about" class="links-hide" :class="{ 'active' : active === 2}" @click="active = 2">
          <i class='bx bxs-user nav-icon'></i>
        </RouterLink>
      </li>
      <li class="nav-link-hide">
        <RouterLink to="/works" class="links-hide" :class="{ 'active' : active === 3}" @click="active = 3">
          <i class='bx bxs-book nav-icon'></i>
        </RouterLink>
      </li>
      <li class="nav-link-hide">
        <RouterLink to="/contact" class="links-hide" :class="{ 'active' : active === 4}" @click="active = 4">
          <i class='bx bxs-comment nav-icon'></i>
        </RouterLink>
      </li>
    </ul>
  </nav>
  <main>
    <slot name="main"></slot>
  </main>
</template>

<style scoped>
  .nav {
    transition: width .5s cubic-bezier(0.19, 0.34, 0.28, 1.03);
    @apply w-[65px] h-screen fixed top-0 overflow-hidden bg-nav-color mr-20 hover:w-[175px] z-[10] hidden lg:block
  }
  .nav-hide {
    @apply w-full h-[80px] fixed top-0 bg-nav-color z-[10] flex lg:hidden justify-center
  }
  .nav-list-hide {
    @apply w-3/6 flex justify-around
  }
  .nav-list {
    @apply h-[280px] flex flex-col justify-around pl-[1px]
  }
  .nav-link {
    @apply w-full flex font-extrabold pl-5 relative
  }
  .nav-link-hide {
    @apply w-full flex font-extrabold relative
  }
  .links {
    transition: color ease-in-out .25s;
    @apply w-full flex items-center font-bold text-text-color break-keep hover:text-bg-white
  }
  .links-hide {
    transition: color ease-in-out .25s;
    @apply w-full flex items-center font-bold text-text-color break-keep hover:text-bg-white justify-center
  }
  i {
    @apply text-[1.8rem]
  }
  span {
    letter-spacing: 3px;
    @apply ml-5 text-[17px]
  }
  .active {
    @apply text-bg-white
  }
</style>
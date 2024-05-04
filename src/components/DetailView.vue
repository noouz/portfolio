<script>
export default{
  props: {
    workData: Object,
  },
  emits: ['back'],
  methods: {
    sendBack() {
      this.$emit('back', 0)
    },
  },
}
</script>

<template>
  <div class="detail-main">
    <div class="detail-container">
      <h1>&diam;{{ workData.name }}</h1>
      <div class="flex flex-col xl:flex-row xl:mb-10">
        <div class="pic" :class="workData.pic">
          <a :href="workData.view" target="_blank"></a>
        </div>
        <div class="right">
          <p v-html="workData.description"></p>
          <ul class="links">
            <li v-if="workData.github">
              <a :href="workData.github" target="_blank"></a>
              <i class='bx bxl-github'></i>
            </li>
            <li>
              <a :href="workData.view" target="_blank"></a>
              <i class='bx bx-link-external'></i>
              <span class="break-keep text-base lg:text-xl">劉覽</span>
            </li>
          </ul>
        </div>
      </div>
      <button class="back" type="button" @click="sendBack()">
        <i class='bx bx-arrow-back'></i>
        <span class="break-keep tracking-wide text-lg lg:text-xl pb-1 md:pb-0">返回</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
  .detail-main {
    @apply pt-[80px] pl-[30px] lg:pl-[120px] px-10 flex flex-col items-center lg:items-end relative xl:flex text-normal-text xl:h-screen overflow-x-hidden
  }
  .detail-container {
    @apply flex flex-col w-full md:w-[95%] lg:w-[93%] h-full py-10 lg:pt-0 lg:pr-10
  }
  h1 {
    @apply text-3xl tracking-wide mb-5 md:mb-8 md:text-4xl
  }
  .pic {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 5px 0px;
    @apply w-full xl:w-[45%] h-[330px] md:h-[430px] xl:h-[450px] bg-slate-400 rounded-md bg-center bg-no-repeat bg-cover min-w-[450px] relative
  }
  .right {
    @apply mt-auto lg:mt-0 xl:w-[55%] xl:flex xl:flex-col xl:justify-between
  }
  br {
    @apply block sm:hidden lg:block
  }
  p {
    @apply text-lg leading-[40px] mt-5 md:mt-8 xl:mt-0 md:text-xl md:leading-[45px] xl:pl-10
  }
  .links {
    @apply flex gap-x-2 w-full justify-end mt-10 lg:mt-10
  }
  li {
    transition: all .2s ease-in-out;
    @apply relative flex w-auto py-1 lg:py-0 text-lg items-center hover:text-text-color/90 
  }
  i {
    @apply text-2xl mr-1 lg:text-3xl
  }
  .bxl-github {
    @apply text-3xl lg:text-4xl
  }
  a {
    @apply absolute inset-0
  }
  .back {
    transition: all .2s ease-in-out;
    @apply flex items-center relative mt-auto bg-nav-color rounded py-2 px-3 hover:text-bg-white hover:bg-nav-color/80 w-[100px]
  }
</style>

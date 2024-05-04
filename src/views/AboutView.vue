<script>
import Icon from '@/images/icon.jpg';
import center from '@/images/center.png';
import Rbottom from '@/images/right-bottom.png';
import { gsap } from "gsap";

export default{
  data() {
    return {
      Icon, Rbottom, center,
    }
  },
  mounted() {
    const tl = gsap.timeline({ delay:.5, paused:true });
    tl.from( this.$refs.profile, { x: '+180', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.about, { x: '-180', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.from( this.$refs.text, { x: '-180', autoAlpha:0, duration: 1, ease: "sine.inOut" } );
    tl.play();
  },
}
</script>

<template>
  <main>
    <div class="about-container">
      <img :src="Rbottom" class="Rbottom cloud">
      <img :src="center" class="center cloud2">
      <div class="text">
        <h1 class="text-5xl lg:text-6xl xl:text-7xl font-STIX font-bold text-text-color tracking-wider" ref="about">ABOUT</h1>
        <p class="about-text" ref="text">平時喜歡繪圖創作，<br>熱愛學習新事物挑戰自己，<br>畢業後開始學習網站開發，<br>發現了自己對於寫程式的熱忱，<br>報名過線上課程以及參與職訓課程，<br>課程中接觸到前端、後端語言，<br>製作了不少練習作品並和小組組員共同完成專案。<br>目前仍在不斷學習擴展技能中...!</p>
      </div>
      <div class="profile" ref="profile">
        <img :src="Icon" alt="icon" class="rounded-full w-[150px] h-[150px] lg:w-[300px] lg:h-[300px] xl:w-[350px] xl:h-[350px]">
        <div class="flex flex-col ml-5 gap-y-2 pt-0 lg:pt-[15%] xl:pt-0">
          <span class="text-4xl lg:text-5xl font-STIX tracking-wider font-bold text-text-color">Mita</span>
          <div class="flex flex-wrap items-center gap-x-2 text-xl lg:text-2xl">
            <i class='bx bxs-balloon'></i>
            <span class="text-[1rem] lg:text-2xl">2000.06.10</span>
            <span class="text-[1rem] lg:text-2xl">出生</span>
          </div>
          <div class="flex flex-wrap items-center gap-x-2 text-xl lg:text-2xl">
            <i class='bx bxs-graduation' ></i>
            <span class="text-[1rem] lg:text-2xl break-keep">國立高雄科技大學</span>
            <span class="text-[1rem] lg:text-2xl">應用日語系</span>
            <span class="text-[1rem] lg:text-2xl">畢業</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  br {
    @apply hidden about:block
  }
  main {
    @apply pt-[80px] pl-[30px] lg:pl-[120px] px-10 flex flex-col items-end relative xl:flex overflow-x-hidden h-screen xl:overflow-y-hidden 
  }
  .about-container {
    @apply flex w-[95%] flex-col-reverse lg:flex-col xl:flex-row
  }
  .text {
    @apply xl:grow 
  }
  .profile {
    @apply flex lg:basis-[40%] lg:flex-row-reverse xl:flex-col text-normal-text gap-y-5 shrink-0 items-start my-[50px] sm:mb-[70px] lg:my-0 lg:items-center xl:items-start
  }
  .about-text {
    @apply py-2 lg:pb-0 xl:py-7 tracking-wider text-xl lg:text-2xl !leading-[50px] lg:!leading-[50px] xl:!leading-[60px] font-NotoSerif text-normal-text
  }
  i {
    @apply text-text-color
  }
  .center {
    transition: all 1s ease-in-out;
    @apply absolute top-[48%] left-[-50px] rotate-[-20deg] w-[30%] min-w-[320px] opacity-0
  }
  .Rbottom {
    transition: all 1s ease-in-out;
    @apply absolute bottom-[-200px] right-[-100px] rotate-[-20deg] opacity-0
  }
  .cloud {
    animation: cloud 3s ease-in-out forwards;
    animation-delay: 1s;
  }
  .cloud2 {
    animation: cloud 3s ease-in-out forwards;
    animation-delay: 2s;
  }
  @keyframes cloud {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>

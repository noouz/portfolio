<script>
import screen from '@/images/screen.png';
import books from '@/images/books.png';
import top from '@/images/left-top.png';
import center from '@/images/center.png';
import Lbottom from '@/images/left-bottom.png';
import Rbottom from '@/images/right-bottom.png';
import { gsap } from "gsap";

export default{
  data() {
    return {
      active: 1,
      screen,
      books,
      top,
      center,
      Lbottom,
      Rbottom,
    }
  },
  mounted() {
    const main = document.querySelector('main');
    main.classList.add('overflow-hidden');
    gsap.from( this.$refs.center, { opacity: '0.1', duration: 1, ease: "sine.inOut", autoAlpha:0 } );
    gsap.to( this.$refs.white, { x: '90%', y: '50%', duration: 5, ease: "sine.out" } );
    gsap.from( this.$refs.screen, { scale: '0', duration: 1.5, ease: "sine.inOut", autoAlpha:0 } );
    gsap.from( this.$refs.books, { x: '200', duration: 1, ease: "sine.inOut", autoAlpha:0, delay: 1, } );
    gsap.from( this.$refs.text, { x: '-50', duration: 1, ease: "sine.inOut", autoAlpha:0, delay: 1 } );
    gsap.from( this.$refs.h1, { x: '-100', duration: 1, ease: "sine.inOut", autoAlpha:0 } );
    gsap.from( this.$refs.h2, { x: '100', duration: 1, ease: "sine.inOut", autoAlpha:0 } );
  },
}
</script>

<template>
  <main>
    <div class="home-container">
      <div class="bg-bg-white absolute w-[220%] h-[220%] z-[3] rounded-tl-[20%] translate-x-[-40%] rotate-[-45deg]" ref="white"></div>
      <div class="text relative" ref="text">
        <span class="font-Poller text-[1rem] sm:text-[40px] md:text-[64px]">&lt;&lt;&lt;&lt;</span>
        <span class="mita">MITA 2024</span>
      </div>
      <div class="ouside-border">
        <ul class="colors">
          <li class="rounded bg-text-color w-full h-[15px] sm:h-[20px] md:h-[30px] xl:h-[40px] relative"></li>
          <li class="rounded bg-nav-color w-full h-[15px] sm:h-[20px] md:h-[30px] xl:h-[40px] relative"></li>
          <li class="rounded bg-main-pink w-full h-[15px] sm:h-[20px] md:h-[30px] xl:h-[40px] relative"></li>
        </ul>
        <h1 class="h1-1" ref="h1">PORTIFOLIO</h1>
        <h1 class="h1-2" ref="h2">PORTIFOLIO</h1>
        <img :src="screen" alt="my-screen" class="screen-img" ref="screen">
        <img :src="books" alt="books" class="books-img" ref="books">
        <div class="ouside-border2"></div>
      </div>
    </div>
    <img :src="top" class="top cloud" ref="top">
    <img :src="center" class="center cloud2 delay-100" ref="center">
    <img :src="Lbottom" class="Lbottom cloud2 delay-75" ref="Lbottom">
    <img :src="Rbottom" class="Rbottom cloud delay-150" ref="Rbottom">
  </main>
</template>

<style scoped>
  main {
    @apply pt-[40px] pl-[30px] lg:pl-[120px] lg:pt-0 p-10 h-screen flex flex-col items-end relative 
  }
  .home-container {
    @apply w-[98%] relative h-full flex flex-col justify-center lg:block
  }
  .text {
    @apply flex items-center text-nav-color w-full justify-end translate-x-[-7%] sm:h-[50px] md:mb-[5px] lg:mb-[15px] lg:mt-5 !z-[6]
  }
  .mita {
    -webkit-text-stroke: 1px #738290;
    @apply font-Notable text-[1rem] sm:text-[1.5rem] md:text-[2rem] lg:text-4xl relative tracking-wider pb-1 ml-2 sm:ml-5 text-main-gray
  }
  .ouside-border {
    @apply border-[3px] border-text-color rounded-[20px] w-[94%] h-[75%] lg:h-[85%] relative
  }
  .ouside-border2 {
    @apply border-[3px] border-nav-color rounded-[20px] w-full h-[101%] sm:h-full absolute top-[10px] sm:top-[30px] left-[15px] sm:left-[25px]
  }
  .screen-img {
    @apply h-[35%] sm:h-[38%] md:h-[45%] xl:h-[60%] absolute top-[46%] md:top-[40%] xl:top-[17%] left-[10%] z-[4]
  }
  .books-img {
    @apply h-[20%] md:h-[26%] xl:h-[33%] absolute top-[76px] right-[-3px] z-[4]
  }
  .h1-1 {
    -webkit-text-stroke: 3px #3D4F60;
    @apply font-Notable absolute bottom-[10px] right-[-16%] sm:right-[-8%] text-[48px] sm:text-[64px] md:text-[84px] lg:text-[100px] xl:text-[128px] text-transparent z-[8]
  }
  .h1-2 {
    @apply font-Notable absolute text-[#acb7c2] bottom-[5px] md:bottom-[3px] lg:bottom-0 right-[-17%] sm:right-[-8.5%] text-[48px] sm:text-[64px] md:text-[84px] lg:text-[100px] xl:text-[128px] z-[7]
  }
  .top {
    transition: all 1s ease-in-out;
    @apply absolute top-[40px] sm:top-[35px] lg:top-[-40px] left-[-100px] sm:left-[-100px] lg:left-[-30px] w-[50%] sm:w-[48%] lg:w-[38%] z-[3] max-w-[480px]
  }
  .center {
    transition: all 1s ease-in-out;
    @apply absolute top-[30%] sm:top-[33%] left-[20%] sm:left-[38%] w-[23%] sm:w-[28%] md:w-[23%] z-[3] min-w-[180px]
  }
  .Lbottom {
    transform: rotate(-5deg);
    transition: all 1s ease-in-out;
    @apply absolute bottom-[-25px] md:bottom-[-35px] lg:bottom-[-80px] left-[-40px] xl:left-[-30px] w-[28%] z-[6] min-w-[180px]
  }
  .Rbottom {
    transition: all 1s ease-in-out;
    @apply absolute bottom-[-30px] xl:bottom-[-110px] right-[-40px] w-[33%] z-[6] min-w-[220px]
  }
  .colors {
    @apply flex flex-col w-[15px] sm:w-[20px] md:w-[30px] xl:w-[40px] absolute right-[-40px] sm:right-[-55px] md:right-[-65px] xl:right-[-80px] justify-between top-[33px] gap-y-2 sm:gap-y-5 z-[4]
  }
  .colors > li::before {
    content: "";
    animation: colors ease-in .7s forwards;
    animation-delay: 1.5s;
    @apply bg-bg-white w-full h-full absolute inset-0 block
  }
  .cloud {
    animation: cloud 3s infinite ease-in-out;
  }
  .cloud2 {
    animation: cloud2 3s infinite ease-in-out;
  }

  @keyframes colors {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(100%);
    }
  }
  @keyframes cloud {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(3%);
    }
    100% {
      transform: translateY(0);
    }
  }
  @keyframes cloud2 {
    0% {
      transform: translateY(3%);
    }
    50% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(3%);
    }
  }
</style>
